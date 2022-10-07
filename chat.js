// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB-G0X-KvZTGsVL2Xo53dgqJAmB2RqrTaI",
    authDomain: "kwitter-ff9e3.firebaseapp.com",
    databaseURL: "https://kwitter-ff9e3-default-rtdb.firebaseio.com",
    projectId: "kwitter-ff9e3",
    storageBucket: "kwitter-ff9e3.appspot.com",
    messagingSenderId: "836278606424",
    appId: "1:836278606424:web:013bd2d0c3a214121bc82d"
  };
  
  // Initialize Firebase


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



