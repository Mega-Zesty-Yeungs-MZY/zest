<p style="text-align: center; font-size: 40px; color: darkblue;">Lesson 1.5 Developing Backend 3rd Party APIs with analysis and cleaning Python, Flask, Pandas </p>
<br>

> Key Topics:
- 3rd Party APIs
- Analysis and Cleaning using Python, Flask, and Pandas

# 3rd Party APIs

> What are 3rd Party APIs?
- 3rd Party APIs are application programming interfaces that are created by third-party developers or companies
- 3rd Party API's allow developers to save time and resources by not having to make the API's by themselves
- There are security risks with using less popular 3rd party APIs
- Developers should ensure that they are secure and reliable before integrating them into their applications

> Some popular API's
- <a href="https://rapidapi.com/hub">Rapid API</a>
- <a href="https://github.com/public-apis/public-apis">Github Public APIs</a>
- Google Maps API
- Twitter API
- Facebook API
- etc

# Example 1 (Python)

<div style="text-align: center;">
  <img src="{{site.baseurl}}/images/api1.png" alt="Code 1">
</div>
<br>
<div style="text-align: center;">
  <button style="text-align: center; font-size: 40px; color: darkblue;" id="RunCode1">Run</button>
</div>
<br>
<div id="style1" style="display: none; flex; justify-content: center;">
  <img src="{{site.baseurl}}/images/api2.png" alt="Code 1 Output" id="Output1">
  <p style="text-align: center; font-size: 20px;">This code uses an API from RapidAPI which displays various soccer games and includes statistics for whatever game you choose to search for, intended to help someone predict the outcome of a game.</p>
</div>

<script>
  const button = document.getElementById('RunCode1');
  const api2 = document.getElementById('style1');
  
  button.addEventListener('click', () => {
    api2.style.display = 'block';
    document.getElementById('style1').style.textAlign = 'center';
  });
</script>

# Example 2 (Javascript)

<a href="https://covid19api.com/">Covid 19 3rd Party API</a>

```javascript
fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector('#myTable tbody');
      data.Countries.forEach(country => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${country.Country}</td>
          <td>${country.TotalConfirmed}</td>
          <td>${country.TotalDeaths}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => console.error(error));
```

<style>
  th {
    font-weight: bold;
  }
</style>

<table id="myTable">
  <thead>
    <tr>
      <th>Country</th>
      <th>Cases</th>
      <th>Deaths</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<script>
  fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector('#myTable tbody');
      data.Countries.forEach(country => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${country.Country}</td>
          <td>${country.TotalConfirmed}</td>
          <td>${country.TotalDeaths}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => console.error(error));
</script>

# Analysis and Cleaning using Python, Flask, and Pandas

> What is Analysis and Cleaning?
- Data cleaning is the process of fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a dataset
- Allows for accurate, reputable, organized data that generates a reliable representation of whatever it is that will be put through data analysis

> Pandas
- Pandas is a package, which contains functions mainly used for data analysis, cleaning, and manipulation
- Pandas uses other Python libraries such as NumPy, Scikit-learn, and TensorFlow

<table>
    <thead>
        <tr>
            <th>Function</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>head()</td>
            <td class="purpose">Returns the first n rows of a DataFrame</td>
        </tr>
        <tr>
            <td>tail()</td>
            <td class="purpose">Returns the last n rows of a DataFrame</td>
        </tr>
        <tr>
            <td>read_csv()</td>
            <td class="purpose">Reads a CSV file into a Pandas DataFrame</td>
        </tr>
        <tr>
            <td>dropna()</td>
            <td class="purpose">Removes rows with null values</td>
        </tr>
        <tr>
            <td>merge()</td>
            <td class="purpose">Merges two DataFrames based on a specified column</td>
        </tr>
        <tr>
            <td>sort_values()</td>
            <td class="purpose">Sorts a DataFrame by a specified column</td>
        </tr>
        <tr>
            <td>describe()</td>
            <td class="purpose">Generates descriptive statistics of a DataFrame</td>
        </tr>
        <tr>
            <td>scatter()</td>
            <td class="purpose">Create a scatter plot of DataFrame data</td>
        </tr>
    </tbody>
</table>

<button onclick="reveal()">Show Purposes</button>
<script>
    function reveal() {
        var x = document.getElementsByTagName("td");
        for (var i = 0; i < x.length; i++) {
            if (x[i].getAttribute("class") === "purpose") {
                if (x[i].style.display === "none") {
                    x[i].style.display = "table-cell";
                } else {
                    x[i].style.display = "none";
                }
            }
        }
    }
</script>



> Flask
- 

# Hacks:
