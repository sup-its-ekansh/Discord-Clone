import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAGKm0Wu76Bj_VHpyRIa1LyS_VC-8ongEM",
    authDomain: "discord-clone-c7e2f.firebaseapp.com",
    projectId: "discord-clone-c7e2f",
    storageBucket: "discord-clone-c7e2f.appspot.com",
    messagingSenderId: "868220016228",
    appId: "1:868220016228:web:fa87292bd64d906f36f171",
    measurementId: "G-6RDRRYED5T"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;