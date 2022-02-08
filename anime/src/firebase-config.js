import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDuWg9sRx6qiLrfY51ef7zk35dYxcwcwHM",
    authDomain: "new-anime-1004d.firebaseapp.com",
    projectId: "new-anime-1004d",
    storageBucket: "new-anime-1004d.appspot.com",
    messagingSenderId: "438589633022",
    appId: "1:438589633022:web:e9dbd3b40d2d16fef8d0af",
    measurementId: "G-1WPGMLSQVS"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);