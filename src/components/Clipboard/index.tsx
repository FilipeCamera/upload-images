import React from "react";
import { ClipboardContainer } from "./styles";

interface ClipboardProps {
  link: string;
}

export default function Clipboard({ link }: ClipboardProps) {
  return (
    <ClipboardContainer>
      <div className="__subcontainer">
        <p>{link}</p>
        <button onClick={() => navigator.clipboard.writeText(link)}>
          Copy Link
        </button>
      </div>
    </ClipboardContainer>
  );
}
