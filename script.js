
const nextBtn = document.getElementById("next_btn");
const backBtn = document.getElementById("back_btn");
const steps = Array.from(document.querySelectorAll(".step_container"));
let currentStep = 0;



function showStep(stepIndex) {
  steps.forEach((step, index) => {
    if (index === stepIndex) {
      step.style.display = "block";
    } else {
      step.style.display = "none";
    }
  });
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


// stepOneForm.addEventListener("submit", stepOneCheck);
nextBtn.addEventListener("click", nextStep);
backBtn.addEventListener("click", previousStep);
