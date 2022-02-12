var firebaseConfig = {
    apiKey: "AIzaSyDHBecjjsx7N4GJvJzc66ie8ecDc3okUXw",
    authDomain: "kwitter-8742d.firebaseapp.com",
    databaseURL: "https://kwitter-8742d-default-rtdb.firebaseio.com",
    projectId: "kwitter-8742d",
    storageBucket: "kwitter-8742d.appspot.com",
    messagingSenderId: "635222786777",
    appId: "1:635222786777:web:e06c23bdc28cb72126b4c8",
    measurementId: "G-YG495NGL2X"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value ="";
  }