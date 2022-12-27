const myImage = document.querySelector("img");

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "web-projects\solemn-pride\images\cross.png") {
        myImage.setAttribute("src", "web-projects\solemn-pride\images\heart.png");
    } else {
        myImage.setAttribute("src", "web-projects\solemn-pride\images\cross.png");
    }
};