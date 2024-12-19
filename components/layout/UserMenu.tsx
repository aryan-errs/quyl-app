"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserMenu() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">Adeline H. Dancy</p>
      </div>
    </div>
  );
}