import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDPSjsqgD9bnb_9M-c6vBUKgzUWShkKpU4',
  authDomain: 'database-personal-site.firebaseapp.com',
  databaseURL: 'https://database-personal-site.firebaseio.com',
  projectId: 'database-personal-site',
  storageBucket: 'database-personal-site.appspot.com',
  messagingSenderId: '507493003528'
};

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
