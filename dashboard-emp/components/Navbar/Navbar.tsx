// components/Navbar/Navbar.tsx
"use client";

import * as React from "react";
import { Menu, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <nav className="flex items-center px-4 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      {/* Hamburger button for mobile */}
      <div className="block xl:hidden">
        <Button variant="outline" onClick={onToggleSidebar}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Search input (visible on md and up) */}
      <div className="relative w-[380px] hidden md:block">
        <Input placeholder="Search ..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute top-2 right-2" />
      </div>

      {/* Theme toggle & User button */}
      <div className="flex gap-x-2 items-center">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
}
