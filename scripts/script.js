let pickCategory = document.getElementById("pickCategory");

let gadgetBtn = document.getElementById("gadgetBtn");

let musicBtn = document.getElementById("musicBtn");

let gameBtn = document.getElementById("gameBtn");

gadgetBtn.addEventListener("click", function(){
    getGadget();
})
musicBtn.addEventListener("click", function(){
    getMusic();
})
gameBtn.addEventListener("click", function(){
    getGames();
})

async function getGadget(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
}

async function getMusic(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
}
async function getGames(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    pickCategory.innerText = apiResponse.results["0"].question;
}
