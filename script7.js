var webURL = window.location.pathname;

var minimize = document.createElement("button");
minimize.textContent = "-";
document.body.appendChild(minimize);
minimize.zIndex = 9999;
var display = false;

var div = document.createElement("div");
div.style.textAlign = "center";
div.style.backgroundColor = "lightgrey";
div.style.width = "250px";
div.style.height = "275px";
div.style.marginTop = "-15px";
div.style.borderRadius = "7px";
div.zIndex = 9999;
document.body.appendChild(div);

var header = document.createElement("h2");
header.innerText = "gz client";
header.style.fontFamily = "sans-serif";
header.style.zIndex = 9998;
div.appendChild(header);

var button = document.createElement("button");
button.textContent = "Button1";
button.style.width = "175px";
button.style.height = "30px";
div.appendChild(button);

var button2 = document.createElement("button");
button2.textContent = "Button2";
button2.style.width = "175px";
button2.style.height = "30px";
button2.style.marginTop = "6px";
div.appendChild(button2);




button.addEventListener("click", function(){
    alert(webURL);
});

minimize.addEventListener("click", function(){
    display = !display;

    if (display){
        div.style.display = "none";
        minimize.textContent = "+";
    } else {
        div.style.display = "block";
        minimize.textContent = "-";
    }

    
});