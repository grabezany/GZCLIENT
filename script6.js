var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "500px";
div.style.textAlign = "center";
div.style.backgroundColor = "lightgrey";
div.style.borderRadius = "4px";
document.body.appendChild(div);

var div2 = document.createElement("");

var header = document.createElement("h3");
header.innerText = "gz client";
div.appendChild(header);

var button = document.createElement("button");
button.textContent = "This is a button";
div.appendChild(button);