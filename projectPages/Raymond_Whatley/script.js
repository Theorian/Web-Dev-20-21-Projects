let url = new URL(window.location.href);

let cheese = url.searchParams.get("cheese");

let appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

let quotes = [
  "Hello there",
  "Its over anakin i have the high ground",
  "Theres always a bigger fish",
  "i dont like sand",
  "Execute order 66",
  "UNLIMITED POWER",
  "The ability to speak doesnt make you intelligent",
  "Kill  him kill him now",
  "Dew it",
  "General Kenobi",
  "Your clones are very impressive you must be very proud",
  "Not Just the men but the women and the children to"
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
