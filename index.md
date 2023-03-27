<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to MZY tutorials!</title>
</head>
<body>
    <div class="wrapper">
        <div class="githubpages">
            <h2>Want to learn github pages?</h2>
            <p>Click below to keep learn!</p>
            <a href="https://mega-zesty-yeungs-mzy.github.io/githubpages" class="button">Track</a>
        </div>
    </div>
</body>
</html>

<style>
body {
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 50px;
    text-align: center;
    margin: 40px 0;
}

p {
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
    color: white;
}

.wrapper {
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    transition: all 0.8s ease;
}

.button {
    display: inline-block;
    padding: 20px 30px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: #079181;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #ccc;
    transition: all 0.3s ease;
    text-decoration: none;
}

.button:hover {
    background-color: #066f63;
    box-shadow: 0px 0px 5px #ccc;
}

.githubpages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 90vh;
    margin-bottom: 40px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
    background-color: rgb(22, 22, 41);
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);
    font-size: 24px;
}

</style>