//  ************  Jedi Name  ************  

function jediName(firstName, lastName){
    let firstHalf = firstName.slice(0,2);
    let secondHalf = lastName.slice(0,3);
    return `${secondHalf}${firstHalf}`;
}

jediName('Lindsey', 'BarbeeVargas');

// **********  To infinity...  ************  

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




// ************  How many days in a month  ************  
let month = 'March';

switch (month) {
    case "January":
        console.log(`${month} has 31 days`);
        break;

    case "February":
        console.log(`${month} has 28 days`);
        break;

    case "March":
        console.log(`${month} has 31 days`);
        break;

    case "April":
        console.log(`${month} has 30 days`);
        break;

    case "May":
        console.log(`${month} has 31 days`);
        break;

    case "June":
        console.log(`${month} has 30 days`);
        break;

    case "July":
        console.log(`${month} has 31 days`);
        break;

    case "August":
        console.log(`${month} has 31 days`);
        break;

    case "September":
        console.log(`${month} has 30 days`);
        break;

    case "October":
        console.log(`${month} has 31 days`);
        break;
    
    case "November":
        console.log(`${month} has 30 days`);
        break;

    case "December":
        console.log(`${month} has 31 days`);
        break;
    default:
        console.log("There are 365 days in a year");
    
}



//  ********  Cracking the code  *********

function decode(word) {
    const firstLetter = word[0];
    if (firstLetter === 'a') {
        return word[1];
    } else if (firstLetter === 'b') {
        return word[2];
    } else if (firstLetter === 'c') {
        return word[3];
    } else if (firstLetter === 'd') {
        return word[4];
    } else {
        return ' ';
    }
}

function decodeSentence(sentence, fn) {
    let result = "";
    let sentenceArr = sentence.split(" ");
    for (let i = 0; i < sentenceArr.length; i++) {
      const decoded = fn(sentenceArr[i]);
        result += decoded;
    } 
  
    return result;
}

console.log(decodeSentence('craft block argon meter bells brown croon droop', decode));

//  *************  Rock Paper Scissors  *************

function RockPaperScissors(userChoice){
    
    var computer = 1 + Math.floor((Math.random()*3));
    
    if (userChoice > computer) {
        console.log(`Player beats Computer!`)
    } else if (userChoice < computer) {
        console.log(`Computer beats Player!`)
    } else if (userChoice === computer) {
        console.log(`Tie!`);
    }
}

RockPaperScissors(2);