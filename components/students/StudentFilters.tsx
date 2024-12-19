"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddStudentDialog } from "./AddStudentDialog";

export function StudentFilters() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex gap-2">
        <Select defaultValue="2024-25">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024-25">AY 2024-25</SelectItem>
            <SelectItem value="2023-24">AY 2023-24</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="cbse-9">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cbse-9">CBSE 9</SelectItem>
            <SelectItem value="cbse-10">CBSE 10</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <AddStudentDialog />
    </div>
  );
}