(function() {
  var app = angular.module('weVueFeed', []);

  app.controller('embedFeedController', function() {
    this.products = feeds;
  });

  var feeds = [{
    name: 'Azurite',
    description: "#",
    images: [
      "images/img5.png",
      "images/img6.png",
      "images/img7.png"
    ]
  }, {
    name: 'Bloodstone',
    description: "#",
    images: [
      "images/img9.png",
      "images/img8.png",
      "images/img7.png"
    ]
  }, {
    name: 'Zircon',
    description: "#",
    images: [
      "images/img3.png",
      "images/img4.png",
      "images/img7.png"
    ]
  }];
})();
