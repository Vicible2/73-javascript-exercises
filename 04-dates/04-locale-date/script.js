/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();  

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let weekdag = weekday[d.getDay()];

    let months = new Array(12)
    months [0] = "Januari";
    months [1] = "Februari";
    months [2] = "March";
    months [3] = "April";
    months [4] = "May";
    months [5] = "June";
    months [6] = "July";
    months [7] = "August";
    months [8] = "September";
    months [9] = "October";
    months [10] = "No-nut-november";
    months [11] = "Destroy-dick-december";

    let maand = months[d.getMonth()];



    


    if (minutes < 10 ) {
        var now = weekdag + " " + day + " " + maand + " " + year + " " + hour + "h0" + minutes;
    } else {
        var now = weekdag + " " + day + " " + maand + " " + year + " " + hour + "h" + minutes;
    }
    document.getElementById("target").innerHTML = now;
    // your code here

})();