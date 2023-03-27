<!-- THIS IS NOT FINISHED! THIS IS A FRAMEWORK USED TO ORGANIZE THE FOLLOWING INFOMATION-->
## Developing Frontend/Backend Application (Big Idea 1)
# Backend and APIs
To better learn about how code works, we need to take a look at what is happening behind the scenes!

## How is Backend connected to Frontend?
- fetch
- CRUD (should be similar somewhat to the CRUD we used in our CPT projects last trimester)
- Some starting code:

<img src="0.0.0.0:4001/startingcode.png">

<script>
    const resultContainer = document.getElementById("result");
    const url = "__(deployed backend)___"
    const create_fetch = url + '/create';
    const read_fetch = url + '/';
</script>

## APIs
- Use flask template to start off api work (if we choose to make our own)
- Can use other API sites for already created APIs such as OpenAPI

## Notes on Topics
> Developing Frontend/Backend Application (Big Idea 1):
- Developing a frontend/backend application involves creating the user interface (UI) and backend functionality of a software application.
- For the frontend, developers use technologies such as HTML, CSS, and JavaScript to create the UI and make it interactive.
- For the backend, developers use languages like Python, Java, or Node.js, and frameworks like Flask, Django, or Express.js to create the functionality of the application and handle server-side operations.
- To get started with Python development and APIs, developers can first learn the basics of Python programming language and then move on to creating APIs using Flask or Django.
- Python offers many libraries for working with APIs, including requests, Flask-RESTful, and FastAPI.
- It is also important to understand the basics of HTTP requests, RESTful architecture, and data serialization formats like JSON and XML.
- Adding visualization to frontend/backend applications can enhance the user experience and help users better understand the data presented. Developers can use tools like D3.js or Plotly.js for creating interactive visualizations.

> Setting up machines with Conda Scripts:
- Conda is an open-source package management system and environment management system that can help developers create isolated environments for their projects.
- Conda scripts can be used to automate the process of setting up machines with the necessary dependencies and packages.
- To get started with Conda, developers can install it on their machines and create a new environment for their project.
- They can then use the Conda commands to install necessary packages and dependencies, create new environments, and manage existing environments.
- Conda scripts can be created to automate the process of setting up a machine with the necessary dependencies and packages.

> Setting up GitHub Pages with FastPages features:
- GitHub Pages is a free hosting service provided by GitHub that allows users to host static websites directly from their GitHub repositories.
- FastPages is an open-source platform that allows users to create Jupyter notebooks and convert them into blog posts or web pages.
- To set up GitHub Pages with FastPages features, users can first create a new GitHub repository and add their Jupyter notebooks.
- They can then use FastPages to convert the notebooks into blog posts or web pages and customize the appearance and layout of their pages.
- Once the pages are ready, users can deploy them to GitHub Pages using GitHub's built-in hosting service.

> Building requirements and pull requests in GitHub:
- Requirements and pull requests are important aspects of GitHub development workflow.
- Requirements are specifications for what a piece of software should do or how it should behave. Developers can create requirements using tools like GitHub Issues or JIRA.
- Pull requests are a way for developers to propose changes to a codebase and merge them into the main branch.
- To create a pull request, developers can first fork the codebase and make their changes in a new branch. They can then create a pull request, which will notify the owner of the original repository of the proposed changes.
- The owner can review the changes, discuss any necessary modifications, and then merge the changes into the main branch.

> Fetching and filtering content using JavaScript, HTML, CSS:
- Fetching and filtering content are important operations in web development.
- Developers can use JavaScript to fetch data from APIs or web services and then manipulate it using HTML and CSS.
- To fetch data, developers can use the Fetch API, which is built into modern browsers, or libraries like Axios or jQuery.
- Once the data is fetched, developers can use JavaScript to filter or manipulate the data, and then display it using HTML and CSS.

> Developing Backend 3rd Party APIs with analysis and cleaning Python, Flask, Pandas:
- Developing backend 3rd party APIs involves creating APIs that can be used by other applications or services.
- Python is a popular language for developing backend APIs due to its simplicity, ease of use, and vast collection of libraries.
- Flask is a lightweight and flexible web framework that can be used for developing APIs in Python.
- Pandas is a powerful library for data analysis and manipulation in Python. It can be used to clean and preprocess data before serving it through the API.
- When developing a backend API, it is important to define the endpoints and methods that the API will support. Developers can use Flask's routing system to define endpoints and methods such as GET, POST, PUT, and DELETE.
- Data analysis and cleaning are important steps in preparing data for the API. Pandas can be used to load, clean, preprocess, and transform data into a format that is suitable for the API's users.
- API security is also an important consideration. Developers can use tools like Flask-JWT or OAuth2 to secure the API and protect user data.