// === first task ===

const stringReverse = str => {
  if (isNaN(str)) {
    str = str
      .split("")
      .reverse()
      .join("");
    console.log("stringReverse", str);
    return;
  } else {
    console.log(`${str} is not a string, please use a alphabets instead`);
    return;
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

    console.log("integerReverse", int);
    return;
  } else {
    console.error(`${int} is not an integer, please use an integer instead`);
    return;
  }
};

integerReverse(-673.43);

// // === third task ===
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
    console.log("The input number is a Prime number");
  } else {
    console.log("The input number is not a Prime Number");
  }
  return newInput;
};

checkPrimeNumber(225);

// === fourth task ===

const mostOccurring = str => {
  let character = 0;
  let maxCharacter = "";

  str.split("").map(char => {
    if (str.split(char).length > character) {
      character = str.split(char).length;
      maxCharacter = char;
    }
  });
  console.log("mostOccurring", maxCharacter);
};

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
        return;
      } else {
        console.log(`No same number of unique characters`);
        return;
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
    console.log("checkVowelInCharacter", vowel);
    return;
  } else {
    console.log(`${char} has no vowels in it`);
    return;
  }
};

checkVowelInCharacter("andrew");

// === seven task ===

const upperCase = char => {
  input = char.toUpperCase();
  console.log("upperCase", input);
  return;
};

// upperCase("andrew");

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

  console.log(
    `statistics: { mode: "${maxCharacter}", median: "${median}", mean: ${mean}}`
  );
  return;
};

statistics(123456);

//  === ninth task === not complete

// const primeNumberArray = num => {
//   let primeNumberList = [];
//   input = parseFloat(input);

//   for (i = 2; i <= input; i++) {
//     primeNumberList = [...primeNumberList, i];
//   }

//   // primeNumberList = primeNumberList.filter(num => {
//   //   num % 2 === 0;
//   // });
//   console.log("prime number array", primeNumberList);
// };

// === tenth task ===

const factorial = num => {
  newNumber = 1;
  if (Number(num)) {
    for (i = 1; i <= num; i++) {
      newNumber = newNumber * i;
    }
  } else {
    console.log(`${num} is not a number`);
    return;
  }
  console.log(`${num} factorial`, newNumber);
};

factorial(5);
