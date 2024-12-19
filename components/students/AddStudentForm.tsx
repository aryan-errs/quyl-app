"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStudents } from "@/contexts/StudentContext";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  cohort: z.string(),
  courses: z.array(z.string()).min(1, "Select at least one course"),
});

interface AddStudentFormProps {
  onSuccess: () => void;
}

const AVAILABLE_COURSES = [
  "CBSE 9 Science",
  "CBSE 9 Math",
];

export function AddStudentForm({ onSuccess }: AddStudentFormProps) {
  const { addStudent } = useStudents();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cohort: "AY 2024-25",
      courses: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addStudent(values);
    onSuccess();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter student name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cohort"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cohort</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cohort" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                  <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="courses"
          render={() => (
            <FormItem>
              <FormLabel>Courses</FormLabel>
              <div className="space-y-2">
                {AVAILABLE_COURSES.map((course) => (
                  <FormField
                    key={course}
                    control={form.control}
                    name="courses"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(course)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), course]
                                : field.value?.filter((value) => value !== course) || [];
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">{course}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="submit">Add Student</Button>
        </div>
      </form>
    </Form>
  );
}