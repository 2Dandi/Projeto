import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const Button = ({children, ...props}: Props) => {
    return (
      <button
       {...props}
       className="bg-violet-500 h-10 text-black font-bold hover:bg-violet-400 disabled:bg-gray-200 shrink w-50"
       >{children}
       </button>
    )
  }