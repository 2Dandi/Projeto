import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label: string
}

export const InputText = ({label,... props}: Props) => {
  return (
    <label className="flex flex-col w-full
    ">
        <span >{label}</span>
        <input type="email" {...props} className="  border border-black h-10 px-4"/>
    </label>
  )
}
