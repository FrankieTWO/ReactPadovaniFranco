import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDheqwfI4hg5fc_wdThMwcHOZTzAWgu_Xw",
    authDomain: "arasakacorp.firebaseapp.com",
    projectId: "arasakacorp",
    storageBucket: "arasakacorp.appspot.com",
    messagingSenderId: "154434927978",
    appId: "1:154434927978:web:e8fe17ec66552727193913"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)