
  
var menButton = document.querySelector('.menuButton');
menButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	
	this.nextElementSibling.style.transition = "0.3s";


 if (this.nextElementSibling.style.display === "block") {
        this.nextElementSibling.style.display = "none";
    } else
		{
        this.nextElementSibling.style.display = "block";
    }
	
}	  
  

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");



if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) 
 
  {  
 
bu1.addEventListener("click", function () {
   window.scrollBy(0, 2850);
});
bu2.addEventListener("click", function () {
   window.scrollBy(0, 1500);
});   
    
bu3.addEventListener("click", function () {
   window.scrollBy(0, 10000);
}); 


  }

else 
    


jQuery(document).ready(function($) {

    
$(".b1").click(function(){

		$("html, body").animate({ scrollTop: $('.description').offset().top }, 1700);		

	});
	

$(".b2").click(function(){

		$("html, body").animate({ scrollTop: $('.looking').offset().top }, 1700);		

	});

$(".b3").click(function(){

		$("html, body").animate({ scrollTop: $('.contacts').offset().top }, 1700);		

	});

    



$("#button1").click(function(){

		$("html, body").animate({ scrollTop: $('.description').offset().top }, 1700);		

	});
	

$("#button2").click(function(){

		$("html, body").animate({ scrollTop: $('.looking').offset().top }, 1700);		

	});

$("#button3").click(function(){

		$("html, body").animate({ scrollTop: $('.contacts').offset().top }, 1700);		

	});

    
    
    
});
