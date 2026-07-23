<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeP8UVqgR6ICQutyZE51ZMddwJN6l65rg",
    authDomain: "pinkmessageboard.firebaseapp.com",
    projectId: "pinkmessageboard",
    storageBucket: "pinkmessageboard.firebasestorage.app",
    messagingSenderId: "489868309066",
    appId: "1:489868309066:web:947b4527cea971508decb3"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Cada página escolhe o seu próprio ID de documento (ver comentário
// em cada HTML) para os dados não se misturarem entre páginas.
function getTrackerRef(docId) {
  return db.collection('trackers').doc(docId);
}

</script>
