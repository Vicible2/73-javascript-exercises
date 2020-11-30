/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
//making a function on click event, (this is already called callback), as it reacts only when calling it (by clicking)
    document.querySelector('#run').addEventListener('click', function () {
        //adding a new function inside the function (acts also as a variable) with 2 parameters: error and articles
        window.lib.getPosts(function (error, articles) {
            console.log(error, articles);
        })

    })

})();