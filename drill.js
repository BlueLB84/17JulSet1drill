// Lindsey's Solutions
// LBV #1
console.log('Hi, my name is Chris and I\'m 29 years old')

// LBV #2
function whoAmI() {
    console.log('Hi, my name is Chris and I\'m 29 years old');
}
whoAmI();

// LBV #3
function whoAmI(name, age) {
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`)
};
whoAmI('Lindsey', 32);

// LBV #4
function whoAmI(name, age) {
    let yearOfBirth = 2016 - age;
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`)
    console.log(`I was born in ${yearOfBirth}`)
};
whoAmI('Lindsey', 32);

// LBV #5
function yearOfBirth(age){
    let yearOfBirth = 2016 - age;
    return yearOfBirth;
}
function whoAmI(name, age) {
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`)
    console.log(`I was born in ${yob}`)
};
whoAmI('Lindsey', 32);

// LBV #6 - 8
function yearOfBirth(age){
  if (age < 0) {
      throw new Error('Age can not be negative');
  }
    
  // All validations passed
  // return year of birth
  return  2017 - age;
}

function validateInputs(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error("Arguments not valid.");
  }
  
  if (isNaN(age)) {
    throw new Error("Age must be number");
  }
}

function whoAmI(name, age) {
  try {
    validateInputs(name, age);
        
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`)
    console.log(`I was born in ${yob}`)
  } catch(e) {
    console.error(e);
  }
};

whoAmI('Lindsey', "twenty nine");