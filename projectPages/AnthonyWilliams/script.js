let url = new URL(window.location.href);

let cliffFromURL = url.searchParams.get("cliff");

document.getElementById("cubeDisplay").innerHTML = url.searchParams.get("cube");
document.getElementById("cliffThatLike").innerHTML = cliffFromURL;

// document.getElementById("faster").innerHTML = "Dasani";
// document.getElementById("imagePlaceHolder").innerHTML = "Dasani";
//

let quotes = [
  "Light Travels",
  "faster than sound",
  "This is why some people appear bright until you hear them speak"
];
Math.floor(Math.random() * quotes.length);

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];

let moreToggledOn = false;

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
