document.getElementById('calculate').addEventListener('click', function() {
    const rate = 0.0825;
    const amountInput = document.getElementById('amount');
    const taxInput = document.getElementById('taxOutput'); 
    const totalInput = document.getElementById('totalOutput'); 

    const amount = parseFloat(amountInput.value);
    if (isNaN(amount)) {
        taxInput.value = '';
        totalInput.value = '';
        return;
    }

    const tax = amount * rate;
    const total = amount + tax;

    taxInput.value = tax.toFixed(2);
    totalInput.value = total.toFixed(2);
});