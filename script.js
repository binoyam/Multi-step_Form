const stepOneForm = document.getElementById("step_one_form");
const stepOneNextBtn = document.getElementById("step_one_next");
var nameError = document.querySelectorAll(".error_txt");

stepOneForm.addEventListener("submit", stepOneCheck);

function stepOneCheck(e) {
  e.preventDefault();
  var nameInput = document.getElementById("name").value;

  if (nameInput === "") {
    nameError.style.display === "block";
  } else {
    nameError.style.display === "none";
  }
}
/* im stuck */