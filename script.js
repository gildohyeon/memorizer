let myjson;

let episode = 'ALL';

let counter = 0;

function read(i) {

    let path = './1-'+episode+'.json';

    fetch(path) 
    .then((response) => response.json()) 
    .then((json) => {
  
        myjson = json;
        
        generate(myjson);
  
    })


}

read(episode);


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

  document.getElementsByClassName("text")[0].value = "";

}



document.getElementsByClassName("generate")[0].onclick = function () {
    generate(myjson);
  };

document.getElementsByClassName("answer")[0].onclick = function () {
    document.getElementsByClassName("subtitle")[0].style.visibility = "visible";
    counter++;
    document.querySelector(".counter").textContent = counter;
  };

document.getElementsByClassName("select")[0].onchange = function () {
  episode = document.getElementsByClassName("select")[0].value;
  read(episode);
};

document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
    if (document.getElementsByClassName("subtitle")[0].style.visibility != "visible") {
      document.getElementsByClassName("subtitle")[0].style.visibility = "visible";
      counter++;
      document.querySelector(".counter").textContent = counter;
    }
    else {
      generate(myjson);
    }
  }
});