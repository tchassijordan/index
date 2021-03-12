var slideindex =1;
showSlides(slideindex);
function plusSlide(n) {
	showSlides(slideindex += n);
}
function currentSlide(n) {
	showSlides(slideindex = n);
}
function showSlides (n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dots");
	if (n<1) {
		slideindex = slides.length;
	}
	if (n>slides.length) {
		slideindex = 1;
	}
	for (i=0;i<slides.length;i++){
		slides[i].style.display = "none";
	}
	 for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
	slides[slideindex - 1].style.display = "block";
	dots[slideindex-1].className += " active";
}
