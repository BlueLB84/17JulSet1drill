// Jedi Name

function jediName(firstName, lastName){
    let firstHalf = firstName.slice(0,2);
    let secondHalf = lastName.slice(0,3);
    return `${secondHalf}${firstHalf}`;
}

jediName('Lindsey', 'BarbeeVargas');

// To infinity...

function beyond(num) {
    if (num === Infinity || num === Number.NEGATIVE_INFINITY) {
        console.log("And Beyond");
    }
    if (isFinite(num) && num > 0){
        console.log("To infinity");
    }
    if (isFinite(num) && num < 0){
        console.log("To negative infinity");
    }
    if (num === 0) {
        console.log("Staying home");
    }
    
}

beyond(Number.NEGATIVE_INFINITY);