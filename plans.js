const planElements = document.querySelectorAll(".plan");

const plans = Array.from(planElements).map((planElement) => {
  const name = planElement.querySelector(".plan_name").textContent;
  const price = planElement.querySelector(".plan_price").textContent;
  const additionalText = planElement.querySelector(".text_add").textContent;
  
  return {
    name,
    price,
    additionalText,
  };
});

console.log(plans[0].name);