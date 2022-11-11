// TODO: Set up Firebase Cloud Messaging service worker

// Import and configure the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
import { getFirebaseConfig } from './firebase-config'; // funcion de validacion en la otra carpeta

const firebaseApp = initializeApp(getFirebaseConfig());
getMessaging(firebaseApp); // inicializa firebase messaging
console.info('Firebase messaging service worker is set up');