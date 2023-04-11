import json from './1-1.json' assert {type: 'json'};



const random_count = Math.floor(Math.random() * (json.length-1));

const data = json[random_count];

const time = data.Time;
const subtitle = data.Subtitle;
const translation = data.Translation;


document.querySelector(".time").textContent = time;
document.querySelector(".subtitle").textContent = subtitle;
document.querySelector(".translation").textContent = translation;

document.getElementsByClassName("generate")[0].onclick = function () {
    location.reload()
  };

  document.getElementsByClassName("answer")[0].onclick = function () {
    document.getElementsByClassName("subtitle")[0].style.visibility = "visible";
  };

