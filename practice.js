var firebaseConfig = {
    apiKey: "AIzaSyCKrqRbjzQy4Jf_YBl3FSkO2DN5vERxSuE",
    authDomain: "tic-tac-toe-a8fec.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-a8fec-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-a8fec",
    storageBucket: "tic-tac-toe-a8fec.appspot.com",
    messagingSenderId: "262306950940",
    appId: "1:262306950940:web:da7e901bae01e9a9ec54d9"
  };
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}