// components/Sidebar/Sidebar.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { Logo } from "../Logo/Logo";

interface SidebarProps {
  isMobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({ isMobileOpen, setMobileOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar with Framer Motion */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-background shadow-lg xl:hidden"
          >
            <div className="h-full flex flex-col border-r">
              <Logo className="border-b" />
              <SidebarRoutes />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (always visible) */}
      <div className="hidden xl:flex xl:w-64 xl:fixed xl:inset-y-0 xl:left-0 xl:z-40 xl:bg-background xl:shadow-lg">
        <div className="h-full flex flex-col border-r">
          <Logo className="border-b" />
          <SidebarRoutes />
        </div>
      </div>

      {/* Overlay for Mobile - click to close */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 xl:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
}
