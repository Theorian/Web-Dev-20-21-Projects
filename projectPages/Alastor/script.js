/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Gets the addressbar location.
//for example:
//https://fto3y.csb.app/projectPages/Alastor/index.html?username=bob
let url = new URL(window.location.href);

//Extracts one of the URL parameters out.
//for example:
// cheese=cheddar
let cheese = url.searchParams.get("bones");

//Extracts another one of the URL parameters out.
//for example:
//apple=gala
let appleFromURL = url.searchParams.get("teeth");

//Changes HTML inside of the following html elements with IDs of:
document.getElementById("bonesThatILike").innerHTML = cheese;
document.getElementById("teethThatILike").innerHTML = appleFromURL;

//An array of quote.
let quotes = [
  "heugh",
  "",
  "water, it is good",
  "Somemthing scout said.",
  "I totally forgot."
];

//Gets a random number for usage later to get a random quote.
let randomNumber = Math.floor(Math.random() * quotes.length);

//Selects a random quote from the quote array and updates the HTML element with the ID of "randomQuote"
document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
