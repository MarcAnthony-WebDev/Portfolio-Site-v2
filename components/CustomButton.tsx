import React from "react";
import { Loader } from "lucide-react";

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  loading?: boolean;
};

const CustomButton = ({ text, loading = false, ...props }: CustomButtonProps) => {
  return (
    <button
      className="mt-3 w-52 self-center rounded-3xl bg-neutral-300 p-2 text-light-color transition duration-200 hover:bg-neutral-400 active:translate-y-1 dark:bg-slate-600 dark:text-dark-color dark:hover:bg-slate-500"
      {...props}
    >
      {loading ? (
        <div className="flex justify-center gap-2">
          {text} <Loader className="animate-spin" />
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default CustomButton;
