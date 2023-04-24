<html lang="en">
<head>
    <style>
    #info1 {display: none;}
    #info2 {display: none;}
    #info3 {display: none;}
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn GitHub pages!</title>
</head>
<body>
    <div class="wrapper">
        <div class="introWrap">
            <h2 style="background-color:rgb(0, 100, 200);"><center>GitHub pages!</center></h2>
            <p><center><span id="start1"></span><span id="info1">
            <h3 style="background-color:rgb(150, 150, 150);"><center>What is Github pages?</center></h3>
            <p>
            <center>Github pages is a hosting service website that hosts files created from the given github repository. Github pages can be used by people like you and me to share and present their work for others to see. The websites created consists of files in the programming languages HTML, CSS, and JavaScript. Notice anything about those types of files? Those are the type of files that are used to build our code's frontend. This makes the purpose of Github pages to display and hold a users projects and for them to have access to their own website.</center></p>
            <center><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/github-pages-examples/github-pages-examples.png" alt="githubpageslogo" width="230" height="230"></center>
            <p>
            </p>
            <h3 style="background-color:rgb(150, 150, 150);"><center>How to set up Github pages!</center></h3>
            <p>
            <center>Github pages were designed to be simple so that it could be used by all so this is a quick and easy setup. You start by creating a new repository under your github account. You will then go into the setting's Pages/Build and Deployment/Source and change it to Deploy from a branch. You will them change Pages/Build and Deployment/Branch so that it selected to a publishing source. For a better step by step on how to do this, visit <a href="https://docs.github.com/en/pages/quickstart">this Github Doc</a>.</center></p>
            <center><img src="images/gitpagesetupex.png" alt="Github_Pages_setup_ex"></center>
            <p>
            </p>
            </span><button onclick="githubFunction()" id="btn1">Read about Github Pages!</button>
            <p>
            </p>
            <h2 style="background-color:rgb(255, 255, 255);"><center>Fastpages!</center></h2>
            <p><center><span id="start2"></span><span id="info2">
            <h3 style="background-color:rgb(150, 150, 150);"><center>What is fastpages?</center></h3>
            <p>
            <center>Fastpages is a blogging site that is designed to be easy to use in order to create blog posts. A fastpage is reliant on Github pages to host it as well as the Github actions to assist in the creation of the blog and its future changes. Fastpages is an easy to use blogging site but why do we use it for our blog posts? We use Fastpages because it contains Jupyter Notebooks. Fastpages with the help of Github Actions can convert a Jupyter Notebook under the files <code>/_notebook</code>, <code>/_posts</code>, and even <code>/_word</code> into a blog post. This automatically happens through the use of <a href="http://nbdev.fast.ai/index.html">nbdev</a>. This is why fastpages are easy to use for blogging and why the addition of Jupyter Notebooks is important.</center></p>
            <center><img src="https://olearydj.github.io/antisimplistic/images/diagram.png" alt="fastpages" width="600" height="345"></center>
            <p>
            </p>
            <h3 style="background-color:rgb(150, 150, 150);"><center>More about Jupyter Notebooks?</center></h3>
            <p>
            <dd>Jupyter Notebooks has the following features that can be useful when writing a blog.</dd></p>
            <dd>
                <ul>
                    <li>Hiding or showing code outputs</li>
                    <center><img src="images/hideandshowcodeoutput_Clipchamp_AdobeExpress.gif" alt="hideshowcodeoutput" width="600" height="340"></center>
                    <li>Collapsable code cells</li>
                    <center><img src="images/showingcollapsablecodecell_Clipchamp_AdobeExpress.gif" alt="collapsablecells" width="600" height="340"></center>
                </ul>
            </dd>
            <p>
            </p>
            </span><button onclick="fastpageFunction()" id="btn2">Read about Fastpages!</button>
            <p>
            </p>
            <h2 style="background-color:rgb(80, 195, 50);"><center>Conda Script!</center></h2>
            <p><center><span id="start3"></span><span id="info3">
            <h3 style="background-color:rgb(150, 150, 150);"><center>What is Conda Script?</center></h3>
            <p>
            <center>Info about conda script.</center></p>
            <center><img src="https://elpythonista.com/wp-content/uploads/2020/10/Anaconda-entrada-hd-768x432.jpg" alt="conda script" width="600" height="345"></center>
            <p>
            </p>
            </span><button onclick="anacondaFunction()" id="btn3">Read about Conda Script!</button>

<script>
function githubFunction() {
  var start1 = document.getElementById("start1");
  var info1 = document.getElementById("info1");
  var btn1 = document.getElementById("btn1");

  if (start1.style.display === "none") {
    start1.style.display = "inline";
    btn1.innerHTML = "Read about Github Pages!"; 
    info1.style.display = "none";
  } else {
    start1.style.display = "none";
    btn1.innerHTML = "Close Section Above"; 
    info1.style.display = "inline";
  }
}

function fastpageFunction() {
  var start2 = document.getElementById("start2");
  var info2 = document.getElementById("info2");
  var btn2 = document.getElementById("btn2");

  if (start2.style.display === "none") {
    start2.style.display = "inline";
    btn2.innerHTML = "Read about Fastpages!"; 
    info2.style.display = "none";
  } else {
    start2.style.display = "none";
    btn2.innerHTML = "Close Section Above"; 
    info2.style.display = "inline";
  }
}

function anacondaFunction() {
  var start3 = document.getElementById("start3");
  var info3 = document.getElementById("info3");
  var btn3 = document.getElementById("btn3");

  if (start3.style.display === "none") {
    start3.style.display = "inline";
    btn3.innerHTML = "Read about Conda Script!"; 
    info3.style.display = "none";
  } else {
    start3.style.display = "none";
    btn3.innerHTML = "Close Section Above"; 
    info3.style.display = "inline";
  }
}
</script>
