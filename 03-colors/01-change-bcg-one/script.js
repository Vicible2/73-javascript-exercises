/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("red").addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(204, 51, 0)";
       
    });
    document.getElementById("green").addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(57, 172, 115)";
    });
    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(255, 209, 26)";
       
    });
     document.getElementById("blue").addEventListener("click", function() {
       document.body.style.backgroundColor = "rgb(0, 134, 179)";
    });
    document.getElementById("home").addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(22, 35, 46)";
     });
 
})();
