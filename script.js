document.querySelector(".Start").addEventListener("click", function() {
  document.getElementsByClassName("instruction")[0].innerHTML = "The Number has been generated";

  let num = Math.floor(Math.random() * 100) + 1;
  let noOfguess = 0;
  let totalScore = 0;

  document.querySelector(".btn").addEventListener("click", function() {
    let guessNumber = parseInt(document.querySelector(".box").value);

    if (guessNumber == num) {
      document.getElementsByClassName("response")[0].innerHTML = "Congratulations! Your Guess is Correct.";
      document.getElementsByClassName("guessNumber")[0].innerHTML = `Guessed Number is ${num}`;
      totalScore = 100 - noOfguess;
      document.getElementsByClassName("score")[0].innerHTML = `Your Final Score is ${totalScore}`;
    } else if (guessNumber < num) {
      document.getElementsByClassName("response")[0].innerHTML = "Your Guess is too low.";
    } else {
      document.getElementsByClassName("response")[0].innerHTML = "Your Guess is too high.";
    }

    noOfguess++;
    document.getElementsByClassName("count")[0].innerHTML = `No of guess: ${noOfguess}`;
  });
});
