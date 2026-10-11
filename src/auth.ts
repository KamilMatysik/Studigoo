//Adding SDKs
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import "express";
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
//const analytics = firebase.analytics();
//const auth = firebase.auth();

//Code from FireBase docs that allows user to create new account
//Need to create form in HTML that passes an email and password to here (ensure they are valid first)
function signUserUp(email: string, password: string){
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
}

function signUserIn(email: string, password: string){
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
}

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

//Using Express in Node to get POST data
interface User {
    email: string;
    pass: string;
    sign: string;
}
const express = require("express");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true}));
app.use(express.static("src"));
//In case it is needed in the future
//app.get("/details", (req:any, res:any) => {
//
//});
//Gains user info
app.post("/details", (req:any, res:any) => {
    const user:User = req.body;
    //Check if users password is valid
    if(testUserPassword(user.pass)){
        if(user.sign == "in"){
            signUserIn(user.email, user.pass);
        }
        else{
            signUserUp(user.email, user.pass);
        }
    }
    else{
        //Find way to return password error
    }
})

function testUserPassword(pass: string){
    //Build password testing logic later
    return 1;
}

const PORT: any = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})
