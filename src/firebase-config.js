import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAc0eojLEh2fRgdybrwPEUUTkY9e0j_ERA",
    authDomain: "zeon-store-auth.firebaseapp.com",
    projectId: "zeon-store-auth",
    storageBucket: "zeon-store-auth.appspot.com",
    messagingSenderId: "156865696946",
    appId: "1:156865696946:web:a544d1adc9a1f7240f25ab"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);