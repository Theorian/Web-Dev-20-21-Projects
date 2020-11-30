let backgroundImage = [
  "https://media3.giphy.com/media/hRwtOlZ1SBdpHV6QRZ/giphy.gif",
  "https://media4.giphy.com/media/1L5YuA6wpKkNO/giphy.gif?cid=ecf05e47e27pc5629x8q6el5w1a1796245wimrsffq3qhjep&rid=giphy.gif",
  "https://media4.giphy.com/media/lgcUUCXgC8mEo/giphy.gif?cid=ecf05e472wnmabcjpdhown64q16h6psnhrtdovo7drzvzaol&rid=giphy.gif",
  "https://media1.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif?cid=ecf05e47gatadqheydo23zyp78i8bef44yukk86oamoxscli&rid=giphy.gif",
  "https://media1.giphy.com/media/4Lr1TnWWfPwqs/giphy.gif",
  "https://media1.giphy.com/media/OngAe4RMc0d3i/giphy.gif?cid=ecf05e475lxny1xvoq8gjfkcu4yya77y9g4uskmj45jmz0ga&rid=giphy.gif",
  "https://media1.giphy.com/media/vVWUEFDUVItxu/giphy.gif?cid=ecf05e47m0pp6l4c9e28g5lqggf9avsy40qzkp7lh52mxbnx&rid=giphy.gif",
  "https://media0.giphy.com/media/2jKdye2KWy3XiDUq2E/giphy.gif?cid=ecf05e47fuh489g9pxax0mlsjjscmhya65zjha35eba3oko4&rid=giphy.gif"
];

changeBackgroundImage();

var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  changeBackgroundImage();
});

function changeBackgroundImage() {
  let randomNumber = Math.floor(Math.random() * backgroundImage.length);

  document.body.style.backgroundImage =
    "url('" + backgroundImage[randomNumber] + "')";
}
