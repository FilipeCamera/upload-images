import { CheckCircle } from "@mui/icons-material";
import { Box, LinearProgress } from "@mui/material";

import React from "react";
import Button from "../Button";
import Dropzone from "../Dropzone";
import Clipboard from "../Clipboard";

interface StepsProps {
  image: string;
  state: number;
  onFunction: (e: any) => any;
  dragActive: boolean;
  handleDrag: (e: any) => any;
  handleDrop: (e: any) => any;
  handleUpload: (e: any) => any;
}

export default function Steps({
  state,
  image,
  onFunction,
  dragActive,
  handleDrag,
  handleDrop,
  handleUpload,
}: StepsProps) {
  if (state === 2) {
    return (
      <>
        <CheckCircle
          style={{ color: "#219653", width: 35, height: 35, marginBottom: 10 }}
        />
        <h1 className="card__title">Uploaded Successfully!</h1>
        <figure className="card__figure">
          <img src={image} />
        </figure>
        <Clipboard link={image} />
      </>
    );
  }
  if (state === 1) {
    return (
      <>
        <p className="card__p-upload">Uploading...</p>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </>
    );
  }
  return (
    <>
      <h1 className="card__title">Upload your image</h1>
      <p className="card__subtitle">File should be jpeg, png...</p>
      <Dropzone
        dragActive={dragActive}
        handleDrag={handleDrag}
        handleDrop={handleDrop}
      />
      <p className="card__or">OR</p>
      <Button title="Choose a file" onFunction={handleUpload} />
    </>
  );
}
