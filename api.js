const { json } = require("stream/consumers")


let xhr=new XMLHttpRequest()//inatiated request
xhr.open("GET","https://reqres.in/api/users/2",true)//start by get method from the website and tru for aysnc
xhr.onload= function(){
 const obj=   JSON.parse(xhr.responseText)
    document.getElementById("gh").innerText=obj.data.first_name
    console.log(xhr.responseText)

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




		