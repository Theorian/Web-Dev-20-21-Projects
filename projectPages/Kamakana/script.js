/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
let rubixcube = url.searchParams.get("rubixcube");

//Extracts another one of the URL parameters out.
let rctrucksFromURL = url.searchParams.get("rctrucks");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("rubixcubeThatLike").innerHTML = rubixcube;
document.getElementById("rctrucksThatLike").innerHTML = rctrucksFromURL;

//An array of quote.
let quotes = [
  "Huh?",
  "You can sleep when you're dead!",
  "Aloha wau i ku'u 'ohana.",
  "Water, it is healthy, but Hawaiian Sun tastes way better!",
  "Eh, do your homework!!!",
  "Piece of advice...don't p!$$ off moms..scary"
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
