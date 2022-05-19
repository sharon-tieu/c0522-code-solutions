/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH < 0) {
    return 'invalid pH';
  } else if ((pH >= 0) && (pH < 7)) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if ((pH > 7) && (pH <= 14)) {
    return 'base';
  } else {
    return 'invalid pH';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return 'We\'re the Warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~!';
  } else {
    return 'Goodnight everybody!';
  }
}
