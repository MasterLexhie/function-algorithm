// === first task ===

const stringReverse = () => {
  let input = document.getElementById("input-one").value;
  let result = document.getElementById("result-one");

  let newInput = input
    .split("")
    .reverse()
    .join("");
  if (isNaN(newInput)) {
    result.innerHTML = newInput;
  }
};

// === second task ===

const integerReverse = () => {
  let input = document.getElementById("input-two").value;
  let result = document.getElementById("result-two");

  let newInput =
    parseFloat(
      input
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(input);
  if (Number.isInteger(newInput)) {
    result.innerHTML = newInput;
  }
};

// === third task ===
const checkPrimeNumber = () => {
  let input = document.getElementById("input-three").value;
  let result = document.getElementById("result-three");
  isAPrimeNumber = `${input} is a Prime Number`;
  notAPrimeNumber = `${input} is not a Prime Number`;

  input = parseInt(input);

  for (let i = 2; i <= input; i++) {
    if (input === i) {
      return (result.innerHTML = isAPrimeNumber);
    }
    if (input % i === 0) {
      return (result.innerHTML = notAPrimeNumber);
      if (input % (i + 1) === 1 || input === 5 || input % (i + 5) === 1) {
        return (result.innerHTML = isAPrimeNumber);
      }
      return;
    } else if (input % Math.sqrt(input) === 0) {
      return (result.innerHTML = notAPrimeNumber);
    }
  }
};

// === fourth task ===

const mostOccurring = () => {
  let input = document.getElementById("input-four").value;
  let result = document.getElementById("result-four");

  let character = 0;
  let maxCharacter = "";

  input.split("").map(char => {
    if (input.split(char).length > character) {
      character = input.split(char).length;
      maxCharacter = char;
    }
  });

  return (result.innerHTML = maxCharacter);
};

// === fifth task ===

const compareCharacter = () => {
  let inputOne = document.getElementById("input-five-one").value;
  let inputTwo = document.getElementById("input-five-two").value;
  let result = document.getElementById("result-five");
  const objMap = {};
  inputOne = inputOne.split("");
  inputTwo = inputTwo.split("");

  inputOne.forEach(char1 =>
    inputTwo.forEach(char2 => {
      if (char1 === char2) {
        objMap[char1] = objMap[char2];
        return (result.innerHTML = Object.keys(objMap).length);
      }
    })
  );
};

// === sixth task ===

const checkVowelInCharacter = () => {
  let input = document.getElementById("input-six").value;
  let result = document.getElementById("result-six");
  let vowels = input.match(/[a,e,i,o,u]/gi);

  if (vowels) {
    let vowel = vowels.length;
    return (result.innerHTML = vowel);
  }
};

// === seven task ===

const upperCase = () => {
  let input = document.getElementById("input-seven").value;
  let result = document.getElementById("result-seven");

  input = input.toUpperCase();
  return (result.innerHTML = input);
};

// === eight task === not complete

const statistics = () => {
  let input = document.getElementById("input-eight").value;
  let result = document.getElementById("result-eight");
  let numberArray = input.split("");
  let character = 0;
  let maxCharacter = "";

  let totalNum = numberArray
    .map(num => parseFloat(num))
    .reduce((acc, cur) => acc + cur);

  let mean = totalNum / numberArray.length;

  let mode = input.split("").map(char => {
    if (input.split(Number(char)).length > character) {
      character = input.split(Number(char)).length;
      maxCharacter = char;
    }
  });

  let sortedNumber = numberArray
    .map(num => {
      return Number(num);
    })
    .sort();

  console.log("sortedNumber", sortedNumber);

  let midNum = Math.floor(sortedNumber.length / 2);

  let median =
    sortedNumber.length % 2 !== 0
      ? numberArray[midNum]
      : (numberArray[midNum - 1] + numberArray[midNum]) / 2;

  console.log("median", median);

  return (result.innerHTML = `{ mode: "${maxCharacter}", median: "", mean: ${mean}}`);
};

//  === ninth task === not complete

const primeNumberArray = () => {
  let input = document.getElementById("input-nine").value;
  let result = document.getElementById("result-nine");
  let primeNumberList = [];
  input = parseFloat(input);

  for (i = 0; i <= input; i++) {
    primeNumberList = [...primeNumberList, i];
  }

  // console.log("prime number array", list);
};

// === tenth task === not complete

const factorial = () => {
  let input = document.getElementById("input-ten").value;
  let result = document.getElementById("result-ten");

  // input === 0 || input === 1 ? 1 : '';
  // for (var i = 1; i >= input; i--) {
  //   input *= i;
  //   input = input * i
  //   console.log('input', input*=i)
  // }
  // return input;
  for (i = 1; i >= input; i++) {
    input = input * i;
    console.log("input", input);
  }
};
