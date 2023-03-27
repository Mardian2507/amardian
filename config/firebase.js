import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_APIKEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECTID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC,
  // appId: process.env.NEXT_PUBLIC_APPID,
  apiKey: "AIzaSyDvsuzJSETsUi9-6ggWiVREFtz1O7yHkCY",
  authDomain: "login-hela-atuh.firebaseapp.com",
  projectId: "login-hela-atuh",
  storageBucket: "login-hela-atuh.appspot.com",
  messagingSenderId: "399560072723",
  appId: "1:399560072723:web:a83debe913684b7c0329e6",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
