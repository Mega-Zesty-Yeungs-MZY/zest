
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to MZY tutorials!</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="tutorialBtn" id="tutorialBtn">Click to find tutorials on big idea 1</div> 
    <div class="tutorialWrapper" id="tutorialWrapper">
        <!-- ! the wrapper have prefix of the website page they represent. -->
        <!-- ! For example: bmath represents binary math tutorial page -->
        <div class="gpWrapper">
            <div class="githubpages">
                <h2>Want to learn github pages?</h2>
                <p>Click below to learn!</p>
                <a href="{{ site.baseurl }}/githubpages" class="button">Learn</a>
            </div>
        </div>
        <div class="pullreqWrapper">
            <div class="pr">
                <h2>Want to learn about pull requests?</h2>
                <p>Click below to learn!</p>
                <a href="{{ site.baseurl }}/pullreq" class="button">Learn</a>
            </div>
        </div>
        <div class="bmathWrapper">
            <div class="bmath">
                <h2>Want to learn about binary math?</h2>
                <p>Click below to learn!</p>
                <a href="{{ site.baseurl }}/binarymath" class="button">Learn</a>
            </div>
        </div>
        <div class="blogicWrapper">
            <div class="blogic">
                <h2>Want to learn binary logic?</h2>
                <p>Click below to learn!</p>
                <a href="{{ site.baseurl }}/binarylogic" class="button">Learn</a>
            </div>
        </div>
        <div class="lgateWrapper">
            <div class="lgate">
                <h2>Want to learn about logic gates?</h2>
                <p>Click below to learn!</p>
                <a href="{{ site.baseurl }}/LogicGates" class="button">Learn</a>
            </div>
        </div>
        <div class="fetchWrapper">
            <div class="fetch">
                <h2>Want to learn fetching and filtering?</h2>
                <p>Click below to learn!</p>
                <a href="{{ site.baseurl }}/fetchingandfiltering" class="button">Learn</a>
            </div>
        </div>
    </div>
</body>
<script src="index.js"></script>
</html>

