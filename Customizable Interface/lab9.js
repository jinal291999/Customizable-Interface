//LAB 9-DATA STORAGE: INDEX PAGE
// alert("home");//DELETE AFTER CONFIRMING CONNECTION
window.onload = function () {

    var username = localStorage.getItem("name");  //get name
    var newcolor = localStorage.getItem("incolor");
    var userout = document.getElementById("newMsgBox");  
    var colour = document.getElementById("f_color");
    // console.log(username, newcolor);    
    userout.innerText = "Welcome! " + username;
    document.body.style.background = newcolor;
    var formhandle = document.forms.infoForm;   
    function processform() {                      //Function to handle form on submit
        var fname = formhandle.f_name;
        if (fname.value != "") {
            localStorage.setItem("name", fname.value);
        }
        var ncolour = formhandle.f_color;
        if (ncolour.value != "") {
            localStorage.setItem("incolor", ncolour.value);
        }
    }
    var btnDel = document.getElementById("btnDel");   
    function removedata() {                   // Function to delete the localstorage
        localStorage.clear();
        location.reload();
    }
    formhandle.onsubmit = processform;
    btnDel.onclick = removedata;

}
