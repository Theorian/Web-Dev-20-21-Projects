let url = new URL(window.location.herf);
let pizza = url.searchParams.get("pizza");
let icecreamFromURL = url.searchParams.get("icecream");

document.getElementById("pizzaiLike").innerHTML = pizza;
document.getElementById("icecreamiLike").innerHTML = icecreamFromURL;

let quotes = [
  "Hotel? Trvago",
  "PERRY THE PlARYPUS!",
  "Fetch Me The Holy Hand Gernade",
  "There Is 1 Imposter Among Us",
  "There Is 2 Imposters Among Us",
  "There is 3 Imposters Among Us"
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
