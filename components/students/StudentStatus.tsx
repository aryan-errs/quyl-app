interface StudentStatusProps {
  status: "active" | "inactive";
}

export function StudentStatus({ status }: StudentStatusProps) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${
        status === "active" ? "bg-green-500" : "bg-red-500"
      }`}
    />
  );
}