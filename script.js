// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-DAFObbV9nV4eBGirHnR15cqwB0GTvVM",
  authDomain: "fir-dc-ae2fa.firebaseapp.com",
  databaseURL: "https://fir-dc-ae2fa-default-rtdb.firebaseio.com", // Update this line
  projectId: "fir-dc-ae2fa",
  storageBucket: "fir-dc-ae2fa.appspot.com",
  messagingSenderId: "85786057242",
  appId: "1:85786057242:web:913f4f11a98dd3b570cfa3",
  measurementId: "G-5279S9TXH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(); // Initialize the database

document.getElementById("submit").addEventListener("click", function () {
  // Get values from input fields
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const age = calculateAge(dob);
  const gender = document.getElementById("gender").value;
  const caste = document.getElementById("caste").value;
  const selectedClass = document.getElementById("class").value;
  const enrollmentDate = document.getElementById("Edate").value;
  const dropoutDate = document.getElementById("dropDate").value;

  // Get values from checkboxes (dropout reasons)
  const selectedReasons = [];
  const checkboxes = document.querySelectorAll('input[name="res"]:checked');
  checkboxes.forEach(function (checkbox) {
    selectedReasons.push(checkbox.value);
  });

  // Get values from school details
  const schoolName = document.getElementById("sname").value;
  const schoolArea = document.getElementById("area").value;

  // Create a data object
  const data = {
    name: name,
    dob: dob,
    age: age,
    gender: gender,
    caste: caste,
    class: selectedClass,
    enrollmentDate: enrollmentDate,
    dropoutDate: dropoutDate,
    dropoutReasons: selectedReasons,
    schoolName: schoolName,
    schoolArea: schoolArea,
  };

  // Add data to the Firebase Realtime Database
  const studentsRef = ref(db, "students"); // Use ref to create a reference to "students" node
  const newStudentRef = push(studentsRef);

  // Add data to the Firebase Realtime Database with the new key
  set(newStudentRef, data)
    .then(function () {
      alert("Data added to the database ");
      // Clear input fields after submission if needed
      clearInputFields();
    })
    .catch(function (error) {
      alert("Error adding data to the database:", error);
    });
});

function calculateAge(dob) {
  const dobDate = new Date(dob);
  const currentDate = new Date(dropoutDate);

  const yearsDiff = currentDate.getFullYear() - dobDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const dobMonth = dobDate.getMonth();

  if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDate.getDate() < dobDate.getDate())) {
    return yearsDiff - 1; // Subtract 1 if the birthday hasn't occurred yet this year
  }

  return yearsDiff;
}

function clearInputFields() {
  // Clear input fields after submission if needed
  document.getElementById("name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("gender").value = "Select";
  document.getElementById("caste").value = "Select";
  document.getElementById("class").value = "Select";
  document.getElementById("Edate").value = "";
  document.getElementById("dropDate").value = "";
  const checkboxes = document.querySelectorAll('input[name="res"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  document.getElementById("sname").value = "";
  document.getElementById("area").value = "";
  document.getElementById("noS").value = "";
}
