


// Header Scroll
    let nav = document.querySelector('.navbar');
    // if (!navbar) return;

// Tabnine | Edit | Test | Explain | Document
    window. onscroll = function(){


    if(document.documentElement.scrollTop >1){
    nav. classList.add('header-scrolled');
    }else{
    nav.classList.remove('header-scrolled');
    }

    }

// nav hide 
 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navCollapse .collapse");
// Tabnine | Edit | Test | Explain | Document
    navBar.forEach(function(a){
    a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
    })
    }) 

document.addEventListener("DOMContentLoaded", function () {
  // tumhara existing JS code yahin 
    
});



