var textbox = document.getElementById("textbox");

function makeBigger(){
    textbox.style.fontSize="24pt";
}

document.getElementById("fancy").addEventListener("change",function() {
    textbox.style.color = "blue";
    textbox.style.fontWeight="bold";
    textbox.style.textDecoration="underline";
    alert("Look at the style!");
})

document.getElementById("boring").addEventListener("change",function() {
    textbox.style.color="black";
    textbox.style.fontweight="normal";
    textbox.style.textDecoration="none";
    alert("style is gone :(");
})

function makeMoo(){
    textbox.style.textTransform="uppercase";
    let text1 = textbox.value.split(".");
    let text2 = text1.join("-Moo");
    textbox.value = text2;
}

