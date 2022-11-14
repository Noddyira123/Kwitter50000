
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = { 
      apiKey: "AIzaSyBVrFLJTBWkRuIcMnt_rJTRr1Q_KLMpc_Q", 
      authDomain: "kwitter-84574.firebaseapp.com", 
      databaseURL: "https://kwitter-84574-default-rtdb.firebaseio.com",
       projectId: "kwitter-84574", 
       storageBucket: "kwitter-84574.appspot.com", 
       messagingSenderId: "612260283353",
        appId: "1:612260283353:web:fe495562705504ee29cfc8",
         measurementId: "G-2Y2TQKXYQL" };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML= "Welcome"+user_name+"!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update(
      {
            purpose:"adding room name"
      }
);
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.HTML"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.HTML"

}