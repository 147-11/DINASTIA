// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
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
var t=document.getElementById("title");

/*import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
const database = getDatabase(app);
// TODO: Add SDKs for Firebase products that you want to use";
var db = app.database;*/

import { getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
const db = getDatabase();

var firebaseRef = ref(db, "index/club");

firebaseRef.on('value', (snapshot) => {
  const data = snapshot.val();
  updateStarCount(t, data);
});

/*firebaseRef.once('value', snapshot => {
  console.log('User data: ', snapshot.val());
});*/

/*var canOnlyFireOnce = once('value', snapshot => {
  console.log('User data: ', snapshot.val());
})

function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}
*/

/*
var ti = document.getElementById('title')
var info = database.ref('index/club/titulo')


/*document.getElementById("clb_intro").onclick =function () {
    firebase.database().ref('index/'+rollV).on('value', function (snapshot) {
        document.getElementById('title').value= snapshot.val().club.titulo;
        
    })
    
}*/