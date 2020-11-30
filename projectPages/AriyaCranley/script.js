/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let urlParameter1 = url.searchParams.get("cheese");

//Extracts another one of the URL parameters out.
let appleFromURL = url.searchParams.get("noodles");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("cheese").innerHTML = urlParameter1;
document.getElementById("noodles").innerHTML = appleFromURL;

//An array of quote.
let quotes = [
  "I have played piano for many years",
  "I want to learn how to play guitar",
  "I love eating food UwU",
  "My favorite video game is Fortnite",
  "I have a dog named Huali",
  "I am weird UwU."
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
