Note: Variables are not recommended to handle data for component. 
          Variables are immutable and component can't handle data with immutable 	 
          reference. 

						State in Component

- Web applications use "HTTP" or "HTTPS"  as protocol.
- HTTP is state less protocol.
- State less nature of HTTP is good for server as it manages the memory with less overload. 
- It is not good to handle data across requests as server can't remember the data across requests. 
- Hence web application require various "State Management" techniques. 
- State Management is classified into 2 types
	a) Client Side State
	b) Server Side State
- React uses various client side state management techniques 
	a) Query String
	b) Local Storage
	c) Session Storage
	d) Cookies
- React also provides state for "Virtual DOM".
- React provides various "Hooks" [functions] to manage state for a component

	a) useState()
	b) useContext()
	c) useRef()
	d) useMemo()
	e) useCallBack()
	f) useReducer() 
	etc..

- State is mutable.
- The local state is defined by using "useState()"  hook.
- Local state is configured while creating the component and destroyed when user navigates to another component. 

Syntax:
	import { useState }  from  "react";

	const [getter, setter] = useState();

- useState() will allocate memory for component, which is controlled by accessors
	a) getter		: to read value from memory [state].
	b) setter		: to assign value into memory [state].

FAQ's:

1. Why developers prefer using "const" for configuring useState?
A. State must be initialized for a component, which is secured and safe for memory.
     let & var allows assignment, which is not good for state. 

2. If you configure state using const how you will assign a new value?
A. const will not allow assignment, but allows changing the value in memory by re-initializing the memory. Setter re-initializes the memory and stores a new value into state.

Syntax:
		var [name, setName] = useState();

		setName = newname;			// invalid
		
		setName(newname);			// valid  - re-initializing 

3. When to setState ?
A. State can't set values while creating a component. You have to configure values 
     into state after component is created, which can be "mount" or any element event.


4. How to define a mount phase for component in React?
A. By using "useEffect()" hook.

Syntax:
		useEffect(()=>{ 


		}, [ dependencies ]);

		useEffect(function(){ }, [ ]);

Note: useEffect() can handle 2 phases
		a) Mount
		b) Unmount 

	  Every component mounts only once, you have to define the dependency to 
	  mount again. You can configure multiple dependencies for a component.

Ex:
data-binding.jsx

import { useEffect, useState } from "react";

export function DataBinding(){

    const [price, setPrice] = useState(40000.44);

    useEffect(()=>{

        setPrice(70000.44);

    },[])

    return(
        <div>
            <h2>Data Binding</h2>
            Price : { price }
        </div>
    )
}

						 Binding String Type
- ES5+ versions support string with
	a) Single Quote		'  '
	b) Double Quote		" "
	c) Backtick 			` `
- Backtick allows a string with embedded expression.
- Data binding embedded expression is defined by using  "${ }"

Syntax:
		`string ${expression}` 
		
FAQ: What is difference between "{ }"  & "${ }" ?
Ans:
	  {  }		react binding expression for JSX 
	  ${ }		JavaScript binding expression for string with backtick.

Ex:
data-binding.jsx

import { useEffect, useState } from "react";

export function DataBinding(){

    const [productName, setProductName] = useState();
    const [bgStyle, setBgStyle] = useState('');

    useEffect(()=>{

        setProductName("Samsung TV");
        setBgStyle('bg-warning');

    }, []);

    return(
        <div className="container-fluid">
            <h2 className={`text-center text-danger ${bgStyle}`} >Data Binding</h2>
            <dl>
                <dt>Name</dt>
                <dd>{productName}</dd>
            </dl>
        </div>
    )
}

- All JS string methods are same to use in React.
	a) String Formatting
	b) String Manipulation 

Formatting:
	bold(), italics(), fontsize(), fontcolor(), toUpperCase(), toLowerCase() etc.. 

Manipulation:
	length, indexOf(), lastIndexOf(), charAt(), charCodeAt(), match(), slice(),
	substring(), substr(), etc..