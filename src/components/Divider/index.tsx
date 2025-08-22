import { cn } from "@/utils/tailwind";

interface IProps {
  className?: string;
}

const Divider = ({ className }: IProps) => {
  return (
    <span className={cn("flex items-center", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-600"></span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-600"></span>
    </span>
  );
};

export default Divider;
