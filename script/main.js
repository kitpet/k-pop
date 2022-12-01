var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/jk.jpg') {
        myImage.setAttribute ('src','image/v.jpg');
    } else {
        myImage.setAttribute ('src','image/jk.jpg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('джей');
    localStorage.setItem('jay', myName);
    myHeading.textContent = 'welcome ' + myName;
}
if(!localStorage.getItem('jay')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('jay');
    myHeading.textContent = 'hi ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
