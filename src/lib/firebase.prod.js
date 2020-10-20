import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDt1iAVc9TKf9buK7BdJCxeSVU5Ekn13Xs",
  authDomain: "scrimba-netflix.firebaseapp.com",
  databaseURL: "https://scrimba-netflix.firebaseio.com",
  projectId: "scrimba-netflix",
  storageBucket: "scrimba-netflix.appspot.com",
  messagingSenderId: "472711657678",
  appId: "1:472711657678:web:02feb594da1b3e5bdb789f"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };