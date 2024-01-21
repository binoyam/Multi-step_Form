const stepCircle = document.querySelectorAll(".step_circle");
const stepOneForm = document.getElementById("step_one_form");


function stepOneCheck(e) {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone_number");
  
    const nameError = document.querySelector(".name_error");
    const emailError = document.querySelector(".email_error");
    const phoneError = document.querySelector(".phone_error");
  
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      nameInput.classList.add("error_border");
    } else {
      nameError.style.display = "none";
      nameInput.classList.remove("error_border");
    }
    if (emailInput.value.trim() === "") {
      emailError.style.display = "block";
      emailInput.classList.add("error_border");
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("error_border");
    }
    if (phoneInput.value.trim() === "") {
      phoneError.style.display = "block";
      phoneInput.classList.add("error_border");
    } else {
      phoneError.style.display = "none";
      phoneInput.classList.remove("error_border");
    }
    if (
      nameInput.value.trim() != "" &&
      emailInput.value.trim() != "" &&
      phoneInput.value.trim() != ""
    ) {
      currentStep++;
  
      stepCircle.forEach((circle) => {
        circle.classList.remove("active");
      });
      stepCircle[currentStep].classList.add("active");
    }
  }