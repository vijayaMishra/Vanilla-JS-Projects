//slides = array of all slide elements (div or img tag)
//dots = array of all dot elements
//slideIndex = the current slide number

let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    console.log(slides, dots);

    //hide all slides
    for(let i=0; i < slides.length;i++) {
        slides[i].style.display = "none";
    }
    for( i =0 ; i<dots.length; i++) {
        dots[i].classList.remove("active");
    }
    //this removes the "active" class from all dots, because only one dot (corresponding to the current slide) should be active. So we reset all dots first.
    
    slides[slideIndex - 1].style.display = "block";
    //shows only the current slide by setting display as 'block'
    //[slideIndex-1] because JS arrays are 0 based indexed, If slideIndex = 1, our first slide is at index 0

    //add active class to the current slide
    dots[slideIndex - 1].classList.add("active");
}