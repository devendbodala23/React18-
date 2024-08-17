						Event Binding in React

1. What is Event?
A. Event is a message sent by sender to its subscriber in order to notify the change.
    Event uses a "delegate" mechanism, function pointer mechanism.
    Event follows a software design pattern called "Observer".
    "Observer" is a communication pattern.

2. What is sender and subscriber?
A. Sender sends a notification from element.
	 <button onclick="InsertClick()">

    Subscriber defines the actions to perform.

	  function  InsertClick()
	  {
	  }

3. What is Event Handler?
A. It is a "delegate", function pointer.

	onclick="InsertClick()"			// Event Handler
	onclick						// Event
 
    Event handler triggers notification to a specific function on particular event.
    You can define a handler for any element that is static.

4. What is Event Listener? 
A. Event Listener is defined for elements that are added to page dynamically and also to existing elements on specific actions.
    You can configure listener for elements according to state and situation, so that
     they are registered only when they are required.

Syntax:
	document.querySelect("button").addEventListener("Event", function(){

	})

5. What is difference between onclick & click?
A.  "onclick" is a handler event.
     "click" is listener event.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
          function InsertClick(){
               document.write("Record Inserted");
          }
          function bodyload(){
               var btnDelete = document.createElement("button");
               btnDelete.innerHTML = "Delete";
               btnDelete.addEventListener("click", function(){
                    document.write("Record Deleted");
               })
               document.querySelector("body").appendChild(btnDelete);

               document.getElementById("btnUpdate").addEventListener("click",()=>{
                    document.write("Record Updated Successfully..");
               })

          }
     </script>
</head>
<body onload="bodyload()">
     <button id="btnUpdate">Update</button>
     <button onclick="InsertClick()">Insert</button>

</body>
</html>

6. What are Event Arguments?
A. Event argument defines the "Payload" of event. 
    Every event have 2 default arguments to define in handler
		a) this
		b) event
 
    "this" contains information about the current element like
		a) id
		b) name
		c) className
		d) src
		f) href etc..
    "event" container information about current event like
		a) clientX 
		b) clientY 
		c) keycode
		d) charCode
		e) which etc..

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
         function Database(btn, e){
               document.write(`Button Name: ${btn.name}<br>X Position: ${e.clientX} <br> Ctrl Key : ${e.ctrlKey}`);
         }
     </script>
</head>
<body>
    <button onclick="Database(this, event)" name="Insert">Insert</button>
    <button onclick="Database(this, event)" name="Update">Update</button>
    <button onclick="Database(this, event)" name="Delete">Delete</button>

    
</body>
</html>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
        function ImageClick(e) {
            console.log(e.clientX + "\n" + e.clientY);
            if((e.clientX>=40 && e.clientX<=159) && (e.clientY>=30 && e.clientY<=144)) {
                document.write("32 Pixel Dual Camera")
            } else {
               document.write("Silicon Panel");
            }
        }
     </script>
</head>
<body>
   <img src="../public/iphone-black.jpg" onclick="ImageClick(event)">
</body>
</html>

 - Event can have custom arguments. You can define along with default args or only custom args.

	<button onclick="Details('string', number, Boolean, [ ], { })"> Details </button>

	function Details(name, price, stock, cities, rating)
	{
	}

- Event listener can have only one argument that refers to "event". However event can access both event and element related information.

Syntax:

	  btnInsert.addEventListener("click", function(e) {

		   e.clientX;
		   e.clientY;
		   e.ctrlKey;

		   e.target.id;
		   e.target.name;
		   e.target.className;

	})

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
          function bodyload(){
                document.getElementById("btnDetails").addEventListener("click", function(e){
                      document.write(`
                             Button Id: ${e.target.id} <br>
                             X Poistion: ${e.clientX} <br>
                             Ctrl : ${e.ctrlKey} <br>
                             Button Class: ${e.target.className}
                      `);
                })
          }
     </script>
</head>
<body onload="bodyload()">
     <button class="btn btn-primary" id="btnDetails">Details</button>
</body>
</html>


1. What is Event?
2. What is Event Handler?
3. What is Event Listener?
4. What are Event Args?

5. What is Event propagation?
A. Propagation is technique where the child event can simulate the parent element event. As parent and child elements use "bubble" for handling interactions. 

