let homepoint = document.getElementById("home-pt")
let homecount = 0
let guestpoint = document.getElementById("guest-pt")
let guestcount = 0

function addonepoint() {
    homecount += 1
    homepoint.innerText = homecount
}

function addtwopoint() {

    homecount += 2
    homepoint.innerText = homecount
}
function addthreepoint() {

    homecount += 3
    homepoint.innerText = homecount
}

function guestaddonepoint() {

    guestcount += 1
    guestpoint.innerText = guestcount
}

function guestaddtwopoint() {

    guestcount += 2
    guestpoint.innerText = guestcount
}
function guestaddthreepoint() {

    guestcount += 3
    guestpoint.innerText = guestcount
}
