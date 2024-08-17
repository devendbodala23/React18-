Ajax Techniques
- XMLHttpRequest
- fetch()

						    jQuery Ajax
- jQuery is JavaScript library.
- It provides various methods for DOM and BOM.
- jQuery provides Ajax methods to handle interactions with external files and API.
- jQuery Ajax methods provides tracking of complete life cycle of Ajax request.

		$.ajax()
		$.getJSON()
		.ajaxStart()
		.ajaxSuccess()
		.ajaxComplete()
		.ajaxStop()
		.ajaxError()

Features:
- It provides complete life cycle tracking.
- It is good in tracking errors.
- It returns response data directly in the format provided by source. 
- It doesn't require parsing techniques. 
- It can manage CORS.

1. Install jQuery for your project				

		> npm install jquery --save

2.  Import  "$" from jQuery library in the component where you want to use the Ajax methods.

3. Configure Ajax method

		  $.ajax({ 
			 method: "",
			 url: " ",
			 data: " ",
			 success: function(){ },
			 error: function(){ }
		   })

	method		: It refers to Http Verbs,  GET, POST, PUT, PATCH, DELETE
	url			: It refers to file or remote URL of resource. 
	data			: It is the data to send on POST, PUT, PATCH.
	success		: It is a callback that gets response on success. 

						response.status			200, 404
						response.statusText		OK,  Not Found
						response					Resource data [JSON, XML]
						response.headers			Content Type, Request Type

	error			: It is a callback that returns error log.

Ex:
ajax-demo.jsx

import { useEffect, useState } from "react";
import $ from "jquery";

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
          $.ajax({
            method: 'get',
            url: 'product.json',
            success: (response) => {
                 setProduct(response);
            }, 
            error: (ex)=>{
                 console.log(ex);
            }
          })

    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Note: XMLHttpRequest, fetch() & jQuery Ajax methods all of them use actual DOM. Hence React developers use various 3rd party libraries which can use "Virtual DOM".

			a) axios
			b) WhatwgFetch
			c) Telerik 	
			etc..
	  You can explore more 3rd party libraries in  "npmjs.com"

Axios Features:
- It avoids explicit conversions.
- It can cancel the requests.
- It is promise based API.
- It prevents XSRF & XSS
  [Cross Site Request Forgery]
  [Cross Site Scripting Attacks]
- It can handle multiple requests simultaneously at the same time.

		axios({ })			=> single request
		axios([{ }, { }])		=> multiple requests 

1. Install axios for React project

		> npm  install axios  --save

2. Import axios from "axios" module

	import   axios    from   "axios";

3. Configure axios request.

	   axios({ setings })			=> settings include method, url, data.
	   axios.get()
	   axios.post()
	   axios.put()
	   axios.delete()

    It is promise based, hence it contains then(), catch(), finally().

Syntax:
	axios.get("url / file_path")
		.then( response=> response.data)
		.catch(error => { })
		.finally(()=>{ })

	response.status
	response.statusText
	response.headers
	response.data


Ex:
ajax-demo.jsx

import { useEffect, useState } from "react";
import axios from "axios";


export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
        
        axios.get("product.json").then(response=>{
             setProduct(response.data);
        })

    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Ex:
courses.json

[
    {
        "title": "DevOps with AWS",
        "rating": 5,
        "start": "12 Aug 2024",
        "faculty": "Mr. Veera Babu",
        "duration": "3 Months",
        "image": "devops.png"
    },
    {
        "title": "Fullstack Data Science & AI",
        "rating": 4,
        "start": "12 Aug 2024",
        "faculty": "Mr. Daniel",
        "duration": "4 Months",
        "image": "ds.png"
    },
    {
        "title": "Fullstack .NET",
        "rating": 4.5,
        "start": "12 Aug 2024",
        "faculty": "Mr. Daniel",
        "duration": "4 Months",
        "image": "dotnet.png"
    },
    {
        "title": "Oracle",
        "rating": 3.4,
        "start": "12 Aug 2024",
        "faculty": "Mr. Daniel",
        "duration": "4 Months",
        "image": "oracle.png"
    }

]


courses.jsx

