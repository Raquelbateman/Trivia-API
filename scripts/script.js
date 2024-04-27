let pickCategory = document.getElementById("pickCategory");

let answerPlace = document.getElementById("answerPlace");



let cartoonBtn = document.getElementById("cartoonBtn");

let musicBtn = document.getElementById("musicBtn");

let gameBtn = document.getElementById("gameBtn");


//event listeners for buttons - it makes them work

cartoonBtn.addEventListener("click", () => {
    getCartoon();
  });

  musicBtn.addEventListener("click", () => {
    getMusic();
  });

  gameBtn.addEventListener("click", () => {
    getGames();
  });


// calling the api from the opentdb database to get our data

async function getCartoon(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
    answerPlace.innerText = "Your Answer:  " + apiResponse.results["0"].correct_answer;
};

async function getMusic(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    answerPlace.innerText = "Your Answer:  " + apiResponse.results["0"].correct_answer;
};
async function getGames(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=13&category=15&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    answerPlace.innerText = "Your Answer:  " + apiResponse.results["0"].correct_answer;
};
