"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Adding SDKs
const app_1 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
require("firebase/compat/analytics");
require("express");
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
app_1.default.initializeApp(firebaseConfig);
//const analytics = firebase.analytics();
//const auth = firebase.auth();
//Code from FireBase docs that allows user to create new account
//Need to create form in HTML that passes an email and password to here (ensure they are valid first)
function signUserUp(email, password) {
    app_1.default.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        //Signed in
        var user = userCredential.user;
        //Add functionality here
    })
        .catch((error) => {
        findError(error.code);
    });
}
function signUserIn(email, password) {
    //Allow users to sign in
    app_1.default.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        //Signed in
        var user = userCredential.user;
        //Add functionality here
    })
        .catch((error) => {
        findError(error.code);
    });
}
//Called when user's sign-in state changes
app_1.default.auth().onAuthStateChanged((user) => {
    if (user) {
        //User is signed in
        var uid = user.uid;
        //Add functionality
    }
    else {
        //User is signed out
        //Add functionality
    }
});
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src"));
//Gains user info
app.post("/details", (req, res) => {
    const user = req.body;
    //Users password is checked for validity through a firebase error
    if (user.sign == "in") {
        signUserIn(user.email, user.pass);
    }
    else {
        signUserUp(user.email, user.pass);
    }
});
//Function to manage failed Sign up/in attempt
function findError(e) {
    var userError = "";
    if (e == "auth/email-already-in-use") {
        userError = "Email entered is already in use.";
    }
    else if (e == "auth/internal-error") {
        userError = "Internal Error.";
    }
    else if (e == "auth/invalid-email") {
        userError = "Email entered is not valid";
    }
    else if (e == "auth/invalid-password") {
        userError = "Password entered is not valid";
    }
    else if (e == "auth/password-does-not-meet-requirements") {
        userError = "Password does not meet requirements";
    }
    else if (e == "auth/invalid-login-credentials") {
        userError = "Invalid login credentials";
    }
    else {
        console.log(`UNKNOWN ERROR: ${e}`);
        userError = "Unknown Error";
    }
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
//# sourceMappingURL=auth.js.map