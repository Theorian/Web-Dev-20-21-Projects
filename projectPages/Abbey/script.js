let url = new URL(window.location.href);
let hobby = url.searchParams.get("hobby");
let favoriteColorFromURL = url.searchParams.get("favoriteColor");

document.getElementById("hobby").innerHTML = hobby;
document.getElementById("favoriteColor").innerHTML = favoriteColorFromURL;

//

let quotes = [
  "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you",
  "The best way to find yourself is to lose yourself in the service of others",
  "All our dreams can come true, if we have the courage to pursue them",
  "It's hard to beat a person who never gives up",
  "If we have the attitude that it's going to be a great day it usually is",
  "Make each day your masterpiece"
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
