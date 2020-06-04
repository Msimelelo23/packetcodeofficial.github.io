// CODE FOR THE THE FAQ SECTION ON THE ABOUT PAGE
const items = document.querySelectorAll(".accordion a");


function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// CODE FOR THE IMAGES THAT ARE DISPLAYED ON THE GALLERY PAGE 
var img = document.getElementById('img');
// An Array that contains my images
var images = ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg'];

var x = 0;
// slide function
function slide() {
    if (x<images.length) {
        x = x+1;
    } else {
        x = 1;
    }
    img.innerHTML = "<img src="+images[x-1]+">";
}

// auto slider
setInterval(slide, 3000);
    



