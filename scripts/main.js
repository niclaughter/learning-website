var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');



myButton.onclick = function() {
  setUserName();
}

myHeading.onclick = function() {
  if (myHeading.textContent != "Hello world!") {
    myHeading.textContent = "Hello world!"
  } else {
    myHeading.textContent = "I love Java Script!"
  }
}

function setUserName() {
  var userName = prompt('Please enter your name.');
  localStorage.setItem('name', userName);
  myHeading.textContent = userName + ' loves JavaScript, too!'
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName + '! JavaScript is still great!'
}