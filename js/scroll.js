$(document).ready(function(){
  var oldScrollY = 0;
  var scrolled = 0;
  var id = "";			// id активного элемента для свича
  var timeScroll = 1000; // время скролла
  
  window.onscroll = function(event){
	  oldScrollY = scrolled;
	  scrolled = $(window).scrollTop();
	  console.log("old " + oldScrollY);
	  console.log("new " + scrolled);
	  if ($('html, body').is(':animated')) { // <- Если анимация работает, 
      return;								// 		выход из функции
    };
  var dY = scrolled - oldScrollY;
  switch(id) {
  case "": 
		if(dY > 1) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		id = "centerBlock";
		}
		console.log("___________0");
		break;
  case "centerBlock":
		if(dY > 1) {
		$('html, body').animate({scrollTop:$("#Block2").offset().top}, timeScroll);
		console.log("try down");
		id = "Block2";
		}
		else if (dY < 0) { $('html, body').animate({scrollTop:0}, timeScroll);
		console.log("try up");
		id = "";
        }
		console.log("___________1");
		break;
  case "Block2":
		if(dY < 0) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		id = "centerBlock";
		}
		console.log("___________2");
		break;
  }
  };
});