import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmomsAScHgPiP3LVTnKjPXWbOasF4tkgs",
  authDomain: "image-uploader-dev-challenge.firebaseapp.com",
  projectId: "image-uploader-dev-challenge",
  storageBucket: "image-uploader-dev-challenge.appspot.com",
  messagingSenderId: "376027611737",
  appId: "1:376027611737:web:b9d63928eea5614671a748",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
