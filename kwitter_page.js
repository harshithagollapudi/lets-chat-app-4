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

user_name = localStorage.getItem ("user_name");
Room_name = localStorage.getItem ("Room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like = message_data('like');
name_with_tag = "<h3>"+name+"<img class='user_tick' src='tick.png'</h3>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function updatelike(message_id) {
console.log("click_on_like_button"+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes)+1;
console.log(update_likes);
firebase.database().ref(Room_name).child(message_id).update({
  like: update_likes
});
}
function log_out() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location.replace("kwitter.html");

}