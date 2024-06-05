let changeLayout = document.getElementById("gridLayout");
function changeGridColumn() {
  changeLayout.classList.toggle("listLayout");
  let productsFootwear = document.getElementById('products_footwear');
  productsFootwear.classList.toggle("narrow_products_footwear");
}


let collapsible = document.querySelectorAll('.expand');
let plus_sign = document.querySelectorAll(".plus_sign");
function collapse(a){
    if (a == 1) {
        collapsible[1].classList.toggle("brand_color_collapse");
        collapsible[0].classList.add("brand_color_collapse");
        plus_sign[1].classList.toggle("crossx");
        plus_sign[0].classList.remove("crossx");
    }
    else{
        collapsible[0].classList.toggle("brand_color_collapse");
        collapsible[1].classList.add("brand_color_collapse");
        plus_sign[0].classList.toggle("crossx");
        plus_sign[1].classList.remove("crossx");
    }
}





//Navbar and Login Signup

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".header");
  var upNav = document.querySelector(".up-nav");
  var logo = document.querySelector(".logo");
  var downNav = document.querySelector(".down-nav");
  navbar.classList.toggle("sticky", window.scrollY);
  logo.classList.toggle("reduce", window.scrollY);
  upNav.classList.toggle("fed", window.scrollY);
  downNav.classList.toggle("expand", window.scrollY);
});
//animated sign in appear
document.querySelector("#sign").addEventListener("mouseover", function () {
  console.log("h");
  document.querySelector(".speech-bubble").classList.add("display");
});
document.querySelector(".keep").addEventListener("mouseover", function () {
  console.log("f");
  document.querySelector(".speech-bubble").classList.add("display");
});
document.querySelector(".keep").addEventListener("mouseout", function () {
  console.log("f");
  document.querySelector(".speech-bubble").classList.remove("display");
});
document.querySelector(".accounts").addEventListener("mouseover", function () {
  document.querySelector(".speech-bubble").classList.add("display");
});
//----- appear end

var searchExpand = document.querySelector("#search-expand");
searchExpand.addEventListener("focus", function () {
  var search = document.querySelector(".search");
  var searchIcon = document.querySelector(".search-icon");
  var cross = document.querySelector(".cross");
  cross.style.opacity = 1;
  searchIcon.classList.add("fedd");
  search.classList.add("strech");
});
var cross = document.querySelector(".cross");
cross.addEventListener("click", function () {
  var search = document.querySelector(".search");
  var searchIcon = document.querySelector(".search-icon");
  searchIcon.classList.remove("fedd");
  search.classList.remove("strech");
  cross.style.opacity = 0;
});

//category dropdown
var black = document.getElementsByClassName("sub-category-value");
var blogo = document.querySelectorAll("Blogo");
console.log(blogo[0]);
var subCategoryOption = document.querySelectorAll(".sub-category-option");
var arrow = document.querySelectorAll(".arrow");
var section = document.querySelectorAll("section");
var categoryExpand = document.querySelector(".category-expand");
var categoryExpandb = document.querySelector(".b");
function show(a) {
  if (a == 0) {
    section[Number(a) + 1].style.display = "none";
    section[Number(a)].style.display = "flex";
    arrow[Number(a) + 1].classList.remove("arrow-icon");
    black[Number(a)].classList.remove("black");
    black[Number(a)].classList.add("black");
    black[Number(a) + 1].classList.remove("black");
  }
  categoryExpand.style.display = "flex";
  arrow[+a].classList.add("arrow-icon");
  arrow[Number(a) + 1].classList.remove("arrow-icon");
  arrow[Number(a) - 1].classList.remove("arrow-icon");
  section[+a].style.display = "flex";
  section[Number(a) + 1].style.display = "none";
  section[Number(a) - 1].style.display = "none";
  black[+a].classList.add("black");
  black[Number(a) - 1].classList.remove("black");
  black[Number(a) + 1].classList.remove("black");
  blogo[Number(a) - 8].classList.add("showb");
  blogo[Number(a) + 1 - 8].classList.remove("showb");
  blogo[Number(a) - 1 - 8].classList.remove("showb");
}
function hide(a) {
  categoryExpand.style.display = "none";
}
//brand dropdown
function showb(a) {
  console.log(Number(a));
  if (a == 15) {
    section[Number(a)].style.display = "flex";
    section[Number(a) - 1].style.display = "none";
    arrow[Number(a) - 1].classList.remove("arrow-icon");
    black[Number(a)].classList.remove("black");
    black[Number(a)].classList.add("black");
    black[Number(a) - 1].classList.remove("black");
  }
  categoryExpandb.style.display = "flex";
  arrow[+a].classList.add("arrow-icon");
  arrow[Number(a) + 1].classList.remove("arrow-icon");
  arrow[Number(a) - 1].classList.remove("arrow-icon");
  section[+a].style.display = "flex";
  section[Number(a) + 1].style.display = "none";
  section[Number(a) - 1].style.display = "none";
  black[+a].classList.add("black");
  black[Number(a) - 1].classList.remove("black");
  black[Number(a) + 1].classList.remove("black");
  blogo[Number(a) - 8].classList.add("showb");
  blogo[Number(a) + 1 - 8].classList.remove("showb");
  blogo[Number(a) - 1 - 8].classList.remove("showb");
}
function hideb(a) {
  categoryExpandb.style.display = "none";
}

