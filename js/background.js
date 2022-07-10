const images = 
["https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/0.jpeg", 
"https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/1.jpeg", 
"https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/2.jpeg"]

const chosenImage = images [Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src= `${chosenImage}`

document.body.appendChild(bgImage);