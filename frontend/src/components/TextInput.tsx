import { InputProps } from "../types";

function TextInput({
  value,
  placeholder,
  onChange,
  className,
  type,
  required,
}: InputProps) {
  return (
    <div>
      <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}

export default TextInput;
