// |> Home Section

// TODO: Init (HOME)
let homeNum = 0;
let homeNumEl = document.getElementById ('homeNumEl');

// TODO: Button Functions (HOME)
function plusOneHome () {
  homeNum += 1;
  homeNumEl.textContent = homeNum;
}

function plusTwoHome () {
  homeNum += 2;
  homeNumEl.textContent = homeNum;
}

function plusThreeHome () {
  homeNum += 3;
  homeNumEl.textContent = homeNum;
}

// |> GUEST SECTION

// TODO :  Init (Guest)
let guestNum = 0;
let guestNumEl = document.getElementById ('guestNumEl');

// TODO: Button Functions (GUEST)
function plusOneGuest () {
  guestNum += 1;
  guestNumEl.textContent = guestNum;
}

function plusTwoGuest () {
  guestNum += 2;
  guestNumEl.textContent = guestNum;
}

function plusThreeGuest () {
  guestNum += 3;
  guestNumEl.textContent = guestNum;
}

// TODO : BONUS RESET BUTTON
function resetBtn () {
  guestNum = 0;
  guestNumEl.textContent = guestNum;
  homeNum = 0;
  homeNumEl.textContent = homeNum;
}
