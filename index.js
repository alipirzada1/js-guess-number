let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number is ", randomNumber);
let counter = 0;
let guess;
do {
  guess = prompt("Enter a number to guess between 1 and 100!");
  guess = Number.parseInt(guess);
  if (guess === randomNumber) {
    counter++;
    console.log("Correct guessed Number is equal to the Original Number");
    break;
  } else if (guess > randomNumber) {
    counter++;
    console.log("your Guess number is greater than the original number");
    continue;
  } else if (guess < randomNumber) {
    counter++;
    console.log("Your Guess number is less than the original number");
    continue;
  }
} while (guess !== randomNumber);
console.log("Random number is ", randomNumber);
console.log("Guessed number is", guess);
console.log("score is", 101 - counter); // score = 101 - counter
