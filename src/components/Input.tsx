import { ComponentPropsWithoutRef, forwardRef, useId } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  errorMessage?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, ...rest }, ref) => {
    const id = useId();
    return (
      <>
        {" "}
        {!!label && <label htmlFor={id}>{label}</label>}
        <input {...rest} ref={ref} className="rounded mb-4 p-1" id={id} />
        {!!errorMessage && <span className="text-red-500">{errorMessage}</span>}
      </>
    );
  }
);

export default Input;
