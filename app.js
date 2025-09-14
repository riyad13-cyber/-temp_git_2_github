const mainDiv = document.querySelector("div");
mainDiv.style = "width : 300px; height : 400px; background-color: yellow; text-align: center; border: 1px solid black; border-radius: 5px; margin: 0px auto"

const secDiv = document.getElementById("div2");
secDiv.style = "width : 300px; height : 400px; background-color: blue; text-align: center; border: 1px solid black; border-radius: 5px; margin: 0px auto"

const newHeader = document.querySelector(".header_testing");
newHeader.style.textDecoration = "underline";

const listStyleType = document.querySelector("ul");
listStyleType.style.listStyleType = "none";

const listStyle = document.querySelectorAll("a");
for(let link of listStyle){
    link.style.fontSize = "30px"
} // cause .querySelectorAll() always retrun an array like nodelist which is not basically array,hence a loop must run
// to happen this pperation..

