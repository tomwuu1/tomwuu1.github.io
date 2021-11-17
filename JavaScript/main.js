let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://z3.ax1x.com/2021/11/16/IWLqKA.png') {
      myImage.setAttribute('src', '../image/firefox2.png');
    } else {
      myImage.setAttribute('src', 'https://z3.ax1x.com/2021/11/16/IWLqKA.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//let myName = prompt("My sweetheart please input your name");
function setUserName(){
    let userName = prompt('请您输入您的姓名');
    localStorage.setItem('name',userName);
    myHeading.textContent = userName +"您来啦^-^";
}
if(!localStorage.getItem('name')){
    setUserName();
}
else {
    let storagedName = localStorage.getItem('name');
    myHeading.textContent = storagedName + "您来啦^-^";
}
myButton.onclick = function(){
    setUserName();
}
