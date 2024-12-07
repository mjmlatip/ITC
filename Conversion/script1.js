
    function convertUnit() {
        const value = document.getElementById("Value").value; 
        const unit = document.getElementById("Unit").value;
        let result;

        
        if (value === "") {
            document.getElementById("Result").innerText = "Please enter a value.";
            return; 
        }

        const numericValue = parseFloat(value);

        if (unit === "FtoC") {
            result = (numericValue - 32) * 5 / 9;
            document.getElementById("Result").innerText = `${numericValue}°F is ${result.toFixed(2)}°C`;
        } else if (unit === "CtoF") {
            result = (numericValue * 9 / 5) + 32;
            document.getElementById("Result").innerText = `${numericValue}°C is ${result.toFixed(2)}°F`;
        } else if (unit === "MtoF") {
            result = numericValue * 3.28084;
            document.getElementById("Result").innerText = `${numericValue} meters is ${result.toFixed(2)} feet`;
        } else if (unit === "FtoM") {
            result = numericValue / 3.28084;
            document.getElementById("Result").innerText = `${numericValue} feet is ${result.toFixed(2)} meters`;
        }
    }
