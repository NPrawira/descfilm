function other() {
    document.getElementById("genre").innerHTML = "Choose Genre...";
}
function comedy() {
    document.getElementById("genre").innerHTML = "Comedy";
}
function adventure() {
    document.getElementById("genre").innerHTML = "Adventure";
}
function action() {
    document.getElementById("genre").innerHTML = "Action";
}

function searchs() {
    var a = document.getElementById("search").value;
    var b;
    if(a == "") {
        b = "false";
    } else {
        b = "true";
        document.getElementById("comedy").style.display = "none";
        document.getElementById("adventure").style.display = "none";
        document.getElementById("action").style.display = "none"
        document.getElementById("sears").style.display = "unset";
    }
    localStorage.setItem("secion", b);
    localStorage.setItem("searchs", a);
}

function loads() {
    var b = localStorage.getItem("secion");
    if(b == "false") {
        document.getElementById("sears").style.display = "none";
        document.getElementById("comedy").style.display = "unset";
        document.getElementById("adventure").style.display = "unset";
        document.getElementById("action").style.display = "unset";
        
    }
    if(b == "true") {
        document.getElementById("comedy").style.display = "none";
        document.getElementById("adventure").style.display = "none";
        document.getElementById("action").style.display = "none"
        document.getElementById("sears").style.display = "unset";	
    }
}

function sends(a) {
    localStorage.setItem("secion", "false");
    localStorage.setItem("searchs", "");
    localStorage.setItem("id",a);
}