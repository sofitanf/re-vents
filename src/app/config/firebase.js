import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDH48DZyqplWXUBt3qu6_ZLGKE8OXZM1Eg',
  authDomain: 're-vents-12f3d.firebaseapp.com',
  projectId: 're-vents-12f3d',
  storageBucket: 're-vents-12f3d.appspot.com',
  messagingSenderId: '1082002412082',
  appId: '1:1082002412082:web:51fe45dd2281f80af3622b',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
