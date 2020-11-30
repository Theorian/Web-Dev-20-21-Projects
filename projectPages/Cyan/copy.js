/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let URLParam1 = url.searchParams.get("game");

//Extracts another one of the URL parameters out.
let URLParam2 = url.searchParams.get("movie");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("gameThatLike").innerHTML = URLParam1;
document.getElementById("movieThatILike").innerHTML = URLParam2;

//An array of quote.
let quotes = [
  "I HAVE THE POWER!!",
  "Dude, wheres my car?",
  "Do a flip!",
  "Are you silly? Still gonna send it!",
  "Wheres the paper towels!",
  "Bob saget!"
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
