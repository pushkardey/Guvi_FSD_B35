//Async and await 
//it is the syntactic-sugar way of writing  the promise easier
//async and await both are inbuild keywords.
//it can be applied to functions 
//an async function always returns a promise
//await is the keyword which is used within async function
//try-catch:for the error handling statments
//await works within async and for the promises also
async function foo(){
    try {
    console.log("app execution......");
    let res= await bar();
    console.log(res);
    console.log("this is a testing code!!!");
    } catch (error) {
        console.log(error);
    }
    
    // console.log(result);
    }
    
    
    foo();
    
    function bar(){
        return new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("Code failed!!")),3000));
    }
    
    
    //making dependent operation effective
    //await-ing chain
    function foo(num){
        return new Promise((resolve,reject)=>setTimeout(()=>resolve(2*num),3000));
        }
    
    async function bar(){
     try {
        var res1=await foo(2);
        console.log(res1);
    
        var res2=await foo(res1);
        console.log(res2);
    
        var res3=await foo(res2);
        console.log(res3);
     } catch (error) {
         console.log(error)
     }
    }
    
    bar();
    
    //COvid19.html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Covid 19 Tracker</title>
    </head>
    <body>
        <div>
            <h1>Covid 19 Tracker</h1>
            <!-- <form id="myform">
                <input type="text"  id="country">
                <input type="submit" value="Search">
            </form> -->
            <!-- <form onsubmit="foo()">
            
            </form> -->
           
            <script src="script.js"></script>
            
            <!-- <div id="confirmed"></div> -->
            <div id="recovered"></div>
            <div id="deaths"></div>
            
        </div>
      
    </body>
    </html>
    //forr js
    var form=document.createElement("form");
    form.setAttribute("id","myform");
    
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","country");
    input.setAttribute("required",true);
    
    var sub=document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("value","search");
    form.append(input,sub);
    document.body.append(form);
    
    //code here create the div with id confirmed ,recovered here
    //bootstrap card
    let division=document.createElement("div");
    division.setAttribute("id","confirmed");
    document.body.append(division);
    
    var formres=document.getElementById("myform");
    formres.addEventListener("submit",(event)=>{
    event.preventDefault();//to overcome default behaviour
    var country=document.getElementById("country").value;
    console.log(country);
    var url=`https://api.covid19api.com/dayone/country/${country}`;
    
    covid(url);
    });
    
    async function covid(url){
    let response=await fetch(url);
    console.log(response);
    let data=await response.json();
    console.log(data);
    let index=data.length-1;
    
    let confirmed=document.getElementById("confirmed");
    let recovered=document.getElementById("recovered");
    let deaths=document.getElementById("deaths");
    
    confirmed.innerHTML=" ";
    confirmed.append(`Total confirmed cases :${data[index].Confirmed}`);
    
    }