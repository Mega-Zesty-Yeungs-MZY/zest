<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pull requests</title>
</head>
<body>
    <div class="pull-wrap">
        <div class="pull-header">
            <h1>Intro to pull requests</h1>
        </div>
        <div class="pull-content">
            <!--  -->
            <div class="dropdown-questions">
                <div onclick="opencq1()" id="cq1" class="cq1">
                    <h2 id="cq-h1">What are pull requests?</h2>
                    <p id="cq-p1" class="cq-p1">Pull requests are a developer requesting the project to pull changes that you made to the repository fork.</p>
                </div>
                <div onclick="opencq2()" id="cq2" class="cq2">
                    <h2 id="cq-h2">What is the difference between 'pull' and 'push' requests?</h2>
                    <p id="cq-p2" class="cq-p2">Pull requests are a 'request' for someone to pull your local changes. Push 'request' is a command. It tells github to upload your changes.</p>
                </div>
                <div onclick="opencq3()" id="cq3" class="cq3">
                    <h2 id="cq-h3">Why do we use pull requests?</h2>
                    <p id="cq-p3" class="cq-p3">Pull requests help ensure that your code is reviewed before being pushed to the main codebase. This can help avoid bugs and other issues.</p>
                </div>
            </div>
        </div>
            <!--  -->
    </div>
</body>
<script>
    <!-- ! body -->
    cqp1 = document.getElementById("cq-p1");
    cqp2 = document.getElementById("cq-p2");
    cqp3 = document.getElementById("cq-p3");
    cqp4 = document.getElementById("cq-p4");
    <!-- ! header -->
    cqh1 = document.getElementById("cq-p1");
    cqh2 = document.getElementById("cq-p2");
    cqh3 = document.getElementById("cq-p3");
    cqh4 = document.getElementById("cq-p4");
<!--  -->
    function opencq1() {
        cqh1.style.display = "none";
        cqp1.style.display = "flex";
    }
    function opencq2() {
        cqh2.style.display = "none";
        cqp2.style.display = "flex";
    }
    function opencq3() {
        cqh3.style.display = "none";
        cqp3.style.display = "flex";
    }
    function opencq4() {
        cqh4.style.display = "none";
        cqp4.style.display = "flex";
    }
</script>

<style>
    .cq1, .cq2, .cq3, .cq4 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(content-fit/2);
        margin: 25px 25px 25px 25px;
        padding: 25px;
        height: 100px;
        background-color: #f1f1f1;
        color: black;
        flex-direction: column;
        font-size: 20px;
    }
    .cq1:hover, .cq2:hover, .cq3:hover, .cq4:hover {
        background-color: #ddd;
        cursor: pointer;
    }
    
    h2 {
        display: flex;
        font-size: 20px;
    }

    p {
        display: none;
        font-size: 15px;
    }
</style>
</html>