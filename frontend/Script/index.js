// var inputKey = ""
//  function myFunction(e){
//      inputKey+=e.key 
//    console.log(inputKey);
//  }
   
//    var x = localStorage.getItem('bagItem')
//     if(x==null){
      
//     }
//     else{
//      document.querySelector('.numb').style.display = 'flex'
//      x = JSON.parse(localStorage.getItem('bagItem'))
//      document.querySelector('.numb').innerHTML = x.length
//      }
//     let span = document.getElementsByClassName("scroller");
//     let div = document.getElementsByClassName('caraousel_images');
//     let l = 0;
//     function leftt() {
//         l++;
//         for(let i of div){
//             if(l==0){i.style.left = "0px"}
//             if(l==1){i.style.left = "-250px"}
//             if(l==2){i.style.left = "-500px"}
//             if(l==3){i.style.left = "-750px"}
//             if(l==4){i.style.left = "-1250px"}
//             if(l==5){i.style.left = "-1500px"}
//             if(l==6){i.style.left = "-1750px"}
//             if(l==7){i.style.left = "-2000px"}
//             if(l>7){l = 0;}
//         }
//     }
//     function rightt() {
//         l--;    
//         for(let i of div){
//             if(l==0){i.style.left = "0px"}
//             if(l==1){i.style.left = "-250px"}
//             if(l==2){i.style.left = "-500px"}
//             if(l==3){i.style.left = "-750px"}
//             if(l==4){i.style.left = "-1250px"}
//             if(l==5){i.style.left = "-1500px"}
//             if(l==6){i.style.left = "-1750px"}
//             if(l==7){i.style.left = "-2000px"}
//             if(l<1){l = 0;}
//         }
//     }




// window.addEventListener('scroll',function(){
//     var navbar = document.querySelector(".header");
//     var upNav = document.querySelector(".up-nav");
//     var logo = document.querySelector(".logo");
//     var downNav = document.querySelector(".down-nav");
//     navbar.classList.toggle('sticky',window.scrollY)
//     logo.classList.toggle('reduce',window.scrollY)    
//     upNav.classList.toggle('fed',window.scrollY)
//     downNav.classList.toggle('expand',window.scrollY)
//     })
//   //animated sign in appear
//     document.querySelector('#sign').addEventListener('mouseover',function(){
//         console.log("h");
//         document.querySelector('.speech-bubble').classList.add('display')
//     })
//     document.querySelector('.keep').addEventListener('mouseover',function(){
//         console.log("f");
//         document.querySelector('.speech-bubble').classList.add('display')
//     })
//     document.querySelector('.keep').addEventListener('mouseout',function(){
//         console.log("f");
//         document.querySelector('.speech-bubble').classList.remove('display')
//     })
//     document.querySelector('.accounts').addEventListener('mouseover',function(){
//         document.querySelector('.speech-bubble').classList.add('display')
        
//     })
// //----- appear end

//     var searchExpand = document.querySelector('#search-expand')
//     searchExpand.addEventListener('focus',function(){
//         var search = document.querySelector('.search');
//         var searchIcon = document.querySelector('.search-icon');
//         var cross = document.querySelector('.cross');
//         cross.style.opacity = 1;
//         searchIcon.classList.add('fedd')
//         search.classList.add('strech')
//     })
//     var cross = document.querySelector('.cross');
//     cross.addEventListener('click',function(){
//         var search = document.querySelector('.search');
//         var searchIcon = document.querySelector('.search-icon');
//         searchIcon.classList.remove('fedd')
//         search.classList.remove('strech')
//         cross.style.opacity=0
//     })

//     //category dropdown
//     var black = document.getElementsByClassName('sub-category-value')
//     var blogo = document.querySelectorAll('Blogo')
//     console.log(blogo[0]);
//     var subCategoryOption = document.querySelectorAll('.sub-category-option');
//     var arrow = document.querySelectorAll('.arrow'); 
//     var section = document.querySelectorAll('section');
//     var categoryExpand = document.querySelector('.category-expand');
//     var categoryExpandb = document.querySelector('.b');
//     function show(a){
//         if(a==0){
//         section[Number(a)+1].style.display = "none"
//         section[Number(a)].style.display = "flex"
//         arrow[Number(a)+1].classList.remove('arrow-icon')
//         black[Number(a)].classList.remove('black')
//         black[Number(a)].classList.add('black')
//         black[Number(a)+1].classList.remove('black')
        