6. How to prevent event propagation? 
A. By using the event method "stopPropagation()".

Syntax:
		function ChildEvent(e)
		{
		   e.stopPropagation();
		}
		
		<button onclick="ChildEvent(event)">  Child </button>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <style>
          nav {
               padding: 30px;
               background-color: black;
               color:white;
               font-size: 20px;
          }
     </style>
     <script>
        
     </script>
</head>
<body>
     <nav onclick="NavClick()">
          Navbar 
          <button onclick="SearchClick(event)">Search</button>
     </nav>
</body>
</html>

7. How to prevent default actions of any generic element?
A. Generic elements have default actions to perform, you can stop the default actions
     by using the event method "preventDefault()".

Syntax:
	<form onsubmit="FormSubmit(event)">

		<button type="submit"> Submit </button>
	</form>

	 function FormSubmit(e) {
		e.preventDefault();
	}
	
Ex:
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <style>
         
     </style>
     <script>
         function FormSubmit(e){
             e.preventDefault();
             alert("Form data submitted to Server");
         }
     </script>
</head>
<body>
     <form onsubmit="FormSubmit(event)">
          User Name : <input type="text" name="User"> <button type="submit">Submit</button>
     </form>
</body>
</html>

8. Events are configured for element or browser?
A. All events used in JS are browser events defined for element. [BOM]


9. React is using virtual DOM, then how it can use browser events?
A. React will not use browser events, It have a virtual DOM events library called 
    "SyntheticEvents".

10. What are synthetic events?
A.  SyntheticEvent is base for all events used by react in virtual DOM.
     SyntheticEvents map to actual BOM events.

Syntax:
		React => onClick  => BOM => onclick
		React => onDoubleClick => BOM => ondblclick

Configuring Events in React component:

1. Event requires a subscriber defined in component function

		function  InsertClick(e) {

		}

2. JSX element use SyntheticEvent as sender.

	 <button  onClick={ InsertClick }>  Insert </button>


3. Events are registered at the time of mounting the component. Hence it uses 
    a listener with "event" argument, which can provides access to both
		a) element data
		b) event data

	 e.clientX;
	 e.ctrlKey;
	 e.target.id;
	 e.target.className;

Ex:
event-binding.jsx

export function EventDemo(){


    function InsertClick(e){
        console.log(`
               Button Id: ${e.target.id}\n 
               ClassName : ${e.target.className}\n 
               X Position : ${e.clientX}\n
               Ctrl Key : ${e.ctrlKey}
            `);
    }

     return(
        <div className="container-fluid">
            <button id="btnInsert" onClick={InsertClick}  className="btn btn-primary mt-3">Insert</button>
        </div>
     )
}

FAQ: How to configure custom arguments for event in react?
Ans: You need to define a function return with custom arguments in event handler.

	<button  onClick={ ()=> InsertClick(args) }>   Text </button>

FAQ: How to pass both default and custom args?
Ans:  The function return configured in handler can have an event parameter, which
	  provides access to default events.

	<button  onClick={  (e) => InsertClick(args, e) }> Text </button>

Ex:
event-demo.jsx



export function EventDemo(){


    function InsertClick(name, price, cities, event){
        console.log(`
                Name : ${name}\n
                Price: ${price}\n
                Cities: ${cities}\n
                Button Id: ${event.target.id}\n
                Class : ${event.target.className}
            `);
    }

     return(
        <div className="container-fluid">
            <button id="btnInsert" onClick={(e)=> InsertClick("TV", 34000, ['Delhi', 'Hyd'], e)}  className="btn btn-primary mt-3">Insert</button>
        </div>
     )
}

Mouse Events
		onMouseOver
		onMouseOut
		onMouseDown
		onMouseUp
		onMouseMove

Style Binding:
- It is a technique of configuring styles for JSX elements.
- You can bind the styles dynamically to make element interactive and responsive.
- Styles are defined using "style" property, which gets the attributes from JSON object.

Syntax:
		<h2  style={ { attributeName: 'value' } }>  Text  </h2>

- CSS attribute name must be in camel case.
- CSS attribute value must be string.

			background-color		backgroundColor
			text-align				textAlign
			font-size				fontSize
			color				color
			width				width

- Multiple attributes are separated with "," delimiter.

