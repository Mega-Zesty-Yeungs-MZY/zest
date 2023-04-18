<p style="text-align: center; font-size: 40px; color: darkblue;">Lesson 1.5 Developing Backend 3rd Party APIs with analysis and cleaning Python, Flask, Pandas </p>
<br>

> Key Topics:
- 3rd Party APIs
- Analysis and Cleaning using Python, Flask, and Pandas

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

# Example 1

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
  <p style="text-align: center; font-size: 20px;">This code uses an API from RapidAPI which displays various soccer games and includes statistics for whatever game you choose to search for.</p>
</div>

<script>
  const button = document.getElementById('RunCode1');
  const api2 = document.getElementById('style1');
  
  button.addEventListener('click', () => {
    api2.style.display = 'block';
    document.getElementById('style1').style.textAlign = 'center';
  });
</script>

# Hacks:

wget