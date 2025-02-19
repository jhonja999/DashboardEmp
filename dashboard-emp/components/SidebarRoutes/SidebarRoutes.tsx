// components/SidebarRoutes/SidebarRoutes.tsx
"use client";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Separator } from "@/components/ui/separator";
import {
  dataGeneralSideBar,
  dataSupportSideBar,
  dataToolSideBar,
} from "./SidebarRoutes.data";
import { Button } from "../ui/button";

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p>GENERAL</p>
          {dataGeneralSideBar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p>TOOLS</p>
          {dataToolSideBar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p>SUPPORT</p>
          {dataSupportSideBar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <div>
          <div className="text-center p-6">
            <Button variant="outline" className="w-full">
              UPGRADE PLAN
            </Button>
          </div>
        </div>
        <Separator />
        <footer className="text-sm mt-3 p-3 text-center">
          2025 UXJ4180 All rights reserved
        </footer>
      </div>
    </div>
  );
}
