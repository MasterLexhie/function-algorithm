// === first task ===

const stringReverse = str => {
  if (isNaN(str)) {
    str = str
      .split("")
      .reverse()
      .join("");
    return str;
  } else {
    return alert(`${str} is not a string`);
  }
};

stringReverse("hello");

// === second task ===

const integerReverse = int => {
  if (Number.isInteger(int)) {
    int =
      parseInt(
        int
          .toString()
          .split("")
          .reverse()
          .join("")
      ) * Math.sign(int);
    return int;
  } else {
    return alert(`${int} is not an integer`);
  }
};

integerReverse(-673.43);

// === third task ===
const checkPrimeNumber = num => {
  if (!Number(num)) {
    return alert(`${num} is not a number, Please input a number`);
  }

  newInput = Number(num);

  (inputNumber = ""), num;

  for (i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      inputNumber = 1;
      break;
    }
  }
  if (inputNumber == 0) {
    return alert(`${newInput} is a prime number`);
  } else {
    return alert(`${newInput} is not a prime number`);
  }
  return;
};

checkPrimeNumber(225);

// === fourth task ===

function mostOccurring(str) {
  const charArray = str.split("").filter(Boolean);

  const charCount = {};

  for (const char of charArray) {
    charCount[char] = charCount[char] + 1 || 1;
  }
  let maxCount = 0;
  let maxChar = "";
  for (const [key, value] of Object.entries(charCount)) {
    if (value > maxCount) {
      maxCount = value;
      maxChar = key;
    }
  }
  return maxChar;
}

mostOccurring("12s3w2ed3432222");

// === fifth task ===

const compareCharacter = (str1, str2) => {
  const objMap = {};
  inputOne = str1.split("");
  inputTwo = str2.split("");

  inputOne.forEach(char1 =>
    inputTwo.forEach(char2 => {
      if (char1 === char2) {
        objMap[char1] = objMap[char2];
        console.log("compareCharacter", Object.keys(objMap).length);
      }
      return;
    })
  );
};

compareCharacter("hello", "ello");

// === sixth task ===

const checkVowelInCharacter = char => {
  let vowels = char.match(/[a,e,i,o,u]/gi);

  if (vowels) {
    let vowel = vowels.length;
    return vowel;
  } else {
    return alert(`${vowel} does not contain any vowel`);
  }
};

checkVowelInCharacter("andrew");

// === seven task ===

const upperCase = char => {
  input = char.toUpperCase();
  return input;
};

upperCase("andrew");

// === eight task ===

const statistics = num => {
  let numberArray = num.toString().split("");
  let character = 0;
  let maxCharacter = "";
  if (!Number(num)) {
    return alert(`${num} is not a number, Please input a number`);
  }

  // Mean value

  let totalNum = numberArray
    .map(num => parseFloat(num))
    .reduce((acc, cur) => acc + cur);

  let mean = totalNum / numberArray.length;

  // Mode value

  let mode = num
    .toString()
    .split("")
    .map(char => {
      if (num.toString().split(Number(char)).length > character) {
        character = num.toString().split(Number(char)).length;
        maxCharacter = char;
      }
    });

  // Median value

  let sortedNumber = numberArray
    .map(num => {
      return Number(num);
    })
    .sort();

  let midNum = Math.floor(sortedNumber.length / 2);
  let median =
    sortedNumber.length % 2 !== 0
      ? sortedNumber[midNum]
      : (sortedNumber[midNum - 1] + sortedNumber[midNum]) / 2;

  return `statistics: { mode: "${maxCharacter}", median: "${median}", mean: ${mean}}`;
};

statistics(123456);

//  === ninth task === not complete

function primeNumberArray(number) {
  let primes = [];

  if (number < 2) {
    return primes;
  }

  primes.push(2);

  let isPrime = true;

  for (let i = 3; i <= number; i++) {
    isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

primeNumberArray(9);

// === tenth task ===

const factorial = num => {
  newNumber = 1;
  if (Number(num)) {
    for (i = 1; i <= num; i++) {
      newNumber = newNumber * i;
    }
  } else {
    return alert(`${num} is not a number`);
  }
  return newNumber;
};

factorial(5);
