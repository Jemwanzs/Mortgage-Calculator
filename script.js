function calculateMortgage() {
    // Get input values
    const homePrice = parseFloat(document.getElementById('homePrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;
    const insurance = parseFloat(document.getElementById('insurance').value);
    const otherCosts = parseFloat(document.getElementById('otherCosts').value);

    // Calculate monthly values
    const loanAmount = homePrice - downPayment;
    const numberOfMonths = loanTerm * 12;
    const monthlyInterestRate = interestRate / 12;

    const mortgagePayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
    const taxAmountMonthly = (mortgagePayment * taxRate);
    const insuranceCostMonthly = insurance;
    const otherCostsMonthly = otherCosts;

    const totalMonthlyPayment = mortgagePayment + taxAmountMonthly + insuranceCostMonthly + otherCostsMonthly;
    const totalCost = totalMonthlyPayment * numberOfMonths;

    // Display results
    document.getElementById('monthlyPayment').textContent = mortgagePayment.toFixed(2);
    document.getElementById('taxAmountMonthly').textContent = taxAmountMonthly.toFixed(2);
    document.getElementById('insuranceCostMonthly').textContent = insuranceCostMonthly.toFixed(2);
    document.getElementById('otherCostsMonthly').textContent = otherCostsMonthly.toFixed(2);
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';
}
