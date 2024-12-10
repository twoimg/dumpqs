import { Button } from "@/components/ui/button";
import DummyQA from "@/components/dummy-qa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold font-mono">dumpqs</h1>
        <p className="text-lg">
          A simple tool to dump your queries anonymously.
        </p>
        <div className="flex gap-8">
          <Link href="/signup">
            <Button>Sign up with email</Button>
          </Link>
          <Button variant="outline">Continue with Google</Button>
        </div>
        <div className="flex items-center gap-3">
          <p>Already have an account?</p>
          <Link href="/signin">
            <Button variant="secondary">Sign in</Button>
          </Link>
        </div>
        <DummyQA />
      </main>
    </div>
  );
}
