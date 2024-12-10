import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center h-28">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/2wons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Made with ❤️ by @vcfymb
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/2wons/dumpqs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Github
      </a>
      <ModeToggle />
    </footer>
  );
}
