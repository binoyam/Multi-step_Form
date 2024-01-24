const allSteps = document.querySelectorAll(".step_container");
const step_one_nextBtn = document.getElementById("next_btn_1");
const step_two_nextBtn = document.getElementById("next_btn_2");
const step_three_nextBtn = document.getElementById("next_btn_3");
const step_four_nextBtn = document.getElementById("next_btn_4");

const step_two_backBtn = document.getElementById("back_btn_2");
const step_three_backBtn = document.getElementById("back_btn_3");
const step_four_backBtn = document.getElementById("back_btn_4");
const completedForm = document.getElementById("thankyou");

let currentStep = 1;
function stepOneCheck(step) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone_number");

  const nameError = document.querySelector(".name_error");
  const emailError = document.querySelector(".email_error");
  const phoneError = document.querySelector(".phone_error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    nameInput.classList.add("error_border");
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("error_border");
  }
  if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
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
    emailPattern.test(emailInput.value) &&
    phoneInput.value.trim() != ""
  ) {
    nextStep(step + 1);
  }
}

function showStep(stepNumber) {
  if (stepNumber < 5) {
    showCircle(stepNumber - 1);
  }
  allSteps.forEach((step) => {
    step.style.display = "none";
    const visibleStep = document.getElementById(`step_${stepNumber}`);
    if (stepNumber === 5) {
      visibleStep.style.display = "flex";
      return;
    }
    visibleStep.style.display = "block";
  });
}

const stepCircle = document.querySelectorAll(".step_circle");
function showCircle(stepNumber) {
  stepCircle.forEach((circle) => {
    circle.classList.remove("active");
    stepCircle[stepNumber].classList.add("active");
  });
}
// console.log(stepCircle);
function nextStep(stepNumber) {
  currentStep = stepNumber;
  showStep(currentStep);
}
function previousStep(stepNumber) {
  currentStep = stepNumber;
  showStep(currentStep);
}
const nextBtns = document.querySelectorAll(".next_btn");
nextBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const step = parseInt(btn.dataset.step);
    if (step === 1) {
      stepOneCheck(1);
    } else {
      nextStep(step + 1);
    }
  });
});
const backBtns = document.querySelectorAll(".go_back_btn");
backBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const step = parseInt(btn.dataset.step);
    previousStep(step - 1);
  });
});
