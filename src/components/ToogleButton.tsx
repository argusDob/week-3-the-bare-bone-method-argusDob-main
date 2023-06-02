import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

interface ToogleButtonProps {
  onToggle: () => void;
}

export default function ToogleButton({ onToggle }: ToogleButtonProps) {
  return (
    <label>
      <Toggle defaultChecked={true} onClick={onToggle} />
      <span>Switch Theme</span>
    </label>
  );
}
