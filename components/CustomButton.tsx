import React, { ButtonHTMLAttributes } from "react";
import { Loader } from "lucide-react";

type CustomButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  loading?: boolean;
};

const CustomButton = ({ text, loading, ...props }: CustomButtonType) => {
  return (
    <button
      className="mt-3 w-52 self-center rounded-3xl dark:bg-slate-600 p-2 dark:text-dark-color text-light-color bg-neutral-300 transition duration-200 dark:hover:bg-slate-500 hover:bg-neutral-400 active:translate-y-1"
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