// login signup page
///---------------------------------------------------base url------------------------------------------------------------------------;;
var baseUrl = "https://nexa-cliq-backend.onrender.com"
///-----------------------------------------------base url--------------------------------------------------------------------------------------;
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var loginData = localStorage.getItem("loginData");
if (loginData == null) {
//   loginData = [];
  //sign up data store starts
  function register(e) {
    e.preventDefault();
    let signupform = document.querySelector("#signup-form");
    let name = signupform.name.value;
    let email = signupform.mail.value;
    let pass = signupform.pass.value;

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
            console.log("from register")
        swal("Already registered", "Please login", "warning")
        signupform.name.value=""
        signupform.mail.value=""
        signupform.pass.value=""
        container.classList.remove("right-panel-active");
        }
        else{
            console.log("from login")
        swal("Registered", "Please login", "success")
        signupform.name.value=""
        signupform.mail.value=""
        signupform.pass.value=""
        container.classList.remove("right-panel-active");
        }

    })


  }
  //sign up data store  ends

  //login authentication starts

  function login(e) {
    e.preventDefault();
    let loginForm = document.querySelector("#login-form");
    let email = loginForm.email.value;
    let pass = loginForm.passw.value;

    var userdata;
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
            console.log("hello from login")
            swal("wrong credentials", "Please try again with the correct details", "warning")
        }
        else{
            swal("Login Success", "", "success")
            userdata=res.data
        //    username.innerHTML=userdata[0].name
            // Logout.innerHTML="Logout"
            localStorage.setItem("token",res.token)
            // localStorage.setItem("user",JSON.stringify(userdata))

            clos();

            loginData=userdata
            localStorage.setItem('loginData',JSON.stringify(loginData)) 
            document.querySelector('.sig').style.display = "none"
            document.querySelector('.accounts').style.display = "flex"
            document.querySelector('.register').style.display = "none"
            document.querySelector('.logout').style.display = "flex"
            // document.querySelector('.UserName').textContent = userData[i].name;
            location.reload()
           
        }
    
    })


  }
  //login authentication ends
  // signIn signup page render
  function ope() {
    var cover = document.querySelector(".cover");
    cover.style.display = "block";
  }
  function clos() {
    var cover = document.querySelector(".cover");
    cover.style.display = "none";
  }
} else {
  document.querySelector(".sig").style.display = "none";
  document.querySelector(".accounts").style.display = "flex";
  document.querySelector(".register").style.display = "none";
  document.querySelector(".logout").style.display = "flex";
  document.querySelector(".UserName").textContent =
    JSON.parse(loginData)[0].name;
}

function logout() {
  localStorage.removeItem("loginData");
  localStorage.removeItem("token");
  location.reload();
}

//mobile nav
var count  = 0;
document.querySelector('.ham').addEventListener('click',function(){
    if(count%2==0){
        document.querySelector('.mob-nav').style.opacity = 1
    document.querySelector('.header').style.height = '280'+'px'
    }
    else{
        document.querySelector('.mob-nav').style.opacity = 0 
    document.querySelector('.header').style.height = '60'+'px'
    }
    count++
})

window.addEventListener("resize", changequery);
function changequery() {
  location.reload()
}
