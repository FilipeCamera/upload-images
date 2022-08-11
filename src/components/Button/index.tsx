import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
  onFunction: (e: any) => any;
}

export default function Button({ title, onFunction }: ButtonProps) {
  return <ButtonContainer onClick={onFunction}>{title}</ButtonContainer>;
}
