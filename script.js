function formatNumberInput(input) {
    // Get input value and remove non-numeric characters
    let value = input.value.replace(/\D/g, '');

    // Format the value with commas for thousands separator
    input.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // If input is empty, set value to empty string
    if (input.value === '') {
        input.value = '';
    }
}

function calculateMortgage() {
    // Set initial values to 'NaN'
    document.getElementById('homeCost').textContent = 'NaN';
    document.getElementById('downPaymentAmt').textContent = 'NaN';
    document.getElementById('loanAmount').textContent = 'NaN';
    document.getElementById('monthlyPayment').textContent = 'NaN';
    document.getElementById('MortgageAmount').textContent = 'NaN';
    document.getElementById('interestAmount').textContent = 'NaN';

    // Get input values
    const homePrice = parseFloat(document.getElementById('homePrice').value.replace(/,/g, ''));
    const downPaymentPercent = parseFloat(document.getElementById('downPayment').value.replace(/,/g, ''));
    const loanTerm = parseInt(document.getElementById('loanTerm').value.replace(/,/g, ''));
    const interestRate = parseFloat(document.getElementById('interestRate').value.replace(/,/g, ''));

    // Validate percentages
    if (downPaymentPercent > 100 || interestRate > 100) {
        alert("Downpayment and Interest Rate should not exceed 100%");
        return;
    }
    // Convert percentages to decimal
    const downPaymentDecimal = downPaymentPercent / 100;
    const interestRateDecimal = interestRate / 100;

    // Calculate values
    const downPayment = homePrice * downPaymentDecimal;
    const loanAmount = homePrice - downPayment;
    const numberOfMonths = loanTerm * 12;
    const monthlyInterestRate = interestRateDecimal / 12;

    const mortgagePayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
    const MortgageAmount = mortgagePayment * numberOfMonths;
    const interestAmount = MortgageAmount - loanAmount;

    // Display results with thousands separators
    document.getElementById('homeCost').textContent = homePrice.toLocaleString('en-US', { maximumFractionDigits: 2 });
    document.getElementById('downPaymentAmt').textContent = downPayment.toLocaleString('en-US', { maximumFractionDigits: 2 });
    document.getElementById('loanAmount').textContent = loanAmount.toLocaleString('en-US', { maximumFractionDigits: 2 });
    document.getElementById('monthlyPayment').textContent = mortgagePayment.toLocaleString('en-US', { maximumFractionDigits: 2 });
    document.getElementById('MortgageAmount').textContent = MortgageAmount.toLocaleString('en-US', { maximumFractionDigits: 2 });
    document.getElementById('interestAmount').textContent = interestAmount.toLocaleString('en-US', { maximumFractionDigits: 2 });

    // Show results
    document.getElementById('results').style.display = 'block';
}
