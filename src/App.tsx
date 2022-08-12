import React, { useCallback, useEffect, useState } from "react";
import Background from "./components/Background";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import storage from "./config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import GlobalStyle from "./styles";

function App() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [state, setState] = useState<number>(0);
  const [upload, setUpload] = useState<any>();

  useEffect(() => {
    if (state === 1) {
      setTimeout(() => setState(state + 1), 5000);
    }
  }, [state]);

  useEffect(() => {});

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
      const storageRef = ref(
        storage,
        `/images/${Date.now().toString()}-${event.dataTransfer.files[0].name}`
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        event.dataTransfer.files[0]
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const loadingPercent =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(loadingPercent);
        },
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUpload(url);

            setState(state + 1);
          });
        }
      );
    }
  }, []);

  const handleUpload = useCallback((event: any) => {
    event.preventDefault();

    const file = event.target.files[0];

    if (file.lenght !== 0) {
      const storageRef = ref(
        storage,
        `/images/${Date.now().toString()}-${file.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const loadingPercent =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(loadingPercent);
        },
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUpload(url);

            setState(state + 1);
          });
        }
      );
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Background>
        <Card className="card">
          <Steps
            image={upload}
            state={state}
            onFunction={() => {}}
            dragActive={dragActive}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleUpload={handleUpload}
          />
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
