const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cross.png") {
        myImage.setAttribute("src", "images/heart.png");
    } else {
        myImage.setAttribute("src", "images/cross.png");
    }
}; //toggles images of cross and sacred heart back and forth on click

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button"); 

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `God loves you, ${myName}`;
} //set username prompt

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `God loves you, ${storedName}`;
} //checks if username is stored, if so, displays stored name. if not, runs username prompt

myButton.onclick = () => {
    setUserName();
}; //runs setUserName on button click