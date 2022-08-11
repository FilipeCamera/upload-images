import React, { useState } from "react";

import { DropzoneContainer } from "./styles";

import Image from "../../assets/image.svg";

interface DropzoneProps {
  dragActive: boolean;
  handleDrag: (e: any) => any;
  handleDrop: (e: any) => any;
}

export default function Dropzone({
  dragActive,
  handleDrag,
  handleDrop,
}: DropzoneProps) {
  return (
    <DropzoneContainer
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      isDrag={dragActive}
    >
      <figure>
        <img src={Image} />
      </figure>
      <p>Drag & Drop your image here</p>
    </DropzoneContainer>
  );
}
