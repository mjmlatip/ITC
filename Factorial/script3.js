function calculate() {
    const n = parseInt(document.getElementById('numberInput').value);
    if (isNaN(n) || n < 0) {
        alert("Please enter a valid non-negative integer.");
        return;
    }

    let factorial = 1;
    let i = n;
    while (i > 1) {
        factorial *= i;
        i--;
    }

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);

    let average = sum / n;

    document.getElementById('factorialResult').innerText = `Factorial of ${n} is: ${factorial}`;
    document.getElementById('sumResult').innerText = `Sum of the first ${n} numbers is: ${sum}`;
    document.getElementById('averageResult').innerText = `Average of the first ${n} numbers is: ${n > 0 ? average : 0}`;
}