/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];
    document.querySelector('#run').addEventListener('click', function () { 
    let contains = fruits.includes("apple");
    if (fruits.includes("apple")) {
        console.log("Yes there appears to be an apple inside!")
    } else {
        console.log("There appears to be no sign of an apple in the near vicinity!")
    }
});
    // your code here

})();
