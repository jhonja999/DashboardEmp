"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "min-h-20 h-20 flex items-center px-6 cursor-pointer gap-2",
        className
      )}
      onClick={() => router.push("/")}
    >
      <Image
        src="/logo.svg"
        alt="NINAGOLD Logo"
        width={30}
        height={30}
        priority
      />
      <h1 className="text-xl font-bold text-[#d4af37] ml-2">NINAGOLD</h1>
    </div>
  );
}