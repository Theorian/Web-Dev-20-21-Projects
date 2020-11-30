let url = new URL(window.location.href);

let cheese = url.searchParams.get("cheese");

let appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

let quotes = [
  "I'll be back",
  "Say hello to my little friend",
  "It really do be like that sometimes"
];

let randomNumber = Math.floor(Math.random() * 4);

document.getElementById("randomQuote").innerHTML = quotes[4];
appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

let quotes = [
  "I'll be back",
  "Say hello to my little friend",
  "It really do be like that sometimes"
];

let randomNumber = Math.floor(Math.random() * 4);

document.getElementById("randomQuote").innerHTML = quotes[4];
