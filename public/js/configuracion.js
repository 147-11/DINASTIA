
import { initializeApp } from '/firebase/app';
import { getFirestore, collection, getDocs } from '/firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "/firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


const auth = getAuth();

const boton_login = document.querySelector("boton_login");
boton_login.addEventListener("click",function () {
    console.log("click");
});

function login(){
    var usuario=document.getElementById("usuario_correo").value;
    var clave=document.getElementById("clave").value;

    signInWithEmailAndPassword(auth, usuario, clave)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

