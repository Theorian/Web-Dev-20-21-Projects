let url = new URL(window.location.href);
let cheese = url.searchParams.get("cheese");
let appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

//

let quotes = [
  "Please Stand By",
  "nope.avi",
  "I like gaming",
  "*Maniacal Laughter",
  "Clayton's acting kinda sus",
  "Commandome was not The Imposter."
];
let randomNumber = Math.floor(Math.random() * quotes.length);

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
