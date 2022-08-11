import React, { useRef } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  onFunction: (e: any) => any;
}

export default function Button({ title, onFunction }: ButtonProps) {
  const inputRef = useRef<any>();

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        onChange={onFunction}
      />
      <ButtonContainer onClick={handleClick}>{title}</ButtonContainer>
    </>
  );
}
