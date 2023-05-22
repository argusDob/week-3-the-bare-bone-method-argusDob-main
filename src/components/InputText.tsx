
interface InpuText {
  type: string;
  id: string;
  name: string;
  label: string;
  required: boolean;
  minLength: number;
  maxLength: number;
  size: number;
}

export default function InpuText(props: InpuText) {
  return (
    <div>
      <label htmlFor="name">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        size={props.size}
      ></input>
    </div>
  );
}
