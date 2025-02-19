// components/layout/DashboardContent.tsx
"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to control mobile sidebar visibility
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar handles its own responsive rendering */}
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Main content: on xl, add left margin to account for fixed sidebar */}
      <div className="flex-1 flex flex-col overflow-hidden xl:ml-64">
        <Header />
        <Navbar onToggleSidebar={() => setMobileSidebarOpen((prev) => !prev)} />
        <main className="flex-1 overflow-auto p-6 bg-[#1c1c1c] dark:bg-secondary">
          {children}
        </main>
      </div>
    </div>
  );
}
