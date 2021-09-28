// const { application } = require("express");

// const e = require("express");

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });



const contactForm = document.querySelector('#contact-form');
let name = document.getElementById('user_name');
let email = document.getElementById('user_email');
let message = document.getElementById('user_message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

  let formData = {
    name: user_name.value,
    email: user_email.value,
    message: user_message.value

  };


  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email sent!');
      user_name.value = '';
      user_email.value = '';
      user_message.value = '';
    }else{
      alert('Something went wrong!');
    }
  }
  xhr.send(JSON.stringify(formData));

});