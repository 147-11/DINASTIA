// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "./firebase/auth";

const auth = getAuth();

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

function login(){
    var usuario=document.getElementById("usuario_correo").value;
    var clave=document.getElementById("clave").value;

    app.auth().signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    });
}
export {login};


/*function login(){
    var usuario=document.getElementById("usuario_correo").value;
    var clave=document.getElementById("clave").value;

/*if (validateEmail(usuario) == false || validate_pasword(clave) ==false){
    window.alert('Usuario y/o contraseña incorrecta(s)')
    return
}

app.auth().signInWithEmailAndPassword(usuario, clave)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("mal");
  });

   
/*auth.signInWithEmailAndPassword().then(function(usuario, clave){
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = { last_login : Date.now() }

    database_ref.child('users/'+user.uid).update(user_data)
    window.alert("usuario logueado")
})
.catch(function(error){
    var error_code = error.error_code
    var error_message = error.message 

    alert(error_message)
})
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function verifyPassword(pasword) {  
    pasword = document.getElementById("pasword").value; 
}*/