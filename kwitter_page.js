//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCcwFtts-koGfz7-XZ4dCn1LMpmnAq8oyQ",
    authDomain: "lets-chat-2984a.firebaseapp.com",
    databaseURL: "https://lets-chat-2984a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-2984a",
    storageBucket: "lets-chat-2984a.appspot.com",
    messagingSenderId: "67889821599",
    appId: "1:67889821599:web:04d4e5d0fffc9acc20afaa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();