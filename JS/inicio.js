/*****************************Accordion******************************/

$(document).ready(function(){
  
  activeItem = $("#accordion li:nth-child(2)");
  $(activeItem).addClass('active');

  $("#accordion li").click(function(){
      $(activeItem).removeClass('active');
      $(this).addClass('active');
      activeItem = this;
    });
  });












	
/*
**********************Slideshow Dynamic Drive**********************/

var titles = ["Rustic Walls",
				  "Two Love Birds",
				  "Beauty and Fame",
				  "Magic Hour at Sands Beach",
				  "Floral Arrangements"];

	$(document).ready(function() {
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"Assets/Accordeon/imagen01.jpg",
	    		"Assets/Accordeon/imagen02.jpg",
	    		"Assets/Accordeon/imagen03.jpg",
	    		"Assets/Accordeon/imagen04.jpg",
	    	],
			urls: [
				"",
				"http://javascriptkit.com",
				"http://dynamicdrive.com",
				"http://cssdrive.com"
			],
	    	scale:0.80,
	    	duration:5000,
	    	fadeSpeed:2000,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

	    	onSlideComplete: function(){
	    		$('#slide-title').html(titles[this.getSlideIndex()]);
	    	},
	    	onLoadingComplete: function(){
	    		//$('#status').html("Loading Complete");
	    	}

	    });
  });
  
  /*
 ********************Menu telefonos********************/


function openMenu() {
  const open = document.getElementById("menuPhones");
  open.style.top = 0;
}

function closeMenu() {
  const close = document.getElementById("menuPhones");
  close.style.top = "100%";
};
