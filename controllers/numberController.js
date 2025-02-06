const { getFunFact } = require("../utils");
const {
  isPrime,
  isPerfect,
  isArmstrongNumber,
  sumOfNumberDigits,
  isOddOrEven,
} = require("../utils/");

const { StatusCodes } = require("http-status-codes");

const getNumberInfo = async (req, res) => {
  const { number } = req.query;
  
  if (!number || typeof Number(number) !== "number")
    return res.status(StatusCodes.BAD_REQUEST).json({
      number: "alphabet",
      error: true,
    });

  const properties = [];

  const prime = isPrime(Number(number));

  const perfect = isPerfect(Number(number));

  const armstrongNumber = isArmstrongNumber(Number(number));
  if (armstrongNumber) properties.push("armstrong");
  properties.push(isOddOrEven(Number(number)));

  const digitsSum = sumOfNumberDigits(number);

  const funFact = await getFunFact(number);

  res.status(StatusCodes.OK).json({
    number: Number(number),
    is_prime: prime,
    is_perfect: perfect,
    properties: properties,
    digit_sum: digitsSum,
    fun_fact: funFact,
  });
};

module.exports = { getNumberInfo };
