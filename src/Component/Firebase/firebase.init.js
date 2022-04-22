import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.conf";

const firebaseinitialize = () => {
    initializeApp(firebaseConfig);
}

export default firebaseinitialize;