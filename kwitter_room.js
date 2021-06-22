var firebaseConfig = {
      apiKey: "AIzaSyC9Np46Gm14X5UkeXNxqUg4WW3Q0AEFfog",
      authDomain: "kwitter-cbf8b.firebaseapp.com",
      databaseURL: "https://kwitter-cbf8b-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbf8b",
      storageBucket: "kwitter-cbf8b.appspot.com",
      messagingSenderId: "238251038258",
      appId: "1:238251038258:web:93fb54d04f1fb3efc90e2b"
    };
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
 function addRoom()
  {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
       }

       function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
              Room_names = childKey; 
              console.log("Room Name - " + Room_names);
               row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
               document.getElementById("output").innerHTML += row; 
              }); 
              }); 
           }


getData();

function redirectToRoomName(name)
{
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout ()
{
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
}