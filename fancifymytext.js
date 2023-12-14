const btn = document.getElementById("biggerButton");
const textArea = document.getElementById("inputAreaBox")
const mooBtn = document.getElementById("Moo");
function biggerText(){
    textArea.style.fontSize = "1.5em";
}

function alertFunction(){
    alert("Hello World");
}

function fancyText(){
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
    textArea.style.textDecorationColor = "black";   
}

function boringText(){
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooifyText(){
    let text = textArea.value;
    text = text.toUpperCase();
    let textParts = text.split(".");
    for(let i = 0; i<textParts.length; i++){        
        if(textParts[i] == ""){
            let k = i - 1;
            textParts[k] = textParts[k] + "-Moo";
        }
    }
    
    text = textParts.join(".");
    textArea.value = text;
}
btn.addEventListener("click", biggerText)
mooBtn.addEventListener("click", mooifyText);