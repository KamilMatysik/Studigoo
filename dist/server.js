//Adding SDKs
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
initializeApp(firebaseConfig);
//const analytics = firebase.analytics();
//const auth = firebase.auth();
//Code from FireBase docs that allows user to create new account
//Need to create form in HTML that passes an email and password to here (ensure they are valid first)
function signUserUp(email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}
function signUserIn(email, password) {
    const auth = getAuth();
    //Allow users to sign in
    return signInWithEmailAndPassword(auth, email, password);
}
//Called when user's sign-in state changes
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
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
import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use(express.static("dist"));
//Gains user info
app.post("/details", (req, res) => {
    const user = req.body;
    let prom;
    let e = "";
    //Users password is checked for validity through a firebase error
    if (user.sign == "in") {
        prom = signUserIn(user.email, user.pass)
            .then((userCredential) => {
            //Signed in
            var user = userCredential.user;
            //Add functionality here
        })
            .catch((error) => { e = error.code; res.json({ error: findError(e) }); });
    }
    else {
        prom = signUserUp(user.email, user.pass)
            .then((userCredential) => {
            //Signed in
            var user = userCredential.user;
            //Add functionality here
        })
            .catch((error) => { e = error.code; res.json({ error: findError(e) }); });
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
    return userError;
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
//# sourceMappingURL=server.js.map