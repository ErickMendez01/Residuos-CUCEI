"use client";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-muted/50", className)}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 md:py-4">
        <p className="text-center text-sm leading-loose md:text-left">
          © {new Date().getFullYear()} Proyecto <strong>Residuos</strong> –{" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-primary"
          >
            CUCEI
          </a>
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}

