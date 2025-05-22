document.getElementById("add").addEventListener("click", () => {
    let a = document.getElementById("get1").value;
    let b = document.getElementById("get2").value;

    let total = parseInt(a)  + parseInt(b);
    document.getElementById("display").innerHTML = total;

});

function multi(){
    let a = document.getElementById("get1").value;
    let b = document.getElementById("get2").value;

    let total = parseInt(a) * parseInt(b);
    document.getElementById("display").innerHTML = total;
}