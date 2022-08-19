import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdZ7-p-XOfu5kNi0J4bHTJmLkqFhjZ1Ac",
  authDomain: "startbucks-clone-5603c.firebaseapp.com",
  projectId: "startbucks-clone-5603c",
  storageBucket: "startbucks-clone-5603c.appspot.com",
  messagingSenderId: "958092781675",
  appId: "1:958092781675:web:f95c74ed5b1c693983e92e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw err
  }
};
const registerWithEmailAndPassword = async (firstname, lastname, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      firstname,
      lastname,
      authProvider: "local",
      email,
    });

    return user;
  } catch (err) {
    throw err
  }
};

const logoutFirebase = () => {
  return signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logoutFirebase,
};
