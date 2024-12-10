import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Answer } from "@/types";

export interface QACardProps {
  // Core Q&A Data
  id: number;
  content: string;
  answers?: Answer[];
  created_at: Date;

  // User data
  is_anonymous: boolean;
  asker?: {
    username: string;
    email: string;
  };
  answerer?: {
    username: string;
    email: string;
  };
}

export default function QAcard(props: QACardProps) {
  const getRelativeTime = (date: Date) => {
    const diff = Date.now() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);

    return minutes < 1
      ? "just now"
      : minutes < 60
      ? `${minutes} min ago`
      : `${hours} hours ago`;
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-muted-foreground">
        <CardTitle className="flex text-muted-foreground text-sm justify-between">
          <span>
            {props.is_anonymous ? "Anonymous" : props.asker?.username} asked
          </span>
          <p>
            {Date.now() - props.created_at.getTime() > 24 * 60 * 60 * 1000
              ? props.created_at.toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
              : getRelativeTime(props.created_at)}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="font-semibold">
        <p>{props.content}</p>
      </CardContent>
      {props.answers && props.answers.length > 0 ? (
        <CardFooter className="mx-0 bg-muted pt-3 flex-col items-start">
          <div className="flex text-muted-foreground text-sm">
            @{props.answerer?.username} answered
          </div>
          <div className="pt-2 dark:text-neutral-100 tracking-wide">
            {props.answers.map((answer) => (
              <p key={answer.id}>{answer.content}</p>
            ))}
          </div>
        </CardFooter>
      ) : (
        <CardFooter className="mx-0 bg-muted pt-3">
          <p className="text-muted-foreground text-sm">No answer yet</p>
        </CardFooter>
      )}
    </Card>
  );
}
