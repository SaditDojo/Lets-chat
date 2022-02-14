//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBgiE9-UwbGnR7XvMk11hc6GcRTZ8Cyw9M",
      authDomain: "let-s-chat-87c96.firebaseapp.com",
      databaseURL: "https://let-s-chat-87c96-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-87c96",
      storageBucket: "let-s-chat-87c96.appspot.com",
      messagingSenderId: "725184678209",
      appId: "1:725184678209:web:fccd42233f32fe9f29b9c0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}