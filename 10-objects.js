Object


- Object is used to keep all related data and logic together. 
- It is key and value collection.
- Key is string type and value can be any type.

Syntax:
	var refName = {

			"Key": value,
			"Key": value
	}

- You can access the member of object within object by using "this" keyword.
- You can access the members of object outside by using reference of object name.

Syntax:
	 var product = {  Id:1, Name: "TV" };

	 product.Id;
	 product.Name;

FAQ's:
1. How to access all keys of an object?
A. By using "Object.keys()" or you can use "for..in" iterator. 

Syntax:
		Object.keys(product)[ ]


2. How to check the existence of a Key in object?
A. By using JS "in" operator.

Syntax:
		"key" in objectName;		// true or false
		"Id"  in product;			// true

3. How to remove a key from object?
A. By using JS "delete" operator.

Syntax:
		delete    objectName.key;
		delete    product.Id;

4. How to know the type of data stored in a key?
A. By using JS "typeof" operator.

Syntax:
		typeof   product[key]

- To access data from JSON file you need various "Ajax" techniques 

	1. XMLHttpRequest
	2. fetch()
	3. jQuery Ajax methods
	4. 3rd Party Ajax methods

XMLHttpRequest:
- It is the native ajax method used by browsers. 
- It provides various properties, methods and events to connect with remote file or URL and access the data. 

Syntax:	
		var http = new XMLHttpRequest();

		http.open("method", "url / file_path", async:boolean);

		http.send();

		http.onreadystatechange = function() {

			 if(http.readyState==4)
			 {
				  // you can access the response by using
				     http.responseText
				     http.responseXML
			 }	

		}

Ex:
ajax-demo.jsx

import { useEffect, useState } from "react"

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
        var http = new XMLHttpRequest();

        http.open("get", "product.json", true);

        http.send();

        http.onreadystatechange = function(){

              if(http.readyState==4){
                   setProduct(JSON.parse(http.responseText));
              }

        }


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


public/product.json

{
    "title": "Apple iPhone 15 (Black, 128 GB)",
    "price": 65499,
    "rating": {"rate":4.6, "ratings":45131, "reviews":2430},
    "offers": [
        "Bank Offer10% off up to ₹1,000 on ICICI Bank Credit Card Transactions, on orders of ₹5,000 and aboveT&C",
        "Bank Offer10% off up to ₹1,500 on ICICI Bank Credit Card EMI Transactions, on orders of ₹5,000 and aboveT&C",
        "Bank Offer10% off up to ₹750 on ICICI Bank Debit Card Transactions, on orders of ₹5,000 and aboveT&C",
        "Special PriceGet extra ₹12401 off (price inclusive of cashback/coupon)T&C"
    ],
    "image": "iphone-black.jpg"
}

Issues with XMLHttpRequest Object:

- It is "Synchronous" by default.
- You have to explicitly configure "Async".
- It requires various parsing techniques to parse data.
- It returns the data in text format or optionally XML.
- Data in text format can be blocked by firewall.
- CORS issues [Cross Origin Resource Sharing]
- It is not very good in error handling. 

2. fetch
- fetch() is JavaScript promise.
- Promise is async by default. 
- It returns every data in binary format.
- You have to convert the binary data into JSON.
- It is better in handling CORS.
- It is better in handling errors.


Syntax:
	fetch("url / file_path")
	.then(function(response){  })
	.catch(function(error){ })
	.finally(function() { always })

Ex:
ajax-demo.jsx

import { useEffect, useState } from "react"

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
           fetch("product.json")
           .then(response => response.json())
           .then(product=> {
               setProduct(product);
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