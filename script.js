let myjson;

fetch('./1-1.json') 
.then((response) => response.json()) 
.then((json) => {

    myjson = json;
    
    generate(myjson);

})



function generate(json) {

  document.getElementsByClassName("subtitle")[0].style.visibility = "hidden";

  let random_count = Math.floor(Math.random() * (json.length-1));

  let data = json[random_count];

  let time = data.Time;
  let subtitle = data.Subtitle;
  let translation = data.Translation;


  document.querySelector(".time").textContent = time;
  document.querySelector(".subtitle").textContent = subtitle;
  document.querySelector(".translation").textContent = translation;

}


document.getElementsByClassName("generate")[0].onclick = function () {
    generate(myjson);
  };

document.getElementsByClassName("answer")[0].onclick = function () {
    document.getElementsByClassName("subtitle")[0].style.visibility = "visible";
  };

