import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuCYN1UkuW9GWc2yqgeA7D7O2IZ9-8x8Y",
  authDomain: "more-score.firebaseapp.com",
  projectId: "more-score",
  storageBucket: "more-score.firebasestorage.app",
  messagingSenderId: "508177414395",
  appId: "1:508177414395:web:6645f605d70f08d696585e",
  measurementId: "G-1YR0KWKWC4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth