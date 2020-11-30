/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let url = new URL(window.location.href);
let cheese = url.searchParams.get("cheese");
let appleFromURL = url.searchParams.get("apple");

document.getElementById("cheeseThatLike").innerHTML = cheese;
document.getElementById("appleThatLike").innerHTML = appleFromURL;

document.getElementById("water").innerHTML = "Dasani";
document.getElementById("imagePlaceHolder").innerHTML = "Dasani";
//

let quotes = [
  "hax?",
  "get out of my swamp",
  "I like cheeses",
  "water, it is good",
  "Somemthing scout said.",
  "I totally forgot."
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];

moreToggledOn = false;

function toggleMore() {
  if (!moreToggledOn) {
    moreToggledOn = true;
    document.getElementById("moreinfo").style.display = "block";
    document.getElementById("moreToggle").innerHTML = "Hide More info!";
  } else {
    moreToggledOn = false;
    document.getElementById("moreinfo").style.display = "none";
    document.getElementById("moreToggle").innerHTML = "More info...";
  }
}
