/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener('click', function () {

        let array = [];

        //create random numbers between 1 and 100 for array
        for (i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 100);
            array.push(random);
            document.getElementById('n-' + (i + 1)).innerHTML = random;

        }

        let min = Math.min(...array);
        console.log(min);
        document.getElementById('min').innerHTML = min;

        let max = Math.max(...array);
        console.log(max);
        document.getElementById('max').innerHTML = max;



        let sum = array.reduce(function addUp(a, b) {
            return a + b;
        }, 0);
        console.log(sum);
        document.getElementById('sum').innerHTML = sum;

        let avg = Math.round(sum / array.length);
        console.log(avg);
        document.getElementById('average').innerHTML = avg;

    })
    // your code here

})();