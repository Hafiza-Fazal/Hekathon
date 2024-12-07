import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyATOzBrDJAVUtRUBQsynBRTPkbWRp-uivg",
    authDomain: "blog-app-b94cc.firebaseapp.com",
    projectId: "blog-app-b94cc",
    storageBucket: "blog-app-b94cc.firebasestorage.app",
    messagingSenderId: "123040459623",
    appId: "1:123040459623:web:f37dd07966df33345addc2",
    measurementId: "G-Q5YTZL7QSK"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export{getAuth , auth , createUserWithEmailAndPassword }
