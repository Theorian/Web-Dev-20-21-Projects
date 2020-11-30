/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let url = new URL(window.location.href);
let cheese = url.searchParams.get("cheese");
let noodles = url.searchParams.get("noodles");

document.getElementById("cheese").innerHTML = cheese;
document.getElementById("noodles").innerHTML = noodles;

// You should eat some noodles they taste good

let quotes = [
  "Where's the beef?",
  "Never gonna let you down",
  "I like cheeses",
  "Nooooooodles",
  "Who's on first",
  "Never gonna give you up"
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
