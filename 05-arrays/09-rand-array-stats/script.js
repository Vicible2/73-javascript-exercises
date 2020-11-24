/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener('click', function () {
    
        let array = [];
        
        //create random numbers between 1 and 100 for array
        for (i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 100 );
            array.push(random);
            document.getElementById('n-' + (i+1)).innerHTML = random;

        }

        let min = ;
        let max = ; 
        let sum = ;
        let avg = ;
        console.log(array);
    })
    // your code here

})();
