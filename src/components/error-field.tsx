import { CircleAlert } from "lucide-react";
export const ErrorField = ({ error }: { error: String }) => {
  return (
    <p className="text-red-600 text-sm p-1 px-2 flex items-center gap-1">
      <CircleAlert className="w-4 h-4" />
      {error}
    </p>
  );
};
