/* global prompt, alert */
/* jshint - W060 */

"use strict";  //enable strict mode

window.onload = function() {

    var male = document.getElementById("male");
    var female = document.getElementById("female");

    male.onclick = function() {
        female.checked = false;
        other.checked = false;
    };

    female.onclick = function() {
        male.checked = false;
        other.checked = false;
    };
};