Syntax:
		<div  style={ { backgroundColor:'red', color:'#fff', border:'1px solid black' } }>

		</div>

Ex:
event-demo.jsx

import { useState } from "react"


export function EventDemo(){

    const [styleObj, setStyleObj] = useState({color:'black'});
    
    function handleMouseover(e){
        setStyleObj({color:e.target.id});
    }

    function handleMouseOut(){
        setStyleObj({color:'black'});
    }

     return(
        <div className="container-fluid">
             <h3>Mouse Events</h3>
             <div className="d-flex p-4 text-white text-center">
                <div onMouseOut={handleMouseOut} id="red" onMouseOver={handleMouseover} style={{width:'100px', backgroundColor:'red'}}>Red</div>
                <div onMouseOut={handleMouseOut} id="green" onMouseOver={handleMouseover} style={{width:'100px', backgroundColor:'green'}}>Green</div>
                <div onMouseOut={handleMouseOut} id="blue" onMouseOver={handleMouseover} style={{width:'100px', backgroundColor:'blue'}}>Blue</div>
             </div>
             <h1 style={styleObj}>Sample Text</h1>
        </div>
     )
}

Ex:
event-demo.css


.thumbnail {
    border: 2px solid gray;
}
.thumbnail:hover {
    border:2px solid blue;
    cursor: grab;
}

event-demo.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import './event-demo.css';


export function EventDemo(){

    const [mobiles, setMobiles] = useState([{img_src:''}]); 
    const [preview, setPreview] = useState('m1.jpg');
  

    useEffect(()=>{

        axios.get("mobiles.json")
        .then(response=> {
             setMobiles(response.data);
        })

    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }


     return(
        <div className="container-fluid">
             <div className="mt-4 row">
                <nav className="col-2">
                    {
                        mobiles.map(mobile=>
                            <div className="my-4 thumbnail" style={{width:'75px'}} key={mobile.img_src}>
                                <img onMouseOver={handleMouseOver}  width="70" height="70" src={mobile.img_src} />
                            </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <img src={preview} width="35%" height="400"/>
                </main>
             </div>
        </div>
     )
}

Ex:
event-demo.css


@keyframes Rotate
{
    from {
         transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.logo {
    animation-name: Rotate;
    animation-duration:5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.logo:hover {
    animation-name: Rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}


event-demo.jsx


import './event-demo.css';


export function EventDemo(){

  

     return(
        <div className="container-fluid">
            <div className='d-flex bg-dark justify-content-center align-items-center' style={{height:'100vh'}}>
                 <img className='logo' src='logo192.png' />
            </div>
        </div>
     )
}

Ex:
event-demo.css


@keyframes Rotate
{
    from {
         transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes Zoom {
    form {
        transform: scale(1) rotate(0deg);
    }
    to {
        transform: scale(3) rotate(360deg);
    }
}

event-demo.jsx


import { useState } from 'react';
import './event-demo.css';


export function EventDemo(){

  
    const [styleObj, setStyleObj] = useState({animationName:'Rotate', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});

    function handlMouseOver(){
        setStyleObj({animationName:'Rotate', animationDuration:'1s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handlMouseOut(){
        setStyleObj({animationName:'Rotate', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }

    function handleMouseDown(){
        setStyleObj({animationName:'Zoom', animationDuration:'5s', animationTimingFunction:'linear', animationIterationCount:'infinite'});
    }

     return(
        <div className="container-fluid">
            <div className='d-flex bg-dark justify-content-center align-items-center' style={{height:'100vh'}}>
                 <img onMouseDown={handleMouseDown} onMouseOut={handlMouseOut} onMouseOver={handlMouseOver} style={styleObj} src='logo192.png' />
            </div>
        </div>
     )
}

Ex: mouse-move

event-demo.jsx


import { useState } from 'react';
import './event-demo.css';


export function EventDemo(){

  
    const [styleObj, setStyleObj] = useState({position:'', left:'', top:''});
   
    function handleMouseMove(e){
         setStyleObj({position:'fixed', left:e.clientX + 'px', top:e.clientY + 'px'});
    }

     return(
        <div className="container-fluid" onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>Move your mouse pointer to test</div>
            <img style={styleObj} src='flag.gif' width="50" height="50" />
        </div>
     )
}