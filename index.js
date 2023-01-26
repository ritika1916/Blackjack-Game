let card=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl = document.querySelector(".sum-el")
//let sumEl = document.querySelector("#sum-el")

function startGame() {
   isAlive = true
   hasBlackJack=false
   let firstCard = getrandomcard()
   let secondCard = getrandomcard()
   card=[firstCard,secondCard]
   sum = firstCard + secondCard
   rendergame()
}
function rendergame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    
    
  
   messageEl.textContent=message  
   sumEl.textContent="Sum: " +sum
   cardsEl.textContent="Cards"
   for(let i=0;i<card.length;i++){
   cardsEl.textContent+=" "+card[i];
   }
 
}

function newcard(){
    if(isAlive&&!hasBlackJack){
    let newcard = getrandomcard()
    card.push(newcard)
    sum += newcard
  
    rendergame()
    }
 
}
function getrandomcard(){
  let randomval= Math.floor(13*Math.random())+1
  if(randomval===1)
  return 11;
  else if(randomval>10)
  return 10
  else  return randomval
  }
  let player={
      name:"Ritika",
      chips:"100"
  }
  let playerEl=document.getElementById("player-el")
  playerEl.textContent=player.name+":₹"+player.chips
 













