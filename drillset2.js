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

// Cracking the code
/* I need to take more time understand
what this example is asking me to do
in the first place.  I don't understand the 'decoding' scheme */


// How many days in a month
let month = 'February';

switch (month) {
    case "January":
    console.log(`${month} has 31 days`)
    break;

    case "February":
    console.log(`${month} has 28 days`)
    break;

    case "March":
    console.log(`${month} has 31 days`)
    break;

    case "April":
    console.log(`${month} has 30 days`)
    break;

    case "May":
    console.log(`${month} has 31 days`)
    break;

    case "June":
    console.log(`${month} has 30 days`)
    break;

    case "July":
    console.log(`${month} has 31 days`)
    break;

    case "August":
    console.log(`${month} has 31 days`)
    break;

    case "September":
    console.log(`${month} has 30 days`)
    break;

    case "October":
    console.log(`${month} has 31 days`)
    break;
    
    case "November":
    console.log(`${month} has 30 days`)
    break;

    case "December":
    console.log(`${month} has 31 days`)
    break;
}