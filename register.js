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
//   const database = firebase.database()

//   function register(){
//     fname = document.getElementById('fname').value
//     lname = document.getElementById('lname').value
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
//   }
// //validate input fields
//   // if(validate_email(email) == false || validate_password(password) == false){
//   //   alert('Email or Password is not correct')
//   //   // return
//   // } 
//   // if(validate_field(fname) == false || validate_field(lname) == false){
//   //   alert('First Name or Last Name should not be blank')
//   //   return
//   // }
// // move on with auth
//   auth.createUserWithEmailAndPassword(email,password)
//   .then(function(){
//     var user = auth.currentUser
//     //add this user to firebase
//     var database_ref = database.ref()
//      // Create User data
//      var user_data = {
//         fname : fname,
//         lname : lname,
//         email : email,
//         password : password,
//         last_login : Date.now()
//       }
  
//       // Push to Firebase Database
//       database_ref.child('users/' + user.uid).set(user_data)
  
//       // DOne
//       alert('User Created!!')
//     })
//   .catch(function(error){
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
//   })

//   function validate_email(email){
//     expression = /^([a-zA-Z0-9\.]+)@([a-z]+)[.]{1}[a-z]{2,3}$/;
//     if(expression.test(email) == true){
//         return true
//     }
//     else{
//         return false
//     }
//   }
//   function validate_password(password){
//     if(password < 6){
//         return false
//     } else {
//         return true 
//     }
//   }
//   function validate_field(field){
//     if(field == null){
//         return false
//     } if(field.length <= 0) {
//         return false
//     } else{
//         return true
//     }
//   }