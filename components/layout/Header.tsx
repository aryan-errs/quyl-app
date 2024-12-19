"use client";

import { Bell, HelpCircle, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserMenu } from "./UserMenu";
import { NotificationBadge } from "./NotificationBadge";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <div className="flex flex-1 items-center gap-4">
          <Input
            type="search"
            placeholder="Search your course"
            className="w-[300px]"
          />
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <LayoutGrid className="h-5 w-5" />
            <NotificationBadge count={2} />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <NotificationBadge count={5} />
          </Button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}