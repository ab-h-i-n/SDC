import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB-DAFObbV9nV4eBGirHnR15cqwB0GTvVM",
    authDomain: "fir-dc-ae2fa.firebaseapp.com",
    projectId: "fir-dc-ae2fa",
    storageBucket: "fir-dc-ae2fa.appspot.com",
    messagingSenderId: "85786057242",
    appId: "1:85786057242:web:913f4f11a98dd3b570cfa3",
    measurementId: "G-5279S9TXH4"
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){
    e.preventDefault();
    set(ref(db,'students/' + ))
  })
