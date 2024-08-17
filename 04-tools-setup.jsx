1. Setup Node JS
2. VS Code
3. Extensions
4. Create a new web application
5. Add Pages
6. Add React to a Page using CDN 

Install React & Babel library for Project:
1. Open Terminal in your project

2. Install libraries by using following commands

	> npm  install  react  --save
	> npm  install  react-dom --save
	> npm  install  @babel/standalone --save

3. All library files are copied into "node_modules" folder and project is using a module
    system called "UMD" [Universal Module Distribution]. There are various other module systems like:
		a) Common JS
		b) Require JS
		c) AMD
		d) ESModule

4. Link the following file to your HTML page [home.html]

  <script src="../node_modules/react/umd/react.development.js"> </script>
  <script src="../node_modules/react-dom/umd/react-dom.development.js"> </script>
  <script src="../node_modules/@babel/standalone/babel.js"> </script>

Ex:
home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
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

						 React Components
- React is component based.
- Components are considered as building blocks for SPA. [Single Page Application]
- Component is like a template with 3 basic elements
	a) Design
	b) Styles
	c) Logic [Functionality]

- Design is created using HTML.
- Styles are defined with CSS.
- Logic is configure with JavaScript or TypeScript [JSX, TSX]
- Components in React are created by using  
	a) JavaScript Functions
	b) JavaScript Classes

Note: Classes are still supported in React, but not recommended for new Code.

JavaScript Functions:
- Function Declaration
- Function Expression
- Function Signature
- Function Parameters
- Rest Parameters
- Spread Operator in Functions
- Formal Parameters
- Actual Parameters
- Function Closure 
- Anonymous Function
- Function Generator
- Function Call Back
- Function Promises 
- Async Functions
- Arrow Functions
- Function Recursion 

Rules for Creating a component with JS function:
- Component function name must start with upper case letter.
Syntax:
		function  Login()
		{
		}

		function login() { }		=> invalid

- Component function must return JSX element.
- It can't be void type.
- JSX is returned by using anonymous function.

Syntax:
		function Login()
		{
		   return (
			      <markup> </markup>		// JSX
		    );
		}

JSX Rules:
- JSX can't render multiple containers. 
- Make sure that JSX is rendering only one container into virtual DOM.

		(
		  <h2> </h2>				=> invalid
		  <p> </p>
		)

		(
		 <div>
		   <h2> </h2>				=> valid
		   <p> </p>
		</div>
		)

- JSX can't have void element syntax. 
- In JSX every element must have end token.

		<input type="text">	 </input>
		<input type="text" />

		<img> </img>
		<img />
		
		<br />
		<br> </br>

- JSX element can't use attributes, it requires only properties. 

Syntax:
		<div  class="container">			// invalid

		<div className="container">	// valid

Note: You can define a JSX fragment using various techniques.
		
		a) You can use HTML containers
			<div> <header> <section> <main> <nav> etc..
		
		b) You can use Empty fragment
			< >
	
			</>
		c) You can also use React.Fragment

			<React.Fragment>

			</React.Fragment>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Demo</title>
    <style>
        nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            border:1px solid gray;
            border-radius: 5px;
        }
        .brand-title {
            font-family: Arial;
            font-weight: bold;
            font-size: 20px;
        }
        nav span {
            font-family: Arial;
            margin: 0px 20px 0px 20px;
        }
    </style>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

            function Navbar(){
                return(
                    <nav>
                        <div className="brand-title"> Shopper. </div>
                        <div> 
                           <span>Home</span>    
                           <span>Shop</span>
                           <span>Pages</span>
                           <span>Blog</span>
                        </div>
                        <div>
                            <input type="text" placeholder="Search shopper.com" />
                            <button>Search</button>
                        </div>
                    </nav>
                )
            }

           ReactDOM.render(<header> <Navbar/> <Navbar/> </header>, document.getElementById("root"));
    </script>
</head>
<body>
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>