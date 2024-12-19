"use client";

import { createContext, useContext, useState } from "react";
import { Student } from "@/lib/types/student";
import { students as initialStudents } from "@/lib/constants/students";

interface StudentContextType {
  students: Student[];
  addStudent: (student: Omit<Student, "id" | "dateJoined" | "lastLogin" | "status">) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const addStudent = (newStudent: Omit<Student, "id" | "dateJoined" | "lastLogin" | "status">) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const formattedTime = currentDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const student: Student = {
      id: students.length + 1,
      ...newStudent,
      dateJoined: formattedDate,
      lastLogin: `${formattedDate} ${formattedTime}`,
      status: "active",
    };

    setStudents((prev) => [...prev, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
}