const { json } = require("stream/consumers")

//AJAX CAll
// Asynchronous JavaScript And XML.
//1. An event occurs in a web page (the page is loaded, a button is clicked)
//2. An XMLHttpRequest object is created by JavaScript
//3. The XMLHttpRequest object sends a request to a web server
//4. The server processes the request
//5. The server sends a response back to the web page
//6. The response is read by JavaScript
//7. Proper action (like page update) is performed by JavaScript

let xhr=new XMLHttpRequest()//XMLHttpRequest object (to request data from a web server)
xhr.open("GET","https://reqres.in/api/users",true)  //To send a request to a server, you can use the open() and send() methods 
//(method,url,async)
xhr.onload= function(){ //Define a Callback Function
    let mypro=new Promise((resolve,reject)=>{  
        if (this.status==200) {
            resolve(JSON.parse(this.responseText));
        } else {
            reject(this.status)
        }
    })
    // document.getElementById("gh").innerText=text.data.first_name
    
    mypro. then((text) =>document.getElementById("gh").innerText=text.data[2].first_name)
    .catch((errcode)=>console.log(`error wit status code ${errcode}`))
}
xhr.send()




const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://reqres.in/api/users/3');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();



fetch("https://dog.ceo/api/breeds/list/all",{
    // method:"GET",
    // headers:{
    //     'Content-Type':'appliction/json'//mime multipupose internet extetions to idntify type of content mp3 mp4
    // }
    // body:new FormData(formEL)
}).then((response)=>{
    response.json();
}).then((data)=>{
    console.log(respnse.data)
})

fetch('https://reqres.in/api/users/2')
  .then(response => response.json())
  .then(data => console.log(data.data.first_name));




		
