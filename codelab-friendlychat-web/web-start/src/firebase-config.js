/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCvGgBGBSBjP1xna1niOOvw2_BUlk5IQSs",
  authDomain: "fir-lern-a932c.firebaseapp.com",
  projectId: "fir-lern-a932c",
  storageBucket: "fir-lern-a932c.appspot.com",
  messagingSenderId: "859880237442",
  appId: "1:859880237442:web:c7043afe8175a2df0c879b"
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}

/* la siguiente configuracion permite utilizar servicio de NOTIFICACIONES de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvGgBGBSBjP1xna1niOOvw2_BUlk5IQSs",
  authDomain: "fir-lern-a932c.firebaseapp.com",
  projectId: "fir-lern-a932c",
  storageBucket: "fir-lern-a932c.appspot.com",
  messagingSenderId: "859880237442",
  appId: "1:859880237442:web:c7043afe8175a2df0c879b",
  measurementId: "G-6L3ZX0629Z"
};

// Initialize Firebase Analitics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/