//         }
//         categoryExpand.style.display = 'flex';
//         arrow[+a].classList.add('arrow-icon')
//         arrow[Number(a)+1].classList.remove('arrow-icon')
//         arrow[Number(a)-1].classList.remove('arrow-icon')
//         section[+a].style.display = "flex"
//         section[Number(a)+1].style.display = "none"
//         section[Number(a)-1].style.display = "none"
//         black[+a].classList.add('black')
//         black[Number(a)-1].classList.remove('black')
//         black[Number(a)+1].classList.remove('black')
//         blogo[Number(a)-8].classList.add('showb')
//         blogo[Number(a)+1-8].classList.remove('showb')
//         blogo[Number(a)-1-8].classList.remove('showb')
//     }
//     function hide(a){
//         categoryExpand.style.display = 'none'
//     }
//     //brand dropdown
//     function showb(a){     
//         console.log( Number(a));
//         if(a==15){
//             section[Number(a)].style.display = "flex"
//             section[Number(a)-1].style.display = "none"
//             arrow[Number(a)-1].classList.remove('arrow-icon')
//             black[Number(a)].classList.remove('black')
//             black[Number(a)].classList.add('black')
//             black[Number(a)-1].classList.remove('black')
//             }
//         categoryExpandb.style.display = 'flex';
//         arrow[+a].classList.add('arrow-icon')
//         arrow[Number(a)+1].classList.remove('arrow-icon')
//         arrow[Number(a)-1].classList.remove('arrow-icon')
//         section[+a].style.display = "flex"
//         section[Number(a)+1].style.display = "none"
//         section[Number(a)-1].style.display = "none" 
//         black[+a].classList.add('black')
//         black[Number(a)-1].classList.remove('black')
//         black[Number(a)+1].classList.remove('black')
//         blogo[Number(a)-8].classList.add('showb')
//         blogo[Number(a)+1-8].classList.remove('showb')
//         blogo[Number(a)-1-8].classList.remove('showb')
//     }
//     function hideb(a){
//     categoryExpandb.style.display = 'none';
// }










// // /mobile nav
// var count  = 0;
// document.querySelector('.ham').addEventListener('click',function(){
//     if(count%2==0){
//         document.querySelector('.mob-nav').style.opacity = 1
//     document.querySelector('.header').style.height = '280'+'px'
//     }
//     else{
//         document.querySelector('.mob-nav').style.opacity = 0 
//     document.querySelector('.header').style.height = '60'+'px'
//     }
//     count++
// })

