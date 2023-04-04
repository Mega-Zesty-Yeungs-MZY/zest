<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro to frontend</title>
</head>
<body>
    <div class="front-wrap">
        <div class="front-header">
            <h1>Intro to frontend</h1>
        </div>
        <div class="front-content">
            <!--  -->
            <div class="dropdown-questions">
                <div onclick="opencq1()" id="cq1" class="cq1">
                    <h2 id="cq-h1">ex1</h2>
                    <p>Frontend is the part of the website that th</p>
                </div>
                <div onclick="opencq2()" id="cq2" class="cq2">
                    <h2 id="cq-h2">What is frontend?</h2>
                    <p>Frontend is the part of the website that th</p>
                </div>
                <div onclick="opencq3()" id="cq3" class="cq3">
                    <h2 id="cq-h3">What is frontend?</h2>
                    <p>Frontend is the part of the website that th</p>
                </div>
                <div onclick="opencq4()" id="cq4" class="cq4">
                    <h2 id="cq-h4">What is frontend?</h2>
                    <p>Frontend is the part of the website that th</p>
                </div>
            </div>
        </div>
            <!--  -->
    </div>
</body>
<script>
    cqh1 = document.getElementById("cq-h2");
    cqh2 = document.getElementById("cq-h2");
    cqh3 = document.getElementById("cq-h3");
    cqh4 = document.getElementById("cq-h4");
<!--  -->
    function opencq1() {
        cqh1.style.display = "flex";
    }
    function opencq2() {
        cqh2.style.display = "flex";
    }
    function opencq3() {
        cqh3.style.display = "flex";
    }
    function opencq4() {
        cqh4.style.display = "flex";
    }
</script>

<style>
    .cq1, .cq2, .cq3, .cq4 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1000px;
        height: 400px;
        background-color: #f1f1f1;
        color: black;
        flex-direction: column;
    }
    .cq1:hover, .cq2:hover, .cq3:hover, .cq4:hover {
        background-color: #ddd;
        cursor: pointer;
    }
    
    h2 {
        display: none;
    }
</style>
</html>