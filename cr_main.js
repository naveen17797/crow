
	var app = angular.module("crow", []);
	

	//load the navigation bar and set titles
	app.controller('navigationCtrl', function($scope, $http) {

	  var setBasicInfo = function (response) {
	      var data = response.data
		  $scope.blog_name = data.blog_name;
		  $scope.blog_description = data.blog_description;
	  }

      $http.get("cr_info.json").then(setBasicInfo);

    });


	//controller to set the navigation links

    app.controller('linkCtrl', function ($scope, $http) {
      
      var setLinkInfo = function($response) {
        
         $scope.navigationLinks = $response.data;
      
      }  

      $http.get("cr_menu.json").then(setLinkInfo);

    });


    //controller to display the posts

    app.controller('blogCtrl', function($scope, $http) {

    	var displayPosts = function($response) {
        
         $scope.posts = $response.data;
         $scope.limit = 500;
         $scope.read_more = "Read More";
         $scope.open = false;
      
      }  

      $http.get("cr_posts.json").then(displayPosts);

    });

     app.filter('trustAsHtml',['$sce', function($sce) {
      return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);

     app.controller('sideBarCtrl', function ($scope, $http) {
         var displaySideBarItems = function (response) {
            $scope.sideBarItems = response.data;
         }
         $http.get("cr_sidebar.json").then(displaySideBarItems);
     });

