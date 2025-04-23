
function CalculationAllInputs() {

    let sum = 0;
    for (let i = 1; i <= 4; i++) {
        sum += parseFloat(document.getElementById(`val_${i}`).value);
    }
    if (!isNaN(sum)) {
        document.getElementById("rezultati").innerText = sum;
    }
}