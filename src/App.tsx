import React, { useCallback, useState } from "react";
import Background from "./components/Background";
import Button from "./components/Button";
import Card from "./components/Card";
import Dropzone from "./components/Dropzone";
import Footer from "./components/Footer";
import GlobalStyle from "./styles";

function App() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [upload, setUpload] = useState<any>();

  const handleDrag = useCallback((event: any) => {
    event.preventDefault();

    if (event.type === "dragenter" || event.type === "dragover")
      setDragActive(true);

    if (event.type === "dragleave") setDragActive(false);
  }, []);

  const handleDrop = useCallback((event: any) => {
    event.preventDefault();

    setDragActive(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setUpload(event.dataTransfer.files);
      handleUpload();
    }
  }, []);

  const handleUpload = useCallback(() => {
    console.log(upload);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Background>
        <Card className="card">
          <h1 className="card__title">Upload your image</h1>
          <p className="card__subtitle">File should be jpeg, png...</p>
          <Dropzone
            dragActive={dragActive}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <p className="card__or">OR</p>
          <Button title="Choose a file" onFunction={(e: any) => {}} />
        </Card>
        <Footer>
          <p>
            created by <strong>Filipe Camera</strong> - devChallenges.io
          </p>
        </Footer>
      </Background>
    </>
  );
}

export default App;
