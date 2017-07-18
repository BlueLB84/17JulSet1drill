// Jedi Name

function jediName(firstName, lastName){
    let firstHalf = firstName.slice(0,2);
    let secondHalf = lastName.slice(0,3);
    console.log(`${secondHalf}${firstHalf}`);
}

jediName('Lindsey', 'BarbeeVargas');