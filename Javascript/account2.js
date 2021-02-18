
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAs11yjv7OSMcJAZqbN-tlJZhMU15pj5Dk",
    authDomain: "form-48bb4.firebaseapp.com",
    projectId: "form-48bb4",
    storageBucket: "form-48bb4.appspot.com",
    messagingSenderId: "1080082868834",
    appId: "1:1080082868834:web:168eaaf33c030a394f3f3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
  }

  function signIn(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    //Take user to a home page
  }

  function signOut(){
    auth.signOut();
    if (window.confirm('do you want to sign out?'))
    {
      window.location.href='index.html';
    };
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active User " + email);

      //is signed in
    }else{
      alert("No Active User");
      //no user is signed in
    }
  });
