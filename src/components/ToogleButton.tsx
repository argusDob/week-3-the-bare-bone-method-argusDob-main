import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

interface ToogleButtonProps {
  onClick: (data: boolean) => void;
}

export default function ToogleButton({ onClick }: ToogleButtonProps) {
  const [toggleState, setToggleState] = useState<boolean>(true);

  function handleToggleChange() {
    const updatedState = !toggleState;
    setToggleState(updatedState);
    onClick(updatedState);
  }

  return (
    <label>
      <Toggle
        defaultChecked={toggleState}
        onClick={handleToggleChange}
      />
      <h1>{String(toggleState)}</h1>
      <span>Switch Theme</span>
    </label>
  );
}
