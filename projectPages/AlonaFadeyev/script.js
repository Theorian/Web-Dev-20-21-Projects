/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let url = new URL(window.location.href);
let blueraspberry = url.searchParams.get("sapphire");
let grape = url.searchParams.get("pastel");

document.getElementById("Sourcandy").innerHTML = blueraspberry;
document.getElementById("Greenapple").innerHTML = grape;

//

let quotes = [
  "Am a animal Lover.",
  "I have two pet lovebirds named Jewel & Mango.",
  "I'm an artist.",
  "My cat's name is Blizzard.",
  "Love reading books.",
  "I used to travel."
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
