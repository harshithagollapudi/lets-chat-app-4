// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAZlp0rJ0gm8IL6gG1K59dCLKyGIzkcEhg",
    authDomain: "kwitter3-f77e5.firebaseapp.com",
    databaseURL: "https://kwitter3-f77e5-default-rtdb.firebaseio.com",
    projectId: "kwitter3-f77e5",
    storageBucket: "kwitter3-f77e5.appspot.com",
    messagingSenderId: "355143517869",
    appId: "1:355143517869:web:986167b488233173a6e824",
    measurementId: "G-176YF3YNQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function Addroom() {
    Room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(Room_name).update({
      purpose:"adding_room_name"
    });
    localStorage.setItem("room_name", Room_name);
    window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function log_out() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location = "index.html";

}