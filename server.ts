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
        findError(error.code);
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
        findError(error.code);
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
app.use(express.static("dist"));

//Gains user info
app.post("/details", (req:any, res:any) => {
    const user:User = req.body;
    //Users password is checked for validity through a firebase error
    if(user.sign == "in"){
        signUserIn(user.email, user.pass);
    }
    else{
        signUserUp(user.email, user.pass);
    }
})
//Function to manage failed Sign up/in attempt
function findError(e: string){
    var userError: string = "";
    if(e == "auth/email-already-in-use"){userError = "Email entered is already in use."}
    else if(e == "auth/internal-error"){userError = "Internal Error."}
    else if(e == "auth/invalid-email"){userError = "Email entered is not valid"}
    else if(e == "auth/invalid-password"){userError = "Password entered is not valid"}
    else if(e == "auth/password-does-not-meet-requirements"){userError = "Password does not meet requirements"}
    else if(e == "auth/invalid-login-credentials"){userError = "Invalid login credentials"}
    else{
        console.log(`UNKNOWN ERROR: ${e}`);
        userError = "Unknown Error";
    }
}



const PORT: any = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})
