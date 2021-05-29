//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDur1wgVsfI_d-_hVYHyRgNxCpOPkhPcn4",
  authDomain: "kwtr-d1289.firebaseapp.com",
  databaseURL: "https://kwtr-d1289-default-rtdb.firebaseio.com",
  projectId: "kwtr-d1289",
  storageBucket: "kwtr-d1289.appspot.com",
  messagingSenderId: "791360918930",
  appId: "1:791360918930:web:372c696897d31234a99d4b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"});

}