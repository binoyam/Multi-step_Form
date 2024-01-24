const allSteps = document.querySelectorAll(".step_container");
const step_one_nextBtn = document.getElementById("next_btn_1");
const step_two_nextBtn = document.getElementById("next_btn_2");
const step_three_nextBtn = document.getElementById("next_btn_3");
const step_four_nextBtn = document.getElementById("next_btn_4");

const step_two_backBtn = document.getElementById("back_btn_2");
const step_three_backBtn = document.getElementById("back_btn_3");
const step_four_backBtn = document.getElementById("back_btn_4");
const completedForm = document.getElementById("thankyou");

const stepCircle = document.querySelectorAll(".step_circle");

let currentStep = 1;
function stepOneCheck(e, step) {
  e.preventDefault();
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

// function showCircle() {
//   stepCircle.forEach((circle) => {
//     circle.classList.remove("active");
//   });
//   stepCircle[currentStep].classList.add("active");
// }

function showStep(currentStep) {
  allSteps.forEach((step) => {
    step.style.display = "none";
  });
 
    document.getElementById(`step_${currentStep}`).style.display = "block";
 
}
function nextStep(stepNumber) {
  currentStep = stepNumber;
  showStep(currentStep);
}
function previousStep(stepNumber) {
  currentStep = stepNumber;
  // showStep(currentStep);
}
const nextBtns = document.querySelectorAll(".next_btn");
nextBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const step = parseInt(btn.dataset.step);
    if (step === 1) {
      stepOneCheck(e, 1);
    } else {
      nextStep(step + 1);
    }
  });
});
// step_one_nextBtn.addEventListener("click", (e) => {
//   stepOneCheck(e);
// });
// step_two_nextBtn.addEventListener("click", () => {
//   nextStep(3);
// });
// step_three_nextBtn.addEventListener("click", () => {
//   nextStep(4);
// });
// step_four_nextBtn.addEventListener("click", () => {
//   nextStep(5);
// });

step_two_backBtn.addEventListener("click", () => {
  previousStep(1);
});
step_three_backBtn.addEventListener("click", () => {
  previousStep(2);
});
step_four_backBtn.addEventListener("click", () => {
  previousStep(3);
});
