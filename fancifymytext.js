var textbox = document.getElementById("textbox");
function makeBigger(){
    document.getElementById("textbox").style.fontSize = "48pt";
}

document.getElementById("fancy").addEventListener("change",function() {
    textbox.style.color = "blue";
    textbox.style.fontWeight="bold";
    textbox.style.textDecoration="underline";
    alert("Look at the style!");
})

document.getElementById("boring").addEventListener("change",function() {
    textbox.style.color="black";
    textbox.style.fontweight="lighter";
    textbox.style.textDecoration="none";
    alert("style is gone :(");
})

function makeMoo(){
    var input = document.getElementById("textbox").value;
    input = input.toUpperCase();
    var text1 = input.split(".");
    var text2 = text1.join("-Moo");
    document.getElementById("textbox").value = text2;
}

