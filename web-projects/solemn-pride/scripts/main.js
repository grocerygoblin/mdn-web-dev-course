const myImage = document.querySelector("img");

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "D:\code\mdn\mdn-web-dev-course\web-projects\solemn-pride\images\cross.png") {
        myImage.setAttribute("src", "D:\code\mdn\mdn-web-dev-course\web-projects\solemn-pride\images\heart.png");
    } else {
        myImage.setAttribute("src", "D:\code\mdn\mdn-web-dev-course\web-projects\solemn-pride\images\cross.png");
    }
};