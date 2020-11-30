let url = new URL(window.location.href);
let rock = url.searchParams.get("rock");
let edmFromURL = url.searchParams.get("edm");

document.getElementById("rockIsGreat").innerHTML = rock;
document.getElementById("edmIsGood").innerHTML = edmFromURL;

document.getElementById("water").innerHTML = "Dasani";
document.getElementById("imagePlaceHolder").innerHTML = "Dasani";
//

let quotes = [
  "So you're saying there's a chance?",
  "get out of my swamp",
  "I don't know what I'm doing",
  "Cello, you've got a bass",
  "Gnarly",
  "I totally forgot."
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
