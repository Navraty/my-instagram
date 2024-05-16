import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfrhpctts_5QD9mGr-NSy8EuGcp-lB9O4",
  authDomain: "my-instagram-769b0.firebaseapp.com",
  databaseURL: "https://my-instagram-769b0-default-rtdb.firebaseio.com",
  projectId: "my-instagram-769b0",
  storageBucket: "my-instagram-769b0.appspot.com",
  messagingSenderId: "844319584898",
  appId: "1:844319584898:web:2f68a88684290641043a9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistence is set to session-based");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { db, auth, storage };
