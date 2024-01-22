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
function showStep(stepNumber) {
  allSteps.forEach((step) => {
    step.style.display = "none";
  });
  if (stepNumber == 5) {
    document.getElementById("step_4").style.display = "none";
    completedForm.style.display = "flex";
    return;
  }
  document.getElementById(`step_${stepNumber}`).style.display = "block";
}
function nextStep(stepNumber) {
  currentStep = stepNumber;
  showStep(currentStep);
}
function previousStep(stepNumber) {
  currentStep = stepNumber;
  showStep(currentStep);
}

step_one_nextBtn.addEventListener("click", () => {
  nextStep(2);
});
step_two_nextBtn.addEventListener("click", () => {
  nextStep(3);
});
step_three_nextBtn.addEventListener("click", () => {
  nextStep(4);
});
step_four_nextBtn.addEventListener("click", () => {
  nextStep(5);
});

step_two_backBtn.addEventListener("click", () => {
  previousStep(1);
});
step_three_backBtn.addEventListener("click", () => {
  previousStep(2);
});
step_four_backBtn.addEventListener("click", () => {
  previousStep(3);
});
