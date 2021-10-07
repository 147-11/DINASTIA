// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuehf15Tx-RANkCftP8sAH2uJyeQjjVWw",
  authDomain: "dinastiaclub-4a8fb.firebaseapp.com",
  databaseURL: "https://dinastiaclub-4a8fb-default-rtdb.firebaseio.com",
  projectId: "dinastiaclub-4a8fb",
  storageBucket: "dinastiaclub-4a8fb.appspot.com",
  messagingSenderId: "1080239593789",
  appId: "1:1080239593789:web:b8184a4123d38eb50ccd54",
  measurementId: "G-468Q4BMWQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//club
//var t=document.getElementById("title").value;

import { collection, getDocs } from "/firebase/firestore";
var db = firebase.firestore();

const querySnapshot = await getDocs(collection(db, "index"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

/*
var ti = document.getElementById('title')
var info = database.ref('index/club/titulo')

info.once('value').then(function(snap){
    ti.innerText = snap.val()
})
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}/*

/*document.getElementById("clb_intro").onclick =function () {
    firebase.database().ref('index/'+rollV).on('value', function (snapshot) {
        document.getElementById('title').value= snapshot.val().club.titulo;
        
    })
    
}*/