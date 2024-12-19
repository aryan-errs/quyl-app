import Link from "next/link";
import { Feather } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Feather className="h-6 w-6" />
      <span className="text-2xl font-bold">Quyl.</span>
    </Link>
  );
}