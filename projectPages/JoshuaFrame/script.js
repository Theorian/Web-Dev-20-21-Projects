/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let cheese = url.searchParams.get("cheese");

//Extracts another one of the URL parameters out.
let appleFromURL = url.searchParams.get("apple");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

//An array of quote.
let quotes = [
  "At times, the solution to a maze is to reduce it to embers and walk straight through the ashes",
  "Life is a maze from which we never escape."
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
