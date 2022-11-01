let hScore = 0
let gScore = 0

let homeScore = document.getElementById("home--score")
homeScore.innerText = hScore

let guestScore = document.getElementById("guest--score")
guestScore.innerText = gScore

function add1Home() {
  hScore += 1
  homeScore.innerText = hScore
}

function add2Home() {
  hScore += 2
  homeScore.innerText = hScore
}

function add3Home() {
  hScore += 3
  homeScore.innerText = hScore
}

function add1Guest() {
  gScore += 1
  guestScore.innerText = gScore
}

function add2Guest() {
  gScore += 2
  guestScore.innerText = gScore
}

function add3Guest() {
  gScore += 3
  guestScore.innerText = gScore
}