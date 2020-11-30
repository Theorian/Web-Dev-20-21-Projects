let url = new URL(window.location.href);
let cheese = url.searchParams.get("cheese");
let appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

let quotes = [
  "I stole this quote",
  "randomquote .exe",
  "American cheese is quite bad",
  "watah..?",
  "50% chance to get this quote",
  "50% chance to get this quote"
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
