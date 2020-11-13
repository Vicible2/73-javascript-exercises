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


        let d = document.getElementById("dob-day").value;
        let m = document.getElementById("dob-month").value;
        let y = document.getElementById("dob-year").value;

    function getAge(day,month,year) {
        
        

        let today = new Date()
        let birthday = new Date(year, month, day);
        return today.getFullYear() - birthday.getFullYear();


       

    }
    var dob = d + "/" + m + "/" + y;
    
       let age = getAge(d,m,y);
       alert("Your birthday is on " + dob + "  you are " + age + " years old.");








});