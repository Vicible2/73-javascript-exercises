/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let age = prompt("How old are you?");
let gender = prompt("What gender are you?");
let name = prompt("What is your name?");
let town = prompt("Where do you live?");

if(confirm("Please confirm that you are: \n  " + age + " years old, " + gender + ", are called " + name + " and live in " + town + "?" )) {
    alert("Thank you for submitting your info");
} else {
    alert("Please re-submit your information");
    location.reload();
}


})();
