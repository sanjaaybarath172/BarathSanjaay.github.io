<html>

 <head>

 <title>Title</title>

 <meta charset="UTF-8" />

 <style media="screen"></style>

 <script src="https://ajax.googleapis.com/

ajax/libs/angularjs/1.4.8/angular.min.js">

</script>

</head>

<body>

<div data-ng-app="myApp" data-ng-controller="NumberCtrl">

<p>Number: <input type="number" ng-model="number" style="background-color: blue;"></p>

<p>Number = {{ number }}</p>

<button ng-click="showNumber()">Show Number</button>

</div>

<script>

var app = angular.module('myApp', []);

app.controller('NumberCtrl', function($scope) {

    $scope.number = 1;

    $scope.showNumber = function(){

       window.alert( "your number= " + $scope.number );

    };

});

</script>

</body>

</html>

-------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>

<html data-ng-app="">

 <head>

 <title>Title</title>

 <meta charset="UTF-8" />

 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

 </head>

<body>

<div	data-ng-init="names = ['Barath', 'VIT-AP', 'CBSE']">

<h1>Cool loop!</h1>

<ul> 

<li	data-ng-repeat="name in names">{{ name }}</li>

</ul>

</div>

</body>



</html>

----------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>

<html>

 <head>

 <title>Title</title>

 <meta charset="UTF-8" />

 <style media="screen"></style>

 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

 </head>

 <body>

 <div ng-app>

 <p>Number 1: <input type="number" ng-model="number1"></p>

 <p>Number 2: <input type="number" ng-model="number2"></p>

 <!-- expression -->

 <p>{{ number1 + number2 }}</p> 

 </div>

 </body>

</html>

---------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>

<html data-ng-app="">

 <head>

 <title>Title</title>

 <meta charset="UTF-8" />

 <style media="screen"></style>

 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

 </head>

 <body>

<div data-ng-init="customers = [{name:'bala', id:'588'}, {name:'harish', id:'589'}, {name:'saravana', id:'590'}]">

<h1>Customers</h1>



<input type="text" data-ng-model="userInput" /> 

<ul>

<li data-ng-repeat="customer in customers | orderBy:'name' | filter:userInput">{{  customer.name | uppercase }}</li>





</ul>

</div>

</body>



</html>
