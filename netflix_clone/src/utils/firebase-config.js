import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAGV2ukycxvqKi3barwzjDft8XbGQwvz9o",
    authDomain: "netflix-clone-n13.firebaseapp.com",
    projectId: "netflix-clone-n13",
    storageBucket: "netflix-clone-n13.appspot.com",
    messagingSenderId: "572515292006",
    appId: "1:572515292006:web:ba8ad7f2a15addb9daeea7",
    measurementId: "G-TCLWZSK79T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);