import axios from "axios";
import { useEffect, useState } from "react"

export function Courses()
{

    const [courses, setCourses] = useState([{title:'', rating:0, faculty:'', duration:'', start:'', image:''}]);

    useEffect(()=>{

        axios.get('courses.json')
        .then(response=>{
             setCourses(response.data);
        })

    },[])

    return(
        <div className="container-fluid">
            <main className="d-flex">
                {
                    courses.map(course => 
                        <div className="card p-2 m-2" key={course.title}>
                            <img className="card-img-top" src={course.image} height="130" />
                            <div className="card-header text-center">
                                <div>{course.title}</div>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span>{course.rating}</span>
                                </div>
                                <dl className="row">
                                    <dt className="col-5">Start</dt>
                                    <dd className="col-7">{course.start}</dd>
                                    <dt className="col-5">Duration</dt>
                                    <dd className="col-7">{course.duration}</dd>
                                    <dt className="col-5">By</dt>
                                    <dt className="col-7">{course.faculty}</dt>
                                </dl>
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}

Ex:
nested-demo.jsx

import { useState } from "react"


export function NestedDemo(){

    const [data] = useState(
        [
            {Category:"Electronics", Products:["Televisions", "Mobile"]},
            {Category:"Footwear", Products:["Casuals", "Sneakers", "Boots"]}
        ]
    );


    return(
        <div className="container-fluid">
            <h2>Nested List</h2>
            <ol>
                {
                    data.map(item=>
                        <li key={item}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product=> <li key={product}> {product} </li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    data.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=> <option key={product}>{product}</option>)
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}

						        Map Type

Issues with Object type:
- It is key and value collection
- Key must be string type
- Value can be any type
- It requires lot of explicit operators and functions to handle interactions.
- It is slow in interactions 

Map Type:
- It is also a key and value collection.
- Key can any type and value also any type.
- It provides implicit methods and properties to handle interactions 
- Hence it is faster than object.
- However it is schema less. 

Syntax:
	var  data = new Map();
	data.set(key, value);
	data.get(key);
	data.keys()
	data.values()
	data.entries()
	data.delete(key)
	data.clear()
	data.has()
	data.size
	
						     Date Type
- React can configure date and time values by using Date() constructor. 
- It allocates memory to store current date and time.

Syntax:
	const [now] = useState(Date());

	<p> { now } </p>

- React requires various 3rd party date libraries to handle date and time values, the most commonly uses date adapters are
		a) dayjs
		b) moment
		c) luxon 

Ex:
1. Install  moment for React project

	>npm install  moment  --save

2. Import moment into component

	import   moment  from  "moment";

3. Apply date and time format using  "format()" method

	{   moment(yourDate).format('pre-defined-format') }

	D		single digit date value
	DD		double digit date value
	
	ddd		short weekday name
	dddd	long weekday name

	MM		month number
	MMM	short month name
	MMMM	long month name
	
	yy / yyyy	Full Year

Syntax:
	const  [mfd]  = useState(Date());

	{  moment(mfd).format('dddd DD  MMMM, yyyy')  }


					Regular Expression Type

- Regular expression is used to verify the format of a value.
- Expression is defined with meta characters and quantifiers.
- Regular expression is enclosed in "/  regExp /".
- Regular expression is verified by using "match()" method of string.

Syntax:
	const [regExp]  = useState(/ meta_chars_quantifier /);

	value.match(regExp)		// returns true if value is matching with expression.

Ex:
nested-demo.jsx

import { useEffect, useState } from "react"

export function NestedDemo(){


    const [mobile, setMobile] = useState("9876543210");
    const [regExp] = useState(/\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/);

    useEffect(()=>{
        setMobile(prompt('Enter Mobile Number'));
    },[])

    return(
        <div className="container-fluid">
             {
                (mobile.match(regExp))?"Mobile Verified":"Invalid Mobile : US Format +(1)(000) 000-0000"
             }
        </div>
    )
}

Summary: 
- Primitive Types
	number
	string
	Boolean 
	null
	undefined 
	symbol 
	BIGINT
- Non Primitive 
	array
	object
	map
- Additional 
	date
	regExp