// var counter = 1;
// setInterval(function(){
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if(counter > 4){
//     counter = 1;
//   }
// }, 2000);
// let le = 1;
// function nex() {
//     document.getElementById('radio' + le).checked = true; 
//     le++;
//     if(le > 4){
//        le = 1;
//       }
// }
// function pre() {
//     le--;
//     if(le<1){
//         le=4
//     }
//     document.getElementById('radio' + le).checked = true; 
//     if(le < 1){
//        le = 4;
//       }
// }
// window.addEventListener("resize", changequery);
// function changequery() {
//   location.reload();
// }






// // login signup page

// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });








var inputKey = ""
 function myFunction(e){
     inputKey+=e.key 
   console.log(inputKey);
 }
   
   var x = localStorage.getItem('bagItem')
    if(x==null){
      
    }
    else{
     document.querySelector('.numb').style.display = 'flex'
     x = JSON.parse(localStorage.getItem('bagItem'))
     document.querySelector('.numb').innerHTML = x.length
     }
    let span = document.getElementsByClassName("scroller");
    let div = document.getElementsByClassName('caraousel_images');
    let l = 0;
    function leftt() {
        l++;
        for(let i of div){
            if(l==0){i.style.left = "0px"}
            if(l==1){i.style.left = "-250px"}
            if(l==2){i.style.left = "-500px"}
            if(l==3){i.style.left = "-750px"}
            if(l==4){i.style.left = "-1250px"}
            if(l==5){i.style.left = "-1500px"}
            if(l==6){i.style.left = "-1750px"}
            if(l==7){i.style.left = "-2000px"}
            if(l>7){l = 0;}
        }
    }
    function rightt() {
        l--;    
        for(let i of div){
            if(l==0){i.style.left = "0px"}
            if(l==1){i.style.left = "-250px"}
            if(l==2){i.style.left = "-500px"}
            if(l==3){i.style.left = "-750px"}
            if(l==4){i.style.left = "-1250px"}
            if(l==5){i.style.left = "-1500px"}
            if(l==6){i.style.left = "-1750px"}
            if(l==7){i.style.left = "-2000px"}
            if(l<1){l = 0;}
        }
    }




window.addEventListener('scroll',function(){
    var navbar = document.querySelector(".header");
    var upNav = document.querySelector(".up-nav");
    var logo = document.querySelector(".logo");
    var downNav = document.querySelector(".down-nav");
    navbar.classList.toggle('sticky',window.scrollY)
    logo.classList.toggle('reduce',window.scrollY)    
    upNav.classList.toggle('fed',window.scrollY)
    downNav.classList.toggle('expand',window.scrollY)
    })
  //animated sign in appear
    document.querySelector('#sign').addEventListener('mouseover',function(){
        console.log("h");
        document.querySelector('.speech-bubble').classList.add('display')
    })
    document.querySelector('.keep').addEventListener('mouseover',function(){
        console.log("f");
        document.querySelector('.speech-bubble').classList.add('display')
    })
    document.querySelector('.keep').addEventListener('mouseout',function(){
        console.log("f");
        document.querySelector('.speech-bubble').classList.remove('display')
    })
    document.querySelector('.accounts').addEventListener('mouseover',function(){
        document.querySelector('.speech-bubble').classList.add('display')
        
    })
//----- appear end

    var searchExpand = document.querySelector('#search-expand')
    searchExpand.addEventListener('focus',function(){
        var search = document.querySelector('.search');
        var searchIcon = document.querySelector('.search-icon');
        var cross = document.querySelector('.cross');
        cross.style.opacity = 1;
        searchIcon.classList.add('fedd')
        search.classList.add('strech')
    })
    var cross = document.querySelector('.cross');
    cross.addEventListener('click',function(){
        var search = document.querySelector('.search');
        var searchIcon = document.querySelector('.search-icon');
        searchIcon.classList.remove('fedd')
        search.classList.remove('strech')
        cross.style.opacity=0
    })

    //category dropdown
    var black = document.getElementsByClassName('sub-category-value')
    var blogo = document.querySelectorAll('Blogo')
    console.log(blogo[0]);
    var subCategoryOption = document.querySelectorAll('.sub-category-option');
    var arrow = document.querySelectorAll('.arrow'); 
    var section = document.querySelectorAll('section');
    var categoryExpand = document.querySelector('.category-expand');
    var categoryExpandb = document.querySelector('.b');
    function show(a){
        if(a==0){
        section[Number(a)+1].style.display = "none"
        section[Number(a)].style.display = "flex"
        arrow[Number(a)+1].classList.remove('arrow-icon')
        black[Number(a)].classList.remove('black')
        black[Number(a)].classList.add('black')
        black[Number(a)+1].classList.remove('black')
        
        }
        categoryExpand.style.display = 'flex';
        arrow[+a].classList.add('arrow-icon')
        arrow[Number(a)+1].classList.remove('arrow-icon')
        arrow[Number(a)-1].classList.remove('arrow-icon')
        section[+a].style.display = "flex"
        section[Number(a)+1].style.display = "none"
        section[Number(a)-1].style.display = "none"
        black[+a].classList.add('black')
        black[Number(a)-1].classList.remove('black')
        black[Number(a)+1].classList.remove('black')
        blogo[Number(a)-8].classList.add('showb')
        blogo[Number(a)+1-8].classList.remove('showb')
        blogo[Number(a)-1-8].classList.remove('showb')
    }
    function hide(a){
        categoryExpand.style.display = 'none'
    }
    //brand dropdown
    function showb(a){     
        console.log( Number(a));
        if(a==15){
            section[Number(a)].style.display = "flex"
            section[Number(a)-1].style.display = "none"
            arrow[Number(a)-1].classList.remove('arrow-icon')
            black[Number(a)].classList.remove('black')
            black[Number(a)].classList.add('black')
            black[Number(a)-1].classList.remove('black')
            }
        categoryExpandb.style.display = 'flex';
        arrow[+a].classList.add('arrow-icon')
        arrow[Number(a)+1].classList.remove('arrow-icon')
        arrow[Number(a)-1].classList.remove('arrow-icon')
        section[+a].style.display = "flex"
        section[Number(a)+1].style.display = "none"
        section[Number(a)-1].style.display = "none" 
        black[+a].classList.add('black')
        black[Number(a)-1].classList.remove('black')
        black[Number(a)+1].classList.remove('black')
        blogo[Number(a)-8].classList.add('showb')
        blogo[Number(a)+1-8].classList.remove('showb')
        blogo[Number(a)-1-8].classList.remove('showb')
    }
    function hideb(a){
    categoryExpandb.style.display = 'none';
}

// login signup page

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var loginData = localStorage.getItem('loginData');
if(loginData == null){
   loginData = []
    //sign up data store starts
function register(e){
    e.preventDefault()
    let signupform = document.querySelector("#signup-form")
     let name = signupform.name.value;
     let mail = signupform.mail.value;
     let pass = signupform.pass.value;
     let a=1;

     let users = {
        name,
        mail,
        pass
    }; 

    if(users.name.trim() == '') alert('Enter Your Name');
    else if(users.mail.indexOf('@')==-1) alert('Enter Your Correct E-mail ID');
    else if(users.pass == '') alert('Password should not be Empty!')
    else{   
     let userData = localStorage.getItem("users")
     if(userData == null){
         userData = [];
        //  userData.push(users);
     }
     else{
         userData = JSON.parse(userData);
          console.log(userData);
    }
        userData.forEach(function(e){
            if(e.name == users.name && e.mail == users.mail){
                alert("You are already part of our family")
                a=0;
            }
        });
        if(a==1) userData.push(users)

     localStorage.setItem('users',JSON.stringify(userData));
     signupform.name.value=""
     signupform.mail.value=""
     signupform.pass.value=""
     container.classList.remove("right-panel-active");
    }
}
// sign up data store  ends
 
//login authentication starts


function login(e){
    e.preventDefault();
    let loginForm = document.querySelector("#login-form")
    let email = loginForm.email.value;
    let passw = loginForm.passw.value;

    let users = {
       email,
       passw
   }; 

   if(users.email.indexOf('@') == -1) alert('Enter Your Correct E-mail ID');
   else if(users.passw == '') alert('Password should not be Empty!')
   else{   
    let userData = localStorage.getItem('users')
    if(userData == null){
        alert("You are not registered!!")
        loginForm.email.value = ""  
        loginForm.passw.value = ""  
        container.classList.add("right-panel-active");
    }
    else{
        userData = JSON.parse(userData);
    }

    for(let i=0 ;i < userData.length ;i++){
        if(userData[i].mail == users.email && userData[i].pass == users.passw){
            clos();
            loginData.push(userData[i])
            localStorage.setItem('loginData',JSON.stringify(loginData)) 
            document.querySelector('.sig').style.display = "none"
            document.querySelector('.accounts').style.display = "flex"
            document.querySelector('.register').style.display = "none"
            document.querySelector('.logout').style.display = "flex"
            // document.querySelector('.UserName').textContent = userData[i].name;
            location.reload()
            
        }
        else if(i== userData.length-1){
          alert("Invalid Credentials")
        }
    }
 }
    
      
}
//login authentication ends
// signIn signup page render
function ope(){

    var cover = document.querySelector('.cover')
    cover.style.display='block'
}
function clos(){
    var cover = document.querySelector('.cover')
    cover.style.display='none'
}
}
else{
    document.querySelector('.sig').style.display = "none"
    document.querySelector('.accounts').style.display = "flex"
    document.querySelector('.register').style.display = "none"
    document.querySelector('.logout').style.display = "flex"
    // document.querySelector('.numb').style.display = "flex"
    document.querySelector('.UserName').textContent = JSON.parse(loginData)[0].name;


}


function logout(){
    localStorage.removeItem('loginData')
    location.reload()
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

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 2000);
let le = 1;
function nex() {
    document.getElementById('radio' + le).checked = true; 
    le++;
    if(le > 4){
       le = 1;
      }
}
function pre() {
    le--;
    if(le<1){
        le=4
    }
    document.getElementById('radio' + le).checked = true; 
    if(le < 1){
       le = 4;
      }
}
window.addEventListener("resize", changequery);
function changequery() {
  location.reload();
}
