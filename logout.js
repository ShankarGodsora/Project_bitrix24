let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if( isAuth === "Authenticated"){
    let nav1s = document.querySelector("#logout");
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.innerText = "LOGOUT";
    button.style.border="none";
    button.style.marginTop="30px";
    button.style.cursor="pointer"
    button.style.backgroundColor="white"
    button.onclick = function (){
        localStorage.setItem("isAuth","Not Authenticated")
        alert("Logut successful!");
        window.location.reload()
        window.location.href="login.html"
    };
    div.append(button);
    nav1s.append(div);
}


// <-------------scrolling code ------------------->
window.onscroll = function() { myFunction() };

function myFunction() {
    var navbar = document.getElementById("navbar2");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.style.position = "fixed";
    } else {
        navbar.style.position = "sticky";
    }
}

function clicks(){
    window.location.href = 'login.html';
    
}