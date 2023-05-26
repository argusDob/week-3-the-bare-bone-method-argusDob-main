interface PrimaryButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}
export default function PrimaryButton({
  text,
  disabled,
  onClick,
}: PrimaryButton) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div>
      <button disabled={disabled} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
