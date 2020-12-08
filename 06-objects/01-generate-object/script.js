/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector('#run').addEventListener('click', function () {
        let rebel = {
            brand: "Honda",
            model: "CMX 1100",
            year: "2021",
            cc: "1084",
            type: "twin-engine",
        }

        let me = {
            name: "Manten",
            surname: "Devillé",
            age: "24",
            city: "Oetingen",
            country: "Belgium",
            shoesize: "43"
        };

        console.dir(me);
        console.log("Hello! My name is " + me.name + " " + me.surname + " and I'm " + me.age + " old. I live in " + me.city + " and am from " + me.country + ". Not that you'd care but just in case: my shoesize is " + me.shoesize + ".");
        console.dir(rebel);
    })
})();