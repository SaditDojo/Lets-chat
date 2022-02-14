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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row; 
      //End
      });});}
getData();
function redirectToRoomName(Name){
      console.log(Name);
      localStorage.setItem("room_name",Name);
      window.location="kwitter_page.HTML";
}
function addRoom(){
room_name=document.getElementById("room_name").value;
console.log(room_name);
firebase.database().ref("/").child(room_name).update({
      purpose:"addRoomName"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.HTML";
}