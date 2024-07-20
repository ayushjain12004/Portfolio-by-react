
  
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyCZqePCpM29sTmj0F6O-dmtyKcU9JtkFIM",
  authDomain: "react-portfolio-ayushjain.firebaseapp.com",
  projectId: "react-portfolio-ayushjain",
  storageBucket: "react-portfolio-ayushjain.appspot.com",
  messagingSenderId: "55489126640",
  appId: "1:55489126640:web:1313c8b124207049afa235"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();