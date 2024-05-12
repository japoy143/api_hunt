import { InputProps } from "../types";

function TextInput({ value, placeholder, onChange, className }: InputProps) {
  return (
    <div>
      <input
        className={className}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
