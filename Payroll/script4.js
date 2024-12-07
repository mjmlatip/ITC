var payroll = [];

    function initPayroll() {
        payroll = [];
        showPayroll();
    }

    function addToPayroll() {
        var empName = document.getElementById("empName").value;
        var daysWorked = parseInt(document.getElementById("daysWorked").value);
        var dailyRate = parseFloat(document.getElementById("dailyRate").value);
        var deduction = parseFloat(document.getElementById("deduction").value);

        var grossPay = daysWorked * dailyRate;
        var netPay = grossPay - deduction;

        var employee = {
            name: empName,
            daysWorked: daysWorked,
            dailyRate: dailyRate,
            grossPay: grossPay,
            deduction: deduction,
            netPay: netPay
        };

        payroll .push(employee);
        showPayroll();
        clearInputs();
    }

    function deleteEmployee() {
        var lineNumber = parseInt(document.getElementById("delLine").value);

        if (lineNumber > 0 && lineNumber <= payroll.length) {
            payroll.splice(lineNumber - 1, 1);
            showPayroll();
        } else {
            alert("Invalid line number.");
        }
    }

    function showPayroll() {
        var tableBody = "";

        for (var i = 0; i < payroll.length; i++) {
            var emp = payroll[i];
            tableBody += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + emp.name + "</td>" +
                "<td>" + emp.daysWorked + "</td>" +
                "<td>" + emp.dailyRate.toFixed(2) + "</td>" +
                "<td>" + emp.grossPay.toFixed(2) + "</td>" +
                "<td>" + emp.deduction.toFixed(2) + "</td>" +
                "<td>" + emp.netPay.toFixed(2) + "</td>" +
                "</tr>";
        }

        document.querySelector("#payroll tbody").innerHTML = tableBody;
    }

    function clearInputs() {
        document.getElementById("empName").value = '';
        document.getElementById("daysWorked").value = '';
        document.getElementById("dailyRate").value = '';
        document.getElementById("deduction").value = '';
        document.getElementById("delLine").value = '';
    }