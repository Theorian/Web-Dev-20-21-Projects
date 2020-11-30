/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let URLParameter1 = url.searchParams.get("game");

//Extracts another one of the URL parameters out.
let URLParameter2 = url.searchParams.get("movie");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("gameThatLike").innerHTML = URLParameter1;
document.getElementById("movieThatLike").innerHTML = URLParameter2;

//An array of quote.
let quotes = [
  "You eat all my beans?",
  "Thank you! Come again!",
  "I am Michael J Caboose. And. I. Hate. BABIES...",
  "Epstein didn't kill himself."
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
