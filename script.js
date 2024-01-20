const stepOneForm = document.getElementById("step_one_form");
const stepOneNextBtn = document.getElementById("step_one_next");
const nameError = document.querySelector(".name_error");
const emailError = document.querySelector(".email_error");
const phoneError = document.querySelector(".phone_error");

stepOneForm.addEventListener("submit", stepOneCheck);

function stepOneCheck(e) {
  e.preventDefault();
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone_number");

  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    nameInput.classList.add("error_border")
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("error_border")
  }
  if (emailInput.value.trim() === "") {
    emailError.style.display = "block";
    emailInput.classList.add("error_border")
    
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("error_border")
  }
  if (phoneInput.value.trim() === "") {
    phoneError.style.display = "block";
    phoneInput.classList.add("error_border")
    
  } else {
    phoneError.style.display = "none";
    phoneInput.classList.remove("error_border")
  }
}
/* im stuck */