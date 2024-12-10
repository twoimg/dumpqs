"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { SendHorizonal } from "lucide-react";
import { Loader2 } from "lucide-react";

import QAcard from "@/components/qa-card";

import { getUser, getQuestions, postQuestion } from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Question, User } from "@/types";
import { useToast } from "@/hooks/use-toast";

import { useRef } from "react";

export default function UserProfilePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const questionRef = useRef<HTMLTextAreaElement>(null);

  // Sort QAs by createdAt date, most recent first
  const sortedQAs = questions?.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const { userid } = useParams<{ userid: string }>();

  const loadData = async () => {
    const [user, questions] = await Promise.all([
      getUser(userid),
      getQuestions(userid),
    ]);
    //setUser(user);
    setQuestions(questions.data.questions);
    setUser(user.data);
  };

  const sendQuestion = async () => {
    if (!user) return;

    const content = questionRef.current?.value;
    if (!content) return;

    setIsLoading(true);

    const response = await postQuestion({
      to_user_id: user.id,
      isAnonymous: false,
      question: content,
    });
    if (response.status === 200) {
      toast({
        title: "Question sent successfully",
        description: "Your question has been sent to the user",
      });
    } else {
      toast({
        title: "Failed to send question",
        description: "Please try again",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const avatar =
    "https://img.freepik.com/premium-photo/beautiful-anime-girl-profile-dark-gray-background_864588-33913.jpg";

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex flex-col items-center pt-10 sm:p-20 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatar} alt="User avatar" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-mono">{userid}</CardTitle>
            <p className="text-muted-foreground">Joined January 2024</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-muted-foreground">
                This is where the user's bio would go. They can tell us about
                themselves.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">questions</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-muted-foreground">answered</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <Textarea
            ref={questionRef}
            placeholder="uhhhhhh..."
            className="resize-none min-h-24"
          />
          <Button
            variant="outline"
            size="lg"
            className="min-h-24"
            onClick={sendQuestion}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <SendHorizonal className="w-4 h-4 mr-2" />
            )}
            <span>Ask</span>
          </Button>
        </CardFooter>
      </Card>

      {/* QA Cards */}
      <div className="w-full max-w-2xl space-y-4 mt-10">
        <h2 className="text-2xl font-semibold font-mono">
          Questions & Answers
        </h2>
        {sortedQAs.map((qa) => (
          <QAcard key={qa.id} {...qa} created_at={new Date(qa.created_at)} />
        ))}
      </div>
    </div>
  );
}
