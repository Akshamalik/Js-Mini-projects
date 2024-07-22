//we can access every function here no matter where they are initialized

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl=document.querySelector("#sum-el") choose the css selector
let player={
     name:"per",
     chips:145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" +player.chips
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i] +" "
    }
    sumEl.textContent="Sum:"+sum
    isAlive = true
    if (sum <= 20) {
        message = "Do you want to draw a new card"

    }
    else if (sum === 21) {
        message == "You have got BlackJack"
        hasBlackJack = true
    }
    else {
        message = "Sorry YOu're out"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{   if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame();
}
}

