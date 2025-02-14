//Generation des nombres 
let secreNombre= Math.floor(Math.random()*20) + 1
let score = 20
let highscore= 0
//Selection des elements 
let gai = document.querySelector("again")
let gues = document.querySelector(".guess")
let chec = document.querySelector(".check")
let messag= document.querySelector(".message")
let scorElement= document.querySelector(".score")
let highscoreElement= document.querySelector(".highscore")
let nombreDisplay = document.querySelector(".number")
let body = document.body

// Gestion des evènement pour le boutton Check
chec.addEventListener('click', () => {
    const guess = Number(gues.value)

    //Verification 

    if (!guess|| guess<1 || guess>20){
        messag.textContent='Nombre invalide'
        return;
    }
    //Comparaison avec le nombre secret 
    if(guess===secreNombre){
        messag.textContent= 'Bravo!'
        body.style.backgroundColor = '#60b347' 
        nombreDisplay = secreNombre

        //Mise à jour 

        if (score>highscore){
            highscore = score
            highscoreElement.textContent= highscore
        }
    } else{
        //Message trop haut et trop bas 
        messag.textContent = guess > secreNombre ? 'Trop haut ': 'Trop bas'
        //diminuer le score 
        if(score>1) {
            score--
            scorElement.textContent=score
        }else{
            messag.textContent='Perdu!'
            scorElement.textContent=0
        }
    }
})
//Gestion pour le bouton again 
