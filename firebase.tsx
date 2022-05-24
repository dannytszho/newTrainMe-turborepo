import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCxq4C79TayQbV4L0zXHTRDmaQqDry8o1s',
  authDomain: 'train-me-7fcc5.firebaseapp.com',
  projectId: 'train-me-7fcc5',
  storageBucket: 'train-me-7fcc5.appspot.com',
  messagingSenderId: '544537452457',
  appId: '1:544537452457:web:a3d31d6b0cd37a447beeb8',
};

// Initial Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// eslint-disable-next-line import/prefer-default-export

