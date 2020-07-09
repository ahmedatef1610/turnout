import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyABiiX5YHbUkHk5WWeSJ3zjDFbBQYBkd-M",
    authDomain: "turnout-da502.firebaseapp.com",
    databaseURL: "https://turnout-da502.firebaseio.com",
    projectId: "turnout-da502",
    storageBucket: "turnout-da502.appspot.com",
    messagingSenderId: "409980645360",
    appId: "1:409980645360:web:1dbd230486ef896b"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const eventsRef = firebaseApp.database().ref().child('events');