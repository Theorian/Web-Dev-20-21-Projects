let url = new URL(window.location.href);

let mochi = url.searchParams.get("mochi");

let soloFromURL = url.searchParams.get("solo");

document.getElementById("MochiThatLike").innerHTML = mochi;
document.getElementById("SoloThatLike").innerHTML = soloFromURL;

let quotes = [
  "When life gives you lemons, squeeze them into people's eyes",
  "Just keep swimming, just keep swimming",
  "It's a sign of the times",
  "As you wish",
  "Yeah.",
  "um chile, anyways so."
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
