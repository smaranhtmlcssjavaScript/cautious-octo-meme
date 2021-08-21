var firebaseConfig = {
    apiKey: "AIzaSyBXY9yrxTr7G28fucBAr9udmmahsEzoguU",
    authDomain: "letschatapp-90777.firebaseapp.com",
    databaseURL: "https://letschatapp-90777-default-rtdb.firebaseio.com",
    projectId: "letschatapp-90777",
    storageBucket: "letschatapp-90777.appspot.com",
    messagingSenderId: "825790578419",
    appId: "1:825790578419:web:28e768868c137d964a8186"
  };

  firebase.initializeApp(firebaseConfig);
  
  username = localStorage.getItem("username");
  roomname = localStorage.getItem("roomname");
  
  function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
});
document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location.replace("index.html");
}