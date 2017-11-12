$(document).ready(function(){
  var oldScrollY = 0;
  var scrolled = 0;
  var id = "";			// id ��������� �������� ��� �����
  var timeScroll = 1000; // ����� �������
  
  window.onscroll = function(event){
	  oldScrollY = scrolled;
	  scrolled = $(window).scrollTop();
	  if ($('html, body').is(':animated')) { // <- ���� �������� ��������, 
      return;								// 		����� �� �������
    };
  var dY = scrolled - oldScrollY;
  switch(id) {
  case "": 
		if(dY > 1) {
		$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		id = "centerBlock";
		}
		break;
  case "centerBlock":
		if(dY > 1) {
		$('html, body').animate({scrollTop:$("#Block1").offset().top}, timeScroll);
		id = "Block1";
		}
		else if (dY < 0) { $('html, body').animate({scrollTop:0}, timeScroll);
		id = "";
        }
		break;
  case "Block1":
		if(dY > 1) {
		  $('html, body').animate({scrollTop:$("#Block2").offset().top}, timeScroll)
		  id = "Block2";
		}
		else if (dY < 0) {$('html, body').animate({scrollTop:$("#centerBlock").offset().top}, timeScroll);
		id = "centerBlock";
		}
		break;
  case "Block2":
		if(dY < 0) {
		$('html, body').animate({scrollTop:$("#Block1").offset().top}, timeScroll);
		id = "Block1";
		}
		else if(dY > 1) {
		  $('html, body').animate({scrollTop:$("#footer").offset().top}, 500)
		  id = "footer";
		}
		break;
  case "footer":
		if(dY < 0) {
		  $('html, body').animate({scrollTop:$("#Block2").offset().top}, 500);
		  id = "Block2";
		}
		break;
  }
  };
});