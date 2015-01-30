(function() {
  var app = angular.module('gemStore', []);

  app.controller('EmbedController', function() {
    this.products = gems;
  });

  var gems = [{
    name: 'Anna',
   
    images: [
      "images/img5.png",
      "images/img6.png",
      "images/img7.png"
    ]
  }, {
    name: 'Beth',
  
    images: [
      "images/img9.png",
      "images/img8.png",
      "images/img7.png"
    ]
  }, {
    name: 'Zach',
    
    images: [
      "images/img3.png",
      "images/img6.png",
      "images/img7.png"
    ]
  }];
})();
