# Fetching Content
- We can use the javascript fetch() method for sending and receiving data between the frontend and backend
- fetch() supports many options, and using fetch() to simply retrieve (read) data has the simplest usage of fetch()
- We can define a function containing a fetch() request
- If we want to retrieve data with a button press, we can create a button in html that calls the function containing a fetch() request.

```
<body>
    <button onclick="read()">Retrieve Data</button>
</body>

<script>
    fuction read() {
        console.log("Read function has been called")
    }
</script>
```