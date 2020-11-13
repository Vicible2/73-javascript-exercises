/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function () {

    function getAge(birth) {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        const dob = day + "," + month + "," + year;

        let today = new Date();
        let d = today.getDay();
        let m = today.getMonth();
        let y = today.getFullYear();

        if (m == month && d >= day) return parseInt(y - year);
        if (m == month && d < day) return parseInt(y - year - 1);
        if (m > month) return parseInt(y - year);
        if (m < month) return parseInt(y - year - 1);

    }

    let age = getAge("dob");
    alert("Your birthday is " + dob + " and you are " + age + " years old.");






});