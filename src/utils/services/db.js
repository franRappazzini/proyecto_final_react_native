import 'firebase/database';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDcQjBBVKEWpqQNeUT1HgzwJmJFq_QW5Ms',
  authDomain: 'coder-react-native.firebaseapp.com',
  databaseURL: 'https://coder-react-native-default-rtdb.firebaseio.com',
  projectId: 'coder-react-native',
  storageBucket: 'coder-react-native.appspot.com',
  messagingSenderId: '260273198917',
  appId: '1:260273198917:web:0bed2f853b213f1723102c',
};

const app = firebase.initializeApp(firebaseConfig);

export function getDB() {
  return firebase.database(app);
}
