import { ChangeEvent } from "react";

interface InputProps {
  labelName: string;
  htmlFor: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function InputBasic(props: InputProps) {
  return (
    <div className="flex flex-col gap-2 justify-center w-full">
      <label htmlFor={props.htmlFor}>{props.labelName}</label>
      <input
        className="rounded-md bg-input-bg py-2 px-2 w-full"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
}
