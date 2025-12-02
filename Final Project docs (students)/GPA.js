/* global prompt, alert */
/* jshint - W060 */

"use strict";  //enable strict mode

window.onload = function () {
    document.getElementById("credit1").focus();
};

function gradeToPoints(letter_grade) {
    if (letter_grade === "a" || letter_grade === "A") return 4.0;
    if (letter_grade === "b" || letter_grade === "B") return 3.0;
    if (letter_grade === "c" || letter_grade === "C") return 2.0;
    if (letter_grade === "d" || letter_grade === "D") return 1.0;
    if (letter_grade === "f" || letter_grade === "F") return 0.0;
    return -1; 
}

function cal_GPA() {
    var sumPoints = 0;
    var sumCredits = 0;
    var valid_data_entries = 0;
    for (var i = 1; i <= 5; i++) {
        var credit_userinput = document.getElementById("credit" + i).value;
        var grade_userinput = document.getElementById("grade" + i).value;
        if (credit_userinput !== "" && grade_userinput !== "") {
            var credits = parseFloat(credit_userinput);
            var points = gradeToPoints(grade_userinput);
            if (isNaN(credits) || credits <= 0 || points === -1) {
                alert("Please enter valid credit hours and grades (A, B, C, D, F).");
                return;
            }
            sumPoints = sumPoints + (points * credits);
            sumCredits = sumCredits + credits;
            valid_data_entries++;
        }
    }
    if (valid_data_entries < 2) {
        alert("Please enter at least 2 valid course entries.");
        return;
    }
    var gpa = sumPoints / sumCredits;
    document.getElementById("result").value = gpa.toFixed(2);
}

function reset() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("credit" + i).value = "";
        document.getElementById("grade" + i).value = "";
    }
    document.getElementById("result").value = "";
    document.getElementById("credit1").focus();
}