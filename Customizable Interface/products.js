//LAB 9-DATA STORAGE: PRODUCTS PAGE
window.onload = function () {       //Function to get name and color in products

    var username = localStorage.getItem("name");
    var newcolor = localStorage.getItem("incolor");
    var userout = document.getElementById("newMsgBox");
    var colour = document.getElementById("f_color");
    console.log(username, newcolor);
    userout.innerText = "Welcome! " + username;
    document.body.style.background = newcolor;
}