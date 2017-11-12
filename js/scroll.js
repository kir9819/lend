$(document).ready(function(){
  var oldScrollY = 0;
  var scrolled = 0;
  var id = "";
  var timeScroll = 2000;
  var check = true;
  console.log("window" + window.innerHeight);
  //function stop() {check = true;} 
  
  window.onscroll = function(event){
	  oldScrollY = scrolled;
	  scrolled = $(window).scrollTop();
	  console.log("old " + oldScrollY);
	  console.log("new " + scrolled);
	  if ($('html, body').is(':animated')) { // <-рср
      return;
    };
  //scrolled = $(window).scrollTop(); //= window.pageYOffset || document.documentElement.scrollTop;
  //console.log("new " + scrolled);
  //if (check) {var dY = scrolled - oldScrollY;
  //check = false;}
  var dY = scrolled - oldScrollY;
  //console.log("dY " + dY);
  //console.log("w " + $(window).scrollTop());
  //if($(window).scrollTop() == window.innerHeight) { id = "centerBlock"}
  //if($(window).scrollTop() == 0) { id = ""}
  //if($(window).scrollTop() > 2*window.innerHeight) {id="Block2"}
  //console.log($(window));
  //if($(window).scrollTop() < window.innerHeight) {
  switch(id) {
  case "": 
		if(dY > 1) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		//if($(window).scrollTop() == window.innerHeight-1){id = "centerBlock";}
		id = "centerBlock";
		
		//check = true;}
		
		}
		console.log("___________0");
		break;
  case "centerBlock":
		if(dY > 1) {
		$('html, body').animate({scrollTop:$("#Block2").offset().top}, timeScroll);
		//if ($(window).scrollTop() == 2*window.innerHeight-1){id = "Block2";}
		console.log("try down");
		id = "Block2";
		}
		else if (dY < 0) { $('html, body').animate({scrollTop:0}, timeScroll);
		//if ($(window).scrollTop() == 0) {id = "";}
		console.log("try up");
		id = "";
		//var dY = scrolled - oldScrollY;}
        }
		console.log("___________1");
		break;
  case "Block2":
		if(dY < 0) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		//if($(window).scrollTop() == window.innerHeight) {id="centerBlock";}
		id = "centerBlock";
		//oldScrollY = scrolled;
		}
		console.log("___________2");
		break;
  }
  //oldScrollY = scrolled;
  //if (dY > 0) { 
  // var position = $("#centerBlock").offset().top; 
  //$('html, body').animate({scrollTop:position}, 1000); 
  //window.scrollTo(0, 701);
  //console.log(event);}
  
  //if (dY < 0) { $('html, body').animate({scrollTop:0}, 1000);}
  
  };
});