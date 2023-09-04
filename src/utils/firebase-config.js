// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDIIgczPbiTW1iN8xy5ppeXMMrNvQrfsoY',
  authDomain: 'react-netflix-clone-c19b8.firebaseapp.com',
  projectId: 'react-netflix-clone-c19b8',
  storageBucket: 'react-netflix-clone-c19b8.appspot.com',
  messagingSenderId: '568763849157',
  appId: '1:568763849157:web:cf72e6770fa9400b5c13ac',
  measurementId: 'G-Y3LZ5BGQML',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
