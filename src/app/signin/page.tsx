"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorField } from "@/components/error-field";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

import { redirect } from "next/navigation";

export default function SigninPage() {
  const { toast } = useToast();

  const formSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
  });

  type FormData = z.infer<typeof formSchema>;

  const { handleSubmit, ...form } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast({
      title: "Login successful",
      description: "redirecting to home page",
    });
    redirect(`/u/${data.username}`);
  };
  return (
    <div className="flex flex-col justify-center items-center pt-10 sm:p-20 p-4">
      <h1 className="text-4xl font-bold font-mono pb-5">Welcome back</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-mono">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                {...form.register("username")}
              />
              {form.formState.errors.username && (
                <ErrorField error={form.formState.errors.username.message!} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <ErrorField error={form.formState.errors.password.message!} />
              )}
            </div>
            <Button type="submit" className="w-full mt-5">
              Login
            </Button>
          </form>
          <div className="flex justify-center items-center gap-2 text-muted-foreground mt-3">
            <p>Don't have an account?</p>
            <Link
              href="/signup"
              className="text-blue-500 hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
      <p className="text-center py-2 text-muted-foreground">or</p>
      <Button variant="outline" className="w-full max-w-md p-5">
        Continue With Google
      </Button>
    </div>
  );
}
