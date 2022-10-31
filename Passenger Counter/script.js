let count = 0
let countEl = document.getElementById("count-el")

function increment() {
  count++
  countEl.innerText = count
}

function decrement() {
  count--
  countEl.innerText = count
}

function reset() {
    countEl.innerText = 0
}
