/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) { //if x is bigger or equal than y return x
      return x; 
    } else { //if x is not bigger than y, y must be bigger, so return y
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age >= 18) return 'Adult' //if age is greater than or equal to 18 return Adult
    else return 'Minor' //if age is not equal or greater than 18, must be minor
}

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
    //if statement checks if char is any vowel since we are using or
    if (char === 'a' || char === 'e' || char === 'i' || char ==='o' || char === 'u') return true
    else return false //if it's not a vowel, then return false
}

console.log('Exercise 3 Result:', isCharAVowel("a"))

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (name, domain) => {
  return `${name}@${domain}` //using template literal to add an @ between name and domain
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser = (name, time) => {
  return `Good ${time}, ${name}` //using template literal to place time and name in the right positions
}

console.log('Exercise 5 Result:', greetUser("Frank", "evening"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (num1,num2,num3) => {
  let maxNum = num1 //sets our max number to num1 because we need to compare
  if (maxNum < num2) maxNum = num2 //if num1 is less than num2, replace num1 with num2 in variable maxNum
  if (maxNum < num3) maxNum = num3//since maxNum is either num1 (because the previous if statement was false) or num2,
  //comparing maxNum to num3 will either keep maxNum as is (num1 or num2 whichever is bigger) or change the value to num3
  return maxNum //regardless of the numbers, maxNum will always be the greatest number at the end
}

console.log('Exercise 6 Result:', maxOfThree(50, 10, 20));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (bill, tipPer) => {
  let tipAmount = bill * (tipPer/100) //since the tip is in percentage, to get the amount we need to tip we must divide it by 100
  return tipAmount
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
const convertTemperature = (temp,scale) => {
  if (scale === 'F') return (temp - 32) / 1.8 //we need the parenthesis to make sure the conversion happens correctly
  if (scale === 'C') return temp * 1.8 + 32 //no need for parenthesis for this conversion
  else return 'Incorrect scale.' //if the scale is not 'F' or 'C', this returns an error statement
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
const basicCalculator = (num1, num2, op) => {
  if (op === 'add') return num1 + num2 //adds if op is add
  if (op === 'subtract') return num1 - num2 //subtracts if op is subtract
  if (op === 'multiply') return num1 * num2 //multiplies if op is multiply
  if (op === 'divide') return num1 / num2 //divides if op is divide
  else return 'Not an operation.' //if the op is not one of the four above, returns this error statement
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
const calculateGrade = grade => {
  if (grade >= 90) return 'A' //if grade is above 90, returns A, and since it returns, it does not check the other statements
  if (grade >= 80) return 'B' //if grade is above 80 but under 90, returns B, and does not check other statements
  if (grade >= 70) return 'C' //same for C except it is between 70 and 80
  if (grade >= 60) return 'D' //same for D except it is between 60 and 70
  return 'F' //if all the other if statements are false, it will return and F becasue grade must be lower than 60
}

console.log('Exercise 10 Result:', calculateGrade(99));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/
const createUsername = (firstName, lastName) => {
  let first3 = firstName.substring(0,3) //collects the first three letters of the first name
  let last3 = lastName.substring(0,3) //collects the first three letters of the last name
  let fullName = firstName+lastName //adds the first and last name strings together to one string
  let fullNameCount = fullName.length //the method .length gets the amount of characters in the combined string
  return first3+last3+fullNameCount //concatonates the required strings to make our username string
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
const numArgs = (...args) => { //... allows for any number of arguments to be passed into the function
  console.log(args.length) //args is an array where each element is an argument passed into the function
}                  //.length is a method that gives us the amount of elements in the array

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
