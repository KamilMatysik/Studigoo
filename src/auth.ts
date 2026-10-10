//Adding SDKs
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/analytics";
//Add more SDKs here

const firebaseConfig = {
    apiKey: "AIzaSyCDgY0nKwgosw1i6f8OKwu0K-ZgfdWNjLI",
    authDomain: "studigoo-511217.firebaseapp.com",
    projectId: "studigoo-511217",
    storageBucket: "studigoo-511217.firebasestorage.app",
    messagingSenderId: "590953897020",
    appId: "1:590953897020:web:3397c53a49b6023e7db739",
    measurementId: "G-LWTKJ27D58"
};
//Init FireBase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();

//Code from FireBase docs that allows user to create new account
//Need to create form in HTML that passes an email and password to here (ensure they are valid first)
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        //Signed in
        var user = userCredential.user
        //Add functionality here
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    })

//Allow users to sign in
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        //Signed in
        var user = userCredential.user;
        //Add functionality here
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    })

//Called when user's sign-in state changes
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        //User is signed in
        var uid = user.uid;
        //Add functionality
    }
    else{
        //User is signed out
        //Add functionality
    }
    
})
