//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let urlParameter1 = url.searchParams.get("rock");

//Extracts another one of the URL parameters out.
let urlParameter2 = url.searchParams.get("metal");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("rock").innerHTML = urlParameter1;
document.getElementById("metal").innerHTML = urlParameter2;

//An array of quote.
let quotes = ["Go to sleep", "I'm late!!", "I want Fries", "GIB FUT GUMMIE"];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
