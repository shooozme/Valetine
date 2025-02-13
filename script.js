
const noBtn = document.getElementById("noBtn");
const gifEl = document.getElementById("gif");

//array of messages for the noBtn
const noButtonMessages =    ["PLEASE", "BUT WHY", "I KNWO YOU WANT TO", "I'M BEGGING", "please please please", "guh", 
                             "chex mix will suffer for this", "catastrophe", "NO NO NO NO NO NO"];

//array of gifs
const gifArray = ["assets/images/car-garn47.gif","assets/images/orange-cat-gets-flung-and-explodes-orange-cat.gif",
                  "assets/images/spideyvivi.gif"];

//function to get a random int
function gimmeRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//listener for button press
noBtn.addEventListener("click", () => {
    noBtn.textContent = noButtonMessages[gimmeRandomInt(noButtonMessages.length)]
    gifEl.src = gifArray[gimmeRandomInt(gifArray.length)]
    }
);
