"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorField } from "@/components/error-field";
import { useToast } from "@/hooks/use-toast";

export default function SignupPage() {
  const { toast } = useToast();

  const formSchema = z.object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters long" })
      .max(20, { message: "Username must be at most  characters long" })
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username must not contain spaces or special characters"
      ),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[0-9]/, "Password must include at least one number"),
  });

  type FormData = z.infer<typeof formSchema>;

  const { handleSubmit, ...form } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Signup successful",
      description: "You can now login",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 sm:p-20 p-4">
      <h1 className="text-4xl font-bold font-mono pb-5">Start dumping</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-mono">Create an account</CardTitle>
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <ErrorField error={form.formState.errors.email.message!} />
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
              <div className="text-muted-foreground text-xs">
                <ul className="list-disc list-inside">
                  <li>must be at least 8 characters long</li>
                  <li>must include at least one number</li>
                  <li>must include at least one uppercase letter</li>
                </ul>
              </div>
            </div>
            <Button type="submit" className="w-full mt-5">
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>
      <p className="text-center py-2 text-muted-foreground">or</p>
      <Button variant="outline" className="w-full max-w-md p-5">
        Continue With Google
      </Button>
    </div>
  );
}
