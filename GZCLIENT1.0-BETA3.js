var webURL = window.location.origin + window.location.pathname;

var div = document.createElement("div");
div.style.textAlign = "center";
div.style.backgroundColor = "lightgrey";
div.style.width = "250px";
div.style.height = "275px";
div.style.borderRadius = "7px";
div.zIndex = 2147483647;
div.style.position =  "absolute";
document.body.appendChild(div);

var gzheader = document.createElement("h2");
gzheader.innerText = "gz client";
gzheader.style.fontFamily = "sans-serif";
gzheader.style.color = "black";
div.appendChild(gzheader);

var button = document.createElement("button");
button.textContent = "Get URL Path";
button.style.width = "175px";
button.style.height = "30px";
div.appendChild(button);

var button3 = document.createElement("button");
button3.textContent = "Eval";
button3.style.width = "175px";
button3.style.height = "30px";
button3.style.marginTop = "6px";
div.appendChild(button3);

var changelog = document.createElement("a");
changelog.href = "https://www.github.com";
div.appendChild(changelog);

var button2 = document.createElement("button");
button2.textContent = "View Changelog";
button2.style.width = "175px";
button2.style.height = "30px";
button2.style.marginTop = "6px";
changelog.appendChild(button2);



var version = document.createElement("p");
version.innerText = "v1.0-BETA 3";
div.appendChild(version);

//div.appendChild(button3);

button.addEventListener("click", function(){
    alert(webURL);
});

button3.addEventListener("click", function(){
  var evalCode = prompt("Enter JavaScript Code");
  eval(evalCode);
});













dragElement(div);




function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }