"use strict";
// const message = document.querySelector(".message");

// console.log(message.textContent);
// document.querySelector(".nikzad").textContent = "آفرین داری خوب جلو میری😍";

// document.querySelector(".message").textContent = "شماره شما درست است";

// document.querySelector(".guess").value = 12;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = number;

//ریست کردن دکمه again

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  console.log("clicked");
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //زمانی که کاربر هیچ عددی را وارد نکند
  if (!guess) {
    document.querySelector(".message").textContent = "شماره وارد شده صحیح نیست";

    // زمانی که کاربر عدد درست را وارد کند
  } else if (guess === number) {
    document.querySelector(".message").textContent = "برنده شدی 🎉";
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //refactoring استفاده از
  else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "شماره شما بزدگ است" : "شماره شما کوچک است";
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "شما بازی را باختی";

      document.querySelector(".score").textContent = 0;
    }
  }
});

// زمانی که عدد کاربر بزرگ تر از مقدار صحیح باشد
// } else if (guess > number || guess < number) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "شماره بزرگتر است";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "شما بازی را باختی";
//     document.querySelector(".score").textContent = 0;
//   }

//زمانی که عدد کاربر کوچک تر از مقدار صحیح باشد
// } else if (guess < number) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "شماره کوچکتر است";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "شما بازی را باختی";
//     document.querySelector(".score").textContent = 0;
//   }
// }
// document.querySelector(".message").textContent = "شماره کوچکتر است";
// score--;
// document.querySelector(".score").textContent = score;
