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
                    <h2 id="cq-h1">What languages for frontend dev?</h2>
                    <p id="cq-p1" class="cq-p1">Typically, frontend developers use HTML, SCSS, and JS to create a fully functional and interactable website. Some resources to learn how to use these can be found <a href="https://www.w3schools.com/html/">here.</a></p>
                </div>
                <div onclick="opencq2()" id="cq2" class="cq2">
                    <h2 id="cq-h2">What is responsive design?</h2>
                    <p id="cq-p2" class="cq-p2">Responsive design is the practice of designing websites that adapt to different screen sizes and devices. This is important because users are increasingly accessing the web on a variety of devices. Responsive design ensures that a website is accessible and usable on any device. More about this can be found 
                    <a href="https://www.w3schools.com/css/css_rwd_intro.asp">here</a>.</p>
                </div>
                <div onclick="opencq3()" id="cq3" class="cq3">
                    <h2 id="cq-h3">Difference between HTML, CSS, and JS?</h2>
                    <p id="cq-p3" class="cq-p3">HTML is a markup language used to structure content on the web, while CSS is used to style and layout that content. JavaScript is a scripting language used to create interactive and dynamic web content.</p>
                </div>
                <div onclick="opencq4()" id="cq4" class="cq4">
                    <h2 id="cq-h4">What are some popular frontend frameworks?</h2>
                    <p id="cq-p4" class="cq-p4">Some popular frontend frameworks include <a href="https://reactjs.org/">React</a>, <a href="https://angular.io/">Angular</a>, and <a href="https://vuejs.org/">Vue</a>. These frameworks provide tools and libraries for building complex and interactive user interfaces.</p>
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
        width: content-fit;
        margin: 25px 25px 25px 25px;
        padding: 25px;
        height: 400px;
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
    }

    p {
        display: none;
        font-size: 15px;
    }
</style>
</html>