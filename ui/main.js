console.log('Loaded!');

//change the text of main text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//move the image
var image = document.getElementById("madi");
image.onclick = function(){
    image.style.marginLeft = "100px";
}