/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let url = new URL(window.location.href);
let cheese = url.searchParams.get("cheese");
let appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

//

let quotes = [
  "Hello",
  "Cool",
  "I like gaming",
  "water, it is good",
  "Well played",
  "I totally forgot."
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
