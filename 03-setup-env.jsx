Setup Environment for React:

1. Download and Install Node JS on your PC

	- Node JS is used to create web apps, servers, scripting tools etc.
			https://nodejs.org/en
	- Node JS provides a package manager called NPM [Node Package Manager]
	- Package Manager is tool used by developer to install, upgrade and uninstall any
	  library required for project.		
				Yarn
				Bower
				NuGet
				Ruby GEMS
				Composer
				NPM

	- Open command prompt on your PC and test

		C:\> node  -v				
		C:\> npm  -v

	Note: Make sure that you have the latest version of Node 20x & Npm 10x.

2. Download Visual Studio Code Editor 

		https://code.visualstudio.com/

3. Download extensions of VS Code

		a) Live Server
		b) vscode-icons
		c) IntelliSense for CSS class names in HTML
		d) ESLint

React in existing web application:

1. Create a new folder for web application

		E:\web-app

2. Open folder in VS Code and setup environment for Web application

	- Open Terminal and run the command

			>npm init -y				// generates  "package.json"

	- Add a new file into project by name
	
			"README.md"
	
	- Add folders

			a) public		: It used to keep static resources: HTML, images, videos..
			b) src		: It used for dynamic resources: CSS, SCSS, JS, TS.. 

	- Add "index.html" in public folder
	- Add "home.html" in public folder

3. Setup React library for "home.html"

	- In order to use React in any page you need 3 libraries

			a) react.js			: core library for react
			b) react-dom.js		: library for virtual DOM
			c) babel.js			: compiler for react

	- You need all these libraries and approach for react up to version "17x".

	- You can get the libraries from CDN or download using package manager.

	- CDN is available for React from legacy repository 

		https://legacy.reactjs.org/docs/cdn-links.html
	
	- Babel CDN link : copy babel standalone library

		https://babeljs.io/docs/babel-standalone

	- Create an element for actual DOM 

			<div id="root"> </div>
	
	- Create virtual DOM and render into actual DOM by using the method

			ReactDOM.render()

Syntax:
	 ReactDOM.render("component", target_on_actual_DOM)

	- React uses JSX [JavaScript Extension] as language. Hence the type of script
	  must be "JSX or Babel".

Syntax:
		<script type="text/babel">  </script>
		<script type="text/jsx"> </script>

Ex:
1. index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <h2>Index</h2>
    <p>React is in <a href="home.html">Home</a> Page</p>
</body>
</html>

2. home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        ReactDOM.render("Welcome to React", document.getElementById("root"));
    </script>
</head>
<body>
    <noscript>Please enable JavaScript on your browser</noscript>
    <h2>Home</h2>
    <div id="root"></div>
</body>
</html>