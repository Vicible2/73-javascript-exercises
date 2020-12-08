/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "seagull", num: 1},
        {name: "raven", num: 3},
        {name: "chickadee", num: 2},
        {name: "owl", num: 4},
        {name: "buzzard", num: 8},
        {name: "pigeon", num: 1},
        {name: "magpie", num: 3},
        {name: "vulture", num: 2},
        {name: "falcon", num: 1},
        {name: "robin", num: 2},
        {name: "dove", num: 1},
        {name: "crow", num: 5},
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);

document.querySelector('#run').addEventListener('click', () => {

    let adjectivesArr = Array.from(adjectives);
    //console.log(adjectivesArr);
    let randomBird = Math.floor(Math.random() * birds.length);
    let randomAdj = Math.floor(Math.random() * adjectivesArr.length);

    //  console.log(randomBird, randomAdj);

    if(birds[randomBird]["num"] > 1) {
        console.log(`A few ${adjectivesArr[randomAdj]} ${birds[randomBird]["name"]}s`);
    } else {
        console.log(`A ${adjectivesArr[randomAdj]} ${birds[randomBird]["name"]}`);
    }



})

})();
