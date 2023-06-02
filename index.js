
homeScore = document.getElementById("homeScore")
guestScore = document.getElementById("guestScore")
let homeScoreCount =0
let guestScoreCount = 0

function homePlusOne() {
    homeScoreCount += 1
    homeScore.innerText = homeScoreCount
   
}

function homePlusTwo() {
    homeScoreCount += 2
    homeScore.innerText = homeScoreCount
    
}

function homePlusThree() {
    homeScoreCount += 3
    homeScore.innerText = homeScoreCount
    
}

function guestPlusOne() {
    guestScoreCount +=1
    guestScore.textContent = guestScoreCount
    
}
function guestPlusTwo() {
    guestScoreCount +=2
    guestScore.textContent = guestScoreCount
}
function guestPlusThree() {
    guestScoreCount +=3
    guestScore.textContent = guestScoreCount
}

function homeReset() {
    homeScoreCount = 0
    homeScore.textContent = 0
}

function guestReset() {
    guestScoreCount = 0
    guestScore.textContent = 0
}
