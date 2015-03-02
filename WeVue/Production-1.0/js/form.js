   angular.module("myapp", [])


                     .controller("MyController",  function($scope, $http) {
                       $scope.myForm = {};
                       $scope.myForm.name = "";
                       $scope.myForm.email = "";
                       $scope.myForm.number = "";

                     $scope.myForm.submitTheForm = function(item, event) {
                       console.log("--> Submitting form");

               

                        var dataObject = {
                        item_name : "Contact Me Form"
                        ,item_data : [{
                          Name : $scope.contactForm.Name
                          ,Email : $scope.contactForm.Email
                          ,PhoneNumber  : $scope.contactForm.PhoneNumber
                        }]
                       };


                 var responsePromise = $http.post("http://wevue-dev.herokuapp.com/api/v1/misc/add_form_submission", dataObject, {});
                   responsePromise.success(function(dataFromServer, status, headers, config)                
                   {
                       var outputDate=angular.fromJson(dataFromServer);
                   });
                    responsePromise.error(function(data, status, headers, config) {
                      console.log("Error in fetching user store call!");
                   });
                }
          });