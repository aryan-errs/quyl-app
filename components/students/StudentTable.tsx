"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CourseTag } from "./CourseTag";
import { StudentStatus } from "./StudentStatus";
import { StudentTag } from "./StudentTag";

interface Student {
  id: number;
  name: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: string;
  tags?: string[];
}

// Props interface
interface StudentTableProps {
  students: Student[];
}

export function StudentTable({ students }: StudentTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead>Cohort</TableHead>
            <TableHead>Courses</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead>Last login</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">
                {student.name}
                {student.tags?.map((tag) => (
                  <StudentTag key={tag} text={tag} />
                ))}
              </TableCell>
              <TableCell>{student.cohort}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {student.courses.map((course, index) => (
                    <CourseTag key={index} course={course} />
                  ))}
                </div>
              </TableCell>
              <TableCell>{student.dateJoined}</TableCell>
              <TableCell>{student.lastLogin}</TableCell>
              <TableCell>
                <StudentStatus status={student.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
