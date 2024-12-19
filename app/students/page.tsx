import { StudentFilters } from "@/components/students/StudentFilters";
import { StudentTable } from "@/components/students/StudentTable";
import {getStudentsData} from "../../utils/handler.ts"


export default async function StudentsPage() {
  const data = await getStudentsData();
  console.log(data);
  
  return (
    <div className="space-y-4">
      <StudentFilters />
      <StudentTable students={data.props.students} />
    </div>
  );
}
