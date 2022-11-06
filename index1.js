// const firebaseConfig = {
//     apiKey: "AIzaSyDlclTyxFj73C6_UDkuebcnfsQWIdC1uOY",
//     authDomain: "yohh-37b46.firebaseapp.com",
//     projectId: "yohh-37b46",
//     storageBucket: "yohh-37b46.appspot.com",
//     messagingSenderId: "646659188326",
//     appId: "1:646659188326:web:a1cfe3b227fcdd12e7efa7"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   // Initialize variables
//   const auth = firebase.auth()
//   const database = firebase.database

//   firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       location.replace("main.html")
//     }
//   })
//   function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email,password)
//   }
// console.log("hello")