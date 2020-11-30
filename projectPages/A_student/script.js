/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let URLParameter1 = url.searchParams.get("cheese");

//Extracts another one of the URL parameters out.
let URLParameter2 = url.searchParams.get("apple");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("cheeseThatLike").innerHTML = URLParameter1;
document.getElementById("appleThatLike").innerHTML = URLParameter2;

//An array of quote.
let quotes = [
  "hax?",
  "get out of my swamp",
  "I like cheeses",
  "water, it is good",
  "Somemthing scout said.",
  "I totally forgot."
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
