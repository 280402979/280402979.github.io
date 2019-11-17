window.onload = function(){
    var parent = document.getElementsByClassName("wrap")[0];
    var child = document.getElementById("form-wrap");
    child.onmouseover = function(){
        child.style.height = "600px";
        parent.style.height = "900px";
    };
    child.onmouseout = function(){
        child.style.height = "500px";
        parent.style.height = "730px";
    };
};