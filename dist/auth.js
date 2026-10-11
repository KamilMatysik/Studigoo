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
        var errorCode = error.code;
        var errorMessage = error.message;
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
        var errorCode = error.code;
        var errorMessage = error.message;
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
//In case it is needed in the future
//app.get("/details", (req:any, res:any) => {
//
//});
//Gains user info
app.post("/details", (req, res) => {
    const user = req.body;
    //Check if users password is valid
    if (testUserPassword(user.pass)) {
        if (user.sign == "in") {
            signUserIn(user.email, user.pass);
        }
        else {
            signUserUp(user.email, user.pass);
        }
    }
    else {
        //Find way to return password error
    }
});
function testUserPassword(pass) {
    //Build password testing logic later
    return 1;
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
//# sourceMappingURL=auth.js.map