import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mps-scheduler.firebaseapp.com",
  projectId: "mps-scheduler",
  storageBucket: "mps-scheduler.appspot.com",
  messagingSenderId: "417620407550",
  appId: "1:417620407550:web:1cf3d9f4906dca7f1f21af",
};

export const app = initializeApp(firebaseConfig);
