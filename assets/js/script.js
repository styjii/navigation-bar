var body = document.body;
var header = body.childNodes[1];
var nav = header.childNodes[7];
var navbar = nav.childNodes[1];
var navItem = navbar.childNodes; // li dans le dropdown
var navItemleft = navItem[5].childNodes[2].childNodes; // li dans le dropdown dans le dropdown 


// evenement de la navigation part 1 lors de la curser se deplace par là
var navbarDropleft1 = navItemleft[1].childNodes[2];
var navbarDropleft2 = navItemleft[3].childNodes[2];
var navbarDropleft3 = navItemleft[5].childNodes[2];


navItemleft[1].addEventListener("mouseover", dropleft1);
navItemleft[1].addEventListener("mouseout", resetleft1);
navItemleft[3].addEventListener("mouseover", dropleft2);
navItemleft[3].addEventListener("mouseout", resetleft2);
navItemleft[5].addEventListener("mouseover", dropleft3);
navItemleft[5].addEventListener("mouseout", resetleft3);

function dropleft1() {
  navbarDropleft1.style.display = "block";
}
function resetleft1() {
  navbarDropleft1.style.display = "";
}

function dropleft2() {
  navbarDropleft2.style.display = "block";
}
function resetleft2() {
  navbarDropleft2.style.display = "";
}

function dropleft3() {
  navbarDropleft3.style.display = "block";
}
function resetleft3() {
  navbarDropleft3.style.display = "";
}

// evenement de la navigation part 2 lors de la curser se deplace par là
var navbarDropdown1 = navItem[3].childNodes[2];
var navbarDropdown2 = navItem[5].childNodes[2];
var navbarDropdown3 = navItem[7].childNodes[2];

navItem[3].addEventListener("mouseover", dropdown1);
navItem[3].addEventListener("mouseout", reset1);
navItem[5].addEventListener("mouseover", dropdown2);
navItem[5].addEventListener("mouseout", reset2);
navItem[7].addEventListener("mouseover", dropdown3);
navItem[7].addEventListener("mouseout", reset3);

function dropdown1() {
  navbarDropdown1.style.display = "block";
}
function reset1() {
  navbarDropdown1.style.display = "";
}

function dropdown2() {
  navbarDropdown2.style.display = "block";
}
function reset2() {
  navbarDropdown2.style.display = "";
}

function dropdown3() {
  navbarDropdown3.style.display = "block";
}
function reset3() {
  navbarDropdown3.style.display = "";
}