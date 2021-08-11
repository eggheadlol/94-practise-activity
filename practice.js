
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMvTxDf35txHs7QLXWO_GH7s8wMbiVh-c",
    authDomain: "kwitter-91af3.firebaseapp.com",
    databaseURL: "https://kwitter-91af3-default-rtdb.firebaseio.com",
    projectId: "kwitter-91af3",
    storageBucket: "kwitter-91af3.appspot.com",
    messagingSenderId: "557231547109",
    appId: "1:557231547109:web:59747d7a4495913995ea0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name=document.getElementById("user_name").value;
    
    firebase.database().ref("/").child(user_name).update({

    purpose:"adding user" 
    
    });
}