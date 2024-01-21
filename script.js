const nextBtn = document.getElementById("next_btn");
const backBtn = document.getElementById("back_btn");
const steps = Array.from(document.querySelectorAll(".step_container"));
let currentStep = 0;
// console.log(steps.length);

function showStep(stepIndex) {
  steps.forEach((step) => {
    step.style.display = "none";
  });
  steps[stepIndex].style.display = "block";
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}
//stuckkkk!!!!!!!!
// stepOneForm.addEventListener("submit", stepOneCheck);
nextBtn.addEventListener("click", nextStep);
backBtn.addEventListener("click", previousStep);
