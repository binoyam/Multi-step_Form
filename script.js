const stepOneForm = document.getElementById("step_one_form");
const stepOneNextBtn = document.getElementById("step_one_next")
stepOneForm.addEventListener("submit", verifyStepOne)
stepOneNextBtn.addEventListener("click", verifyStepOne)

const verifyStepOne = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone_number");
}