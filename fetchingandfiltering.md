# Fetching Content
- We can use the javascript fetch() method for sending and receiving data between the frontend and backend
- fetch() supports many options, and using fetch() to simply retrieve (read) data has the simplest usage of fetch()
- We can define a function containing a fetch() request
- If we want to retrieve data with a button press, we can create a button in html that calls the function containing a fetch() request.

```html
<body>
    <button onclick="read()">Retrieve Data</button>
    <p id="confirmation"></p>
</body>
```

```javascript
function read() {
    document.getElementById("confirmation").innerText="Read function has been called";
}
```

<body>
    <button onclick="read()">Retrieve Data</button>
    <p id="confirmation"></p>
</body>

<script>
    function read() {
        document.getElementById("confirmation").innerText="Read function has been called";
    }
</script>

- Here is an example of using fetch to read and putting the data through a function

```javascript
fetch('http://localhost:8080')
  .then((response) => response.json())
  .then((data) => this.filterdata(data));

function filterdata(data) {
    console.log(data)
}
```