function toggleInfo() {
  const info = document.getElementById("infoText");
  info.classList.toggle("hidden");
}

function calculateYield() {
  // Retrieve values from input fields
  const propertyValueInput = document.getElementById("propertyValue");
  const monthlyRentInput = document.getElementById("monthlyRent");
  const mortgageInput = document.getElementById("monthlyMortgage");
  const expensesInput = document.getElementById("monthlyCosts");

  const propertyValue = parseFloat(propertyValueInput.value) || 0;
  const monthlyRent = parseFloat(monthlyRentInput.value) || 0;
  const monthlyMortgage = parseFloat(mortgageInput.value) || 0;
  const monthlyExpenses = parseFloat(expensesInput.value) || 0;

  const propertyError = document.getElementById("propertyError");
const rentError = document.getElementById("rentError");

// Reset error states
propertyError.innerHTML = "";
rentError.innerHTML = "";
propertyValueInput.classList.remove("error-border");
monthlyRentInput.classList.remove("error-border");

let hasError = false;

// Helper to show error with icon
function showError(container, message) {
  const img = document.createElement("img");
  img.src = "assets/error-icon.svg"; // Replace with your actual path
  img.alt = "Error";
  img.className = "error-icon";

  const text = document.createTextNode(message);

  container.appendChild(img);
  container.appendChild(text);
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.gap = "6px";
}

// Validation
if (propertyValue < 25000) {
  showError(propertyError, "Please enter a minimum value of £25,000");
  propertyValueInput.classList.add("error-border");
  hasError = true;
}

if (monthlyRent <= 0) {
  showError(rentError, "Amount missing");
  monthlyRentInput.classList.add("error-border");
  hasError = true;
}

  // Output fields
  const grossYieldEl = document.getElementById("grossYield");
  const netYieldEl = document.getElementById("netYield");
  const netReturnEl = document.getElementById("netReturn");

  if (hasError) {
    // Reset results if invalid
    grossYieldEl.textContent = "0%";
    netYieldEl.textContent = "0%";
    netReturnEl.textContent = "£0.00";
    return;
  }

  // === Calculations ===

  // Annual rental income
  const annualRent = monthlyRent * 12;

  // Annual costs = mortgage + expenses
  const annualCosts = (monthlyMortgage + monthlyExpenses) * 12;

  // Gross yield formula
  const grossYield = (annualRent / propertyValue) * 100;

  // Net yield formula
  const netYield = ((annualRent - annualCosts) / propertyValue) * 100;

  // Net annual return
  const netReturn = annualRent - annualCosts;

  // === Display Results ===

  grossYieldEl.textContent = `${grossYield.toFixed(1)}%`;
  netYieldEl.textContent = `${netYield.toFixed(1)}%`;

  // Display in purple (even if negative), formatted with £ and 2 decimals
  netReturnEl.textContent = `${netReturn < 0 ? '-' : ''}£${Math.abs(netReturn).toFixed(2)}`;
}
