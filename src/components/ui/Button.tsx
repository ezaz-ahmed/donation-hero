import { ComponentProps, FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<"button">;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="p-1 relative" {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-daisyBush rounded-[6px]  relative group transition duration-200 text-goldenFizz hover:bg-transparent">
        {children}
      </div>
    </button>
  );
};

export default Button;
