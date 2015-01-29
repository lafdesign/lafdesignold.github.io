(function(){
 

	var app = angular.module('wevueFeed', []);

	app.controller('FeedController', function(){
              this.product = gems;   
           
                 });

 	var gems = [
 	{ name: 'One',
 	 images: [
        "img/img7.png",
      ]},

 	{ name: 'two',
 	 images: [
        "img/img7.png",
      ]},
	
	 	{ name: 'three',
	 	 images: [
	        "img/img7.png",
	      ]},

	 	{ name: 'four',
	 	 images: [
	        "img/img7.png",
	      ]},


	 	{ name: 'five',
	 	 images: [
	        "img/img7.png",
	      ]},

 ];

})();
