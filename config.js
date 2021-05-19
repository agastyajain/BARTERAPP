import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAfQIGqJpe4Qvf8D42-1JQydFR0leZvMUs',
  authDomain: 'book-santa-application-f06b9.firebaseapp.com',
  projectId: 'book-santa-application-f06b9',
  storageBucket: 'book-santa-application-f06b9.appspot.com',
  messagingSenderId: '889919756105',
  appId: '1:889919756105:web:935d5463314e11e9c9ac98',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
