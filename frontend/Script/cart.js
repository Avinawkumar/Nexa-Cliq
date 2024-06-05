window.addEventListener('scroll',function(){
    var navbar = document.querySelector(".nav");
    var navbar2 = document.querySelector(".sec");
    navbar.classList.toggle('sticky',window.scrollY)
    navbar2.classList.toggle('sticky1',window.scrollY)
    })

// document.querySelector('.accounts').addEventListener('mouseover',function(){
//     document.querySelector('.speech-bubble').classList.add('display')
// })
// document.querySelector('.keep').addEventListener('mouseover',function(){
//     document.querySelector('.speech-bubble').classList.add('display')
// })
// document.querySelector('.keep').addEventListener('mouseout',function(){
//     document.querySelector('.speech-bubble').classList.remove('display')
// })




let loggedIn = JSON.parse(localStorage.getItem("loginData"));
document.querySelector(".UserName").textContent = loggedIn[0].name;




// cart item

var arr

//------------------------------------------------------------------------------base url------------------------------------------------------------
var baseUrl = "https://nexa-cliq-backend.onrender.com"
// -------------------------------------------------------------------------------------------------------------------------------------
let cont=document.getElementById("order-container")
let totalbill=document.querySelector("#total-price")
var totalprice


// To get userdata on navbar

let user_data=JSON.parse(localStorage.getItem("user"))||[]
let token=localStorage.getItem("token")
let user_name=document.getElementById("user")
let logout=document.getElementById("logout")

// if(user_data.length>0){
// user_name.innerHTML=user_data[0].name
// logout.innerHTML="Logout"
// }






window.addEventListener("load", async() => {
    try{
if(!token){
    swal("Please Login first").then(function(){
        window.location.href="index.html"
      })
}
else{
let res=await fetch(`${baseUrl}/cart`,{
    method:"GET",
    headers:{
        "Authorization":token
    }
})
let data= await res.json()
// console.log(data)
arr=data
console.log(arr)
display(arr)
total()
}
    }catch(err){
        console.log(err)
    }
})


function display(dataArr){
  cont.innerHTML=""
  dataArr.forEach((element,index) => {
    let div=document.createElement("div")
    div.setAttribute("class","cart-cards")
    let imagediv=document.createElement("div")
    imagediv.setAttribute("class","image-div")
    let image=document.createElement("img")
    image.setAttribute("src",element.image)
    imagediv.append(image)
    let Contentdiv=document.createElement("div")
    Contentdiv.setAttribute("class","content-div")
    let name=document.createElement("h3")
    name.innerText=element.name
    let price=document.createElement("p")
    price.innerText=element.price
   Contentdiv.append(name,price)
   let changerdiv=document.createElement("div")
   changerdiv.setAttribute("class","changer-div")
    let quantity=document.createElement("span")
    quantity.innerText=element.quantity
    let plus=document.createElement("button")
    plus.setAttribute("class","plusminus")
    plus.innerText='+'
    plus.addEventListener("click",()=>{
    let id=element._id
    let q=element.quantity+1
    fetch(`${baseUrl}/cart/update/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json",
            "Authorization":token
        },
        body:JSON.stringify({quantity:q})
    }).then(res=>res.json())
    .then((res)=>{
        if(res.msg=="updated"){
            window.location.href="cart.html"
        }
        
    })



    })
    let minus=document.createElement("button")
    minus.setAttribute("class","plusminus")
    minus.innerText='-'
    minus.addEventListener("click",()=>{
      if(element.quantity!=1){
        let id=element._id
        let q=element.quantity-1
        fetch(`${baseUrl}/cart/update/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({quantity:q})
        }).then(res=>res.json())
        .then((res)=>{
            if(res.msg=="updated"){
                window.location.href="cart.html"
            }
            
        })
      }
    })
    let del=document.createElement("button")
    del.setAttribute("class","remove-btn")
    del.innerText="REMOVE"
    del.addEventListener("click",()=>{
      dlt(element)
    })
    changerdiv.append(plus,quantity,minus,del)
    div.append(imagediv,Contentdiv,changerdiv)
    cont.append(div)
  });
}



function dlt(element){
        let id=element._id
        fetch(`${baseUrl}/cart/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":token
            }
        }).then(res=>res.json())
        .then((res)=>{
            if(res.msg=="deleted"){
                window.location.href="cart.html"
            }
            
        })
      }





// total price 
function total(){
 totalprice=arr.reduce((acc,item)=>{
  return acc+(item.price*item.quantity)
},0)
 totalbill.innerText=totalprice
 ordervalue.innerText=totalprice
}

//discount coupon

let ordervalue=document.getElementById("discount-price")
let coupon=document.getElementById("coupon-code")
let sumbit=document.getElementById("coupon-submit")

sumbit.addEventListener("click",()=>{
    if(coupon.value=="NQFIRST10"){
        swal("Coupon Applied", "", "success")
    ordervalue.innerText=totalprice-(totalprice*10/100)
    let store=totalprice-(totalprice*10/100)
    localStorage.setItem("total",JSON.stringify(store))
    }
    else{
        swal("Invalid Coupon", "Please try with the correct one", "warning")
    }
})





