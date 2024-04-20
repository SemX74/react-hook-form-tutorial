import { FC } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (val: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <input
      checked={checked}
      type="checkbox"
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default Checkbox;
