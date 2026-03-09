document.getElementById('calculate').addEventListener('click', function() {
    const rate = 0.0825;
    const amountInput = document.getElementById('amount');
    const taxInput = document.getElementById('tax');
    const totalInput = document.getElementById('total');

    const amount = parseFloat(amountInput.value);
    if (isNaN(amount)) {
        alert("Please enter a valid number.");
        return;
    }

    const tax = amount * rate;
    const total = amount + tax;

    taxInput.value = tax.toFixed(2);
    totalInput.value = total.toFixed(2);
});