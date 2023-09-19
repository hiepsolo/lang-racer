import { appStore, getState } from '@/store';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFromLocal, saveToLocal } from './local';

import { getAnalytics } from "firebase/analytics";
import { getUserInfo } from './database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXGFz2P590CmZwgEvAS-Ty1WVKYagjWqU",
  authDomain: "langracer-dev.firebaseapp.com",
  projectId: "langracer-dev",
  storageBucket: "langracer-dev.appspot.com",
  messagingSenderId: "974386397319",
  appId: "1:974386397319:web:70d3039fbbb1f1dd48f822",
  measurementId: "G-C5RPGS8LXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  const { setUser } = getState();
  if (user) {
    setUser(user.displayName || user.email!)
    if (getFromLocal() === null) {
      getUserInfo(user.uid).then(data => {
        if (data.data()) {
          saveToLocal(data.data()!)
        }
      })
    }
  }
})