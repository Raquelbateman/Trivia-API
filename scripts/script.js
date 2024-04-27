let gadgetBtn = document.getElementById("gadgetBtn").addEventListener("click", function(){
    getGk();
});

let musicBtn = document.getElementById("musicBtn").addEventListener("click", function(){
    getHistory();
});
let gameBtn = document.getElementById("gameBtn").addEventListener("click", function(){
    getGame();
});

async function getGadget(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    bodyBack.classList = "bg1";
}

async function getMusic(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    bodyBack.classList = "bg2";
}
async function getGames(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=boolean").then((Response) => Response.json());
    console.log(apiResponse);
    displayArea.innerText = apiResponse.results["0"].question;
    bodyBack.classList = "bg3";
}
