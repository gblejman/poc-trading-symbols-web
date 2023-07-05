import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { config } from "../config";

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  app,
  analytics,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
