interface StudentTagProps {
  text: string;
}

export function StudentTag({ text }: StudentTagProps) {
  return (
    <span className="ml-2 rounded bg-pink-500 px-2 py-0.5 text-[10px] font-medium text-white">
      {text}
    </span>
  );
}