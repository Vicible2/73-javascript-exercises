/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [{
            id: "0001",
            available: false,
            user: "leny",
            os: "macOS"
        },
        {
            id: "0002",
            available: false,
            user: "Nicolas"
        },
        {
            id: "0003"
        },
        {
            id: "0004",
            os: "Windows"
        },
        {
            id: "0005"
        },
        {
            id: "0006",
            os: "macOS"
        },
        {
            id: "0007"
        },
        {
            id: "0008"
        },
        {
            id: "0009",
            available: false,
            user: "Anthony"
        },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    
    document.querySelector('#run').addEventListener('click', function () {
        console.log(computers.length);
        console.log(computers);

        for (i = 0; i < computers.length; i++) {
            /* New javascript notation for:
                            -Object.assign( target, source1, source2,...) -> when target is empty object = new obj will me made from sourge merges
                            -if target is existing object -> duplicate properties from sources will overwrite target properties
                            example: let obj1 = object.assign ({}, computers, defaultProps) ---> let obj1 = {...computers, ...defaultProps}
                            new notation will automatically pick a new object when target is not given
             */

            computers[i] = {
                ...defaultProps,
                ...computers[i],
            }
        }
        console.log(computers);

    })
    // your code here
})();