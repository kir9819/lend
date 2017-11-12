$(document).ready(function(){
	var oldScrollY = 0;
  var id = "";
  var timeScroll = 0;
  var check = true;
  
  window.onscroll = function(event){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (check) {var dY = scrolled - oldScrollY;
  check = false;}

  console.log(dY);
  //console.log($(window));
  //if($(window).scrollTop() < window.innerHeight) {
  switch(id) {
  case "": 
		if(dY > 0) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		id = "centerBlock";
		check = true;}
		break;
  case "centerBlock":
		if(dY > 0) {
		$('html, body').animate({scrollTop:$("#Block2").offset().top}, timeScroll);
		id = "Block2";
		
		}
		else { $('html, body').animate({scrollTop:0}, timeScroll);
		id = "";
		var dY = scrolled - oldScrollY;}
		break;
  case "Block2":
		if(dY < 0) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		id="centerBlock";
		}
		break;
  }
  oldScrollY = scrolled
  //if (dY > 0) { 
  // var position = $("#centerBlock").offset().top; 
  //$('html, body').animate({scrollTop:position}, 1000); 
  //window.scrollTo(0, 701);
  //console.log(event);}
  
  //if (dY < 0) { $('html, body').animate({scrollTop:0}, 1000);}
  
  };
});