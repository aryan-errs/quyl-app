"use client";

import { StudentProvider } from "@/contexts/StudentContext";

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StudentProvider>{children}</StudentProvider>;
}