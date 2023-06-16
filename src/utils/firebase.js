import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOKKErzbpc9Sx8nfU0rn_J5A2oKVK8dto",
  authDomain: "proyectcarrito.firebaseapp.com",
  projectId: "proyectcarrito",
  storageBucket: "proyectcarrito.appspot.com",
  messagingSenderId: "81849561176",
  appId: "1:81849561176:web:048d8d22290eef4ce0da2d",
  measurementId: "G-3M80WJFNVF"
};

export const iniFirebase = initializeApp(firebaseConfig);
