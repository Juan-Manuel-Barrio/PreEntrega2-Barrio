import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyCuqxpMrk-m3CrI62XIB8SNh5eKKEalbJ4",
authDomain: "bang-ok.firebaseapp.com",
projectId: "bang-ok",
storageBucket: "bang-ok.appspot.com",
messagingSenderId: "1077990277481",
appId: "1:1077990277481:web:121ab5f60f4f758b2fbdf8",
measurementId: "G-D24H0TX14X"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);