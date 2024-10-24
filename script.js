var slidebar=document.querySelector(".slidebar");
var signup = document.querySelector("#signup");
var signinb = document.querySelector("#signinb");
var sinside= document.querySelector(".sinside");
var rinside= document.querySelector(".rinside");
var login = document.querySelector(".login");
var cdata = document.querySelectorAll("#cdata");
var sdata = document.querySelectorAll("#sdata");

signup.addEventListener("click",function(){
    gsap.to(slidebar,{
        right:"50%",
        borderRadius: "0 100px 100px 0"
    })
    gsap.to(login,{
        left:"50%",
        function(){
            setTimeout(function () {
                document.querySelector('.login h1').innerText = "Create Account";
                cdata.forEach(function(cedata){
                    cedata.style.display = "block";
                })
                sdata.forEach(function(sedata){
                    sedata.style.display = "none";
                })
                document.querySelector('.login h4').innerText = "Enter Your Details for Registration";
                document.querySelector('.login button').innerText = "Sign Up";
            }, 100); 
        }, 
    })
    gsap.to(sinside,{
        right:"-200%",
    })
    gsap.to(rinside,{
        right:"0%",
        function(){
            setTimeout(function () {
                rinside.style.display = "block";
            }, 100);         
        }
    })
});

signinb.addEventListener("click",function(){
    gsap.to(slidebar,{
        right:"0%",
        borderRadius: "100px 0 0 100px"
    })
    gsap.to(login,{
        left:"0%",
        function(){
            setTimeout(function () {
                document.querySelector('.login h1').innerText = "Sign in";
                cdata.forEach(function(cedata){
                    cedata.style.display = "none";
                })
                sdata.forEach(function(sedata){
                    sedata.style.display = "block";
                })
                document.querySelector('.login h4').innerText = "Enter Your Details to Continue";
                document.querySelector('.login button').innerText = "SIGN IN";
            }, 100); 
        }, 
    })
    gsap.to(sinside,{
        right:"0%",
    })
    gsap.to(rinside,{
        right:"200%",
        function(){
            setTimeout(function () {
                rinside.style.display = "none";
            }, 120);         
        }
    })
})

var cursior = document.querySelector(".cursior");

document.addEventListener("mousemove",function(Details){
    gsap.to(cursior,{
        top: Details.clientY - cursior.offsetWidth * 0.5 + "px",
        left: Details.clientX - cursior.offsetWidth * 0.5 + "px",
    })
})

var buttons=document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("mouseenter",function(){
        gsap.to(cursior,{
            width:"50px",
            height:"50px",
            border:"1px solid #87c5ba",
            backgroundColor:"transparent",
            ease: "Power1.easein"
        })
    }) 
    button.addEventListener("mouseleave",function(){
        gsap.to(cursior,{
            width:"20px",
            height:"20px",
            border:"0",
            backgroundColor:"#00ff9d",
            ease:"Power1.easeOut"
        })
    }) 
})

var inputs=document.querySelectorAll("input");

inputs.forEach(function(input){
    input.addEventListener("mouseenter",function(){
        gsap.to(cursior,{
            width:"50px",
            height:"50px",
            border:"1px solid #87c5ba",
            backgroundColor:"transparent",
            ease: "Power1.easein"
        })
    }) 
    input.addEventListener("mouseleave",function(){
        gsap.to(cursior,{
            width:"20px",
            height:"20px",
            border:"0",
            backgroundColor:"#00ff9d",
            ease:"Power1.easeOut"
        })
    }) 
})

var icons=document.querySelectorAll(".icon");

icons.forEach(function(icon){
    icon.addEventListener("mouseenter",function(){
        gsap.to(cursior,{
            width:"50px",
            height:"50px",
            border:"1px solid #87c5ba",
            backgroundColor:"transparent",
            ease: "Power1.easein"
        })
    }) 
    icon.addEventListener("mouseleave",function(){
        gsap.to(cursior,{
            width:"20px",
            height:"20px",
            border:"0",
            backgroundColor:"#00ff9d",
            ease:"Power1.easeOut"
        })
    }) 
})