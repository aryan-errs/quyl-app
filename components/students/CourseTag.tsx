import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap } from "lucide-react";

interface CourseTagProps {
  course: string;
}

export function CourseTag({ course }: CourseTagProps) {
  const Icon = course.includes("Science") ? BookOpen : GraduationCap;
  
  return (
    <Badge variant="secondary" className="flex items-center gap-1">
      <Icon className="h-3 w-3" />
      {course}
    </Badge>
  );
}