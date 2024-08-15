window.onload = function() {
    var btn = document.getElementById("submit");
    btn.addEventListener("click", myFunction);

    var answer = ("2024-08-26")
    function myFunction() {
    var password = document.getElementById("test").value;
    if(password == answer){

        
        window.location.href = "yes.html";
        } else{
            window.location.href = "oops.html";
        }
    }
};