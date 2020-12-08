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


    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;

    function getAge(day, month, year) {



        let today = new Date();
        let birthday = new Date(year, month, day);
        return today.getFullYear() - birthday.getFullYear();




    }
    var dateOfBirth = day + "/" + month + "/" + year;

    let age = getAge(day, month, year);
    alert("Your birthday is on " + dateOfBirth + "  you are " + age + " years old.");

});