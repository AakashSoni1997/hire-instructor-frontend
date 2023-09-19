import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBI2xsPs6YuOL1L-zXVtoffcGJqqKER7Ts",
  authDomain: "testing-hireinstructor.firebaseapp.com",
  projectId: "testing-hireinstructor",
  storageBucket: "testing-hireinstructor.appspot.com",
  messagingSenderId: "106675977143",
  appId: "1:106675977143:web:ae69c6f194ca971fb80632",
  measurementId: "G-PR8GE2M9TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};
// hello

