function home() {
    document.getElementById("homes").style.color = " rgb(183, 93, 59)";
    document.getElementById("plans").style.color = " white";
    document.getElementById("blogs").style.color = " white";
    document.getElementById("contacts").style.color = " white";
    document.getElementById("programs").style.color = " white";
}

function plan() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = " rgb(183, 93, 59)";
    document.getElementById("blogs").style.color = " white";
    document.getElementById("contacts").style.color = " white";
    document.getElementById("programs").style.color = " white";
}

function blog() {
    document.getElementById("homes").style.color = " white";
    document.getElementById("plans").style.color = " white";
    document.getElementById("blogs").style.color = " rgb(183, 93, 59)";
    document.getElementById("contacts").style.color = " white";
    document.getElementById("programs").style.color = " white";
}

function program() {
    document.getElementById("homes").style.color = " white";
    document.getElementById("plans").style.color = " white";
    document.getElementById("blogs").style.color = " white";
    document.getElementById("contacts").style.color = " white";
    document.getElementById("programs").style.color = " rgb(183, 93, 59)";
}

function contact() {
    document.getElementById("homes").style.color = " white";
    document.getElementById("plans").style.color = " white";
    document.getElementById("blogs").style.color = " white";
    document.getElementById("contacts").style.color = "rgb(183, 93, 59)";
    document.getElementById("programs").style.color = " white";
}

function submit() {
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if (name.value == "") {
        alert("Please Enter Name")
    } else if (number.value == "") {
        alert("Please Eneter Number")
    } else {
        alert("Thanks For Join to GetFit's : " + name.value)
    }




}