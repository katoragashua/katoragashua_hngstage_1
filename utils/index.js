const axios = require("axios");

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPerfect(num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

function isArmstrongNumber(num) {
  const digits = num.toString().split("");
  const numDigits = digits.length;
  let sum = 0;

  for (let digit of digits) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === num;
}

function sumOfNumberDigits(num) {
  if (Number(num) <= 0) return 0;
  const numDigits = num.split("");
  return numDigits.reduce((acc, digit) => acc + parseInt(digit), 0);
}

function isOddOrEven(num) {
  if (num > 0 && num % 2 === 0) return "even";
  if (num > 0 && num % 2 != 0) return "odd";
}

async function getFunFact(num) {
  try {
    const res = await axios(`http://numbersapi.com/${num}/math`);
    const data = await res.data;
    return data;
    
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
  }
}

module.exports = {
  isPrime,
  isPerfect,
  isArmstrongNumber,
  sumOfNumberDigits,
  isOddOrEven,
  getFunFact,
};
