<head>
    <link rel="stylesheet" href="fetchingandfiltering.css">
</head>

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
# Filtering Content
- Let's say that the JSON below is the data that we fetch from the backend
```json
[{"id": 1, "letter": "a"}, {"id": 2, "letter": "b"}, {"id": 3, "letter": "c"}, {"id": 4, "letter": ""}]
```

- and we'll filter out empty values with a button press



```javascript
function filter() {
        console.log("filtering")
        for (const row of data) {
            if (row["letter"] == "") {
                data.splice(data.indexOf(row), 1)
            }
        }
        document.getElementById("filteredData").innerText = "Filtered Data: " + JSON.stringify(data);
    }
```
```html
<body>
    <button onclick="filter()">Filter Data</button>
    <p id="originalData"></p>
    <p id="filteredData">Filtered Data: </p>
</body>
```

<body>
    <button onclick="filter()">Filter Data</button>
    <p id="originalData"></p>
    <p id="filteredData">Filtered Data: </p>
</body>

<script>
    let data = [{"id": 1, "letter": "a"}, {"id": 2, "letter": "b"}, {"id": 3, "letter": "c"}, {"id": 4, "letter": ""}]
    document.getElementById("originalData").innerText = "Original data: " + JSON.stringify(data);

    function filter() {
        console.log("filtering")
        for (const row of data) {
            if (row["letter"] == "") {
                data.splice(data.indexOf(row), 1)
            }
        }
        document.getElementById("filteredData").innerText = "Filtered Data: " + JSON.stringify(data);
    }

</script>

- It's important to note that when we fetch data from our backend tables (think back to trimester two), we get an array of JSON objects. Therefore, when we parse the data, we have to treat the data as a table with nested dictionaries. This is why splice() is used rather than delete (splice is for arrays, delete is for dictionaries)

# Hacks
- Create some data that theoretically could have come from a table from a backend like from the trimester two CPT projects (feel free to copy and paste the data from your read endpoints)
- Make a function that filters this data in some way that does NOT do the same thing as the example code above
    - Have some kind of output showing the filtered data
    - This will require usage of HTML and JS
- Bonus: Format the data using JS to make it more readable OR style your html elements

## Note: Feel free to take inspiration from your CPT projects! This Big Idea and especially this part of it is essentially reviewing the things you did last trimester.