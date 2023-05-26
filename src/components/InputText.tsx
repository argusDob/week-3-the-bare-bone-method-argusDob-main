
interface onInputChange {
  value: string;
}

interface InpuText {
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

export default function InpuText({
  type,
  id,
  name,
  label,
  required,
  minLength,
  maxLength,
  size,
  onInputChange,
}: InpuText) {
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

