import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiZvyHX_fxb6IHjik2aGFkKWYXC9Y06tc",
  authDomain: "practica-auth-e3485.firebaseapp.com",
  projectId: "practica-auth-e3485",
  storageBucket: "practica-auth-e3485.firebasestorage.app",
  messagingSenderId: "853248032117",
  appId: "1:853248032117:web:8483b7e23cb7c14d83a73c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app);

export {app, auth, provider };
