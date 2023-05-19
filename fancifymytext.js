var textbox = document.getElementById("textbox");

function makeBigger(){
    textbox.style.fontSize="2em";
    textbox.style.overflow = "hidden";
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
    var input = document.getElementById("textbox").value;
    input = input.toUpperCase();
    var text1 = input.split(".");
    var text2 = text1.join("_Moo");
    document.getElementById("textbox").value = text2;
}

