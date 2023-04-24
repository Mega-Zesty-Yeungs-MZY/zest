var cq1 = document.querySelector(".cq1");
var cq2 = document.querySelector(".cq2");
var cq3 = document.querySelector(".cq3");

var q1 = document.querySelector("#q1");
var q2 = document.querySelector("#q2");
var q3 = document.querySelector("#q3");

var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");

// ! set-up event listeners

cq1.addEventListener("click", function () {
    if (ans1.style.display === "none") {
        ans1.style.display = "block";
        q1.style.display = "none";
    } else {
        ans1.style.display = "none";
        q1.style.display = "block";
    }
});

cq2.addEventListener("click", function () {
    if (ans2.style.display === "none") {
        ans2.style.display = "block";
        q2.style.display = "none";
    } else {
        ans2.style.display = "none";
        q2.style.display = "block";
    }
});

cq3.addEventListener("click", function () {
    if (ans3.style.display === "none") {
        ans3.style.display = "block";
        q3.style.display = "none";
    } else {
        ans3.style.display = "none";
        q3.style.display = "block";
    }
});




