var baseUrl = "https://blue-coypu-gear.cyclic.app"
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");

close.addEventListener("click", () => {
    popup.style.display = "none";
});

var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalCl = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
});

modalCl.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
});

var modalBtn1 = document.querySelector(".modal-btn1");
var modalBg1 = document.querySelector(".modal-bg1");
var modalCl1 = document.querySelector(".modal-close1");

modalBtn1.addEventListener("click", function () {
    modalBg1.classList.add("bg-active1");
});

modalCl1.addEventListener("click", function () {
    modalBg1.classList.remove("bg-active1");
});


// Register as new user Signup
document.querySelector(".next").addEventListener("click", signUp);

function signUp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email1").value;
    var pass = document.getElementById("pass1").value;

    var userProfile = {
        name: name,
        email: email,
        password: pass,
    };

    fetch(`${baseUrl}/users/register`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(userProfile)
    }).then(res=>res.json())
    .then((res)=>{
        if(res.msg=="Already registered"){
        swal("Already registered", "Please login", "warning")
        }
        else{
        swal("Registered", "Please login", "success")
        }

    })
}


// login as user
document.querySelector(".signInn").addEventListener("click", signIn);
let username=document.getElementById("user")
let Logout=document.getElementById("logout")
var userdata;

function signIn() {
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
let obj={
    email,password:pass
}
fetch(`${baseUrl}/users/login`,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(obj)
}).then(res=>res.json())
.then((res)=>{
    if(res.msg=="wrong credentials"){
        swal("wrong credentials", "Please try again with the correct details", "warning")
    }
    else{
        swal("Login Success", "", "success")
        userdata=res.data
       username.innerHTML=userdata[0].name
        Logout.innerHTML="Logout"
        localStorage.setItem("token",res.token)
        localStorage.setItem("user",JSON.stringify(userdata))
       
    }

})
}


// Logout


Logout.addEventListener("click",()=>{
    localStorage.clear()
    username.innerHTML=""
    Logout.innerHTML=""
swal("Logout sucessfully", "", "success")
    window.location.href="#"
})



//  Admin Login 
let adminbutton=document.getElementById("admin")

adminbutton.addEventListener("click",()=>{
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
let obj={
    email,password:pass
}
fetch(`${baseUrl}/users/login`,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(obj)
}).then(res=>res.json())
.then((res)=>{
    if(res.msg=="wrong credentials"){
        swal("wrong credentials", "Please try again with the correct details", "warning")
    }
    else{
        if( res.data[0].name=="admin" &&  res.data[0].email=="admin"){
            window.location.href="admin.html"
            localStorage.setItem("token",res.token)
        }
        else{
            swal("wrong credentials", "Please try again with the correct details", "warning")
        }
    }
})
})