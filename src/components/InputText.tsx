interface onInputChange {
  value: string;
}

interface InputTextProps {
  type: string;
  id: string;
  name: string;
  label: string;
  required: boolean;
  minLength: number;
  maxLength: number;
  size: number;
  onInputChange: (searchInput: onInputChange) => void;
}

export default function InputText({
  type,
  id,
  name,
  label,
  required,
  minLength,
  maxLength,
  size,
  onInputChange,
}: InputTextProps) {
  const handleChange = (event: { target: { value: string } }) => {
    let value = event.target.value;
    onInputChange({ value });
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        size={size}
        autoComplete="on"
        onChange={handleChange}
      ></input>
    </div>
  );
}
