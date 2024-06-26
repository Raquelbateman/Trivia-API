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
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=13&category=32&type=multiple").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
    answerPlace.innerText = "Your Answer:  " + apiResponse.results["0"].correct_answer;
};

async function getMusic(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=13&category=12&type=multiple").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
    answerPlace.innerText = "Your Answer:  " + apiResponse.results["0"].correct_answer;
};
async function getGames(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=13&category=15&type=multiple").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
    answerPlace.innerText = "Your Answer:  " + apiResponse.results["0"].correct_answer;
};
