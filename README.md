<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
	<title>QCC</title>
<!-- (Another way to apply external styles on an html page)
	<style>
	@import "style2.css";
	</style> 
-->
	<link rel="stylesheet" href="style2.css">
	<script src="js.js"></script>
	<div class="nav">
		<a href="#home">Home<ul><li>link 1</li><li>link 2</li><li>link 3</li><li>link 4</li></ul></a>
		<a href="#store-blog">Store¨¨</a>
		<a href="#faq">FAQ</a>
		<span class="search-container"><button id="butt"></button></span>
	</div>
	</head>
<body>
	<!-- This is the slideshow section, at the moment sliding through is still manual -->
	<div class="slideshow"> 
			<button id="demo" class="middle-left" onclick="plusSlide(-1)"><i class="far fa-arrow-alt-circle-left"></i></button>
			<button class="middle-right" onclick="plusSlide(1)"><i class="far fa-arrow-alt-circle-right"></i></button>
		<div class="slides fade">
			
			<img src="images/musical.jpg" alt="Cake" style="width: 100%;">
			
		</div>
		<div class="slides fade">
			
			<img src="images/chocolate.jpg" alt="Cake" style="width: 100%">
			
		</div>
		<div class="slides fade">
			
			<img src="images/cupcake3.jpg" alt="Cake" style="width: 100%">
			
		</div>
		<div class="slides fade">
			
			<img src="images/city-church-christchurch-qy__yBHYeYo-unsplash.jpg" alt="Cake" style="width: 100%">
			
		</div>
		<div class="slides fade">
			
			<img src="images/donuts.jpg" alt="Cake" style="width: 100%">
			
		</div>
		<div class="inline-text">Queen's Creamy Cake</div>
		<div class="dots-container">
			<span class="dots" onclick="currentSlide(1)"></span>
			<span class="dots" onclick="currentSlide(2)"></span>
			<span class="dots" onclick="currentSlide(3)"></span>
			<span class="dots" onclick="currentSlide(4)"></span>
			<span class="dots" onclick="currentSlide(5)"></span>
		</div>
	</div>
	<div id="store">
		<div id="store-blog">STORE</div>
		<div class="space"><span  id="time-zone" class="time"></span></div>
		<div class="image-container">
		<div class="column-left">
			<img src="images/lion.png" alt="lion">
			Lion
		</div>
		<div class="column-right">
			<img src="images/zoom.jpg" alt="zoom">
			Zoom
		</div>
		<div class="column-left">
			<img src="Cake%201.jpg" alt="Cake">
			Cake
		</div>
		<div class="column-right">
			<img src="images/apple.jpg" alt="apple">
			Apple
		</div>
		<div class="column-left">
			<img src="images/cards.jpg" alt="cards">
			Cards
		</div>
		<div class="column-right">
			<img src="images/train.jpg" alt="train">
			Train
		</div>
		<div class="column-left">
			<img src="images/city.jpg" alt="city">
			City
		</div>
		<div class="column-right">
			<img src="images/parot.jpg" alt="parot">
			Parots
		</div>
		<div class="column-left">
			<img src="images/sunset.jpg" alt="sunset">
			Sunset0
		</div>
		<div class="column-right">
			<img src="images/dice2.jpg" alt="dice2">
			Dice
		</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	
	<div class="bottom-section">
		<div id="faq">
		<ul>
			<li>Contact</li>
			<li>Why Us</li>
			<li>Email</li>
			<li>Addresss</li>
			
		</ul>
		</div>
	</div> 

	
	
	
	</body>
</html>
