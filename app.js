var app=angular.module('FormApp', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('form', {
        url:'/form',
        templateUrl:'partials/form.html',
        controller:'FormController'
    })
    
    .state('form.profile', {
        url:'/profile',
        templateUrl:'partials/form-profile.html'
    })
     .state('form.interests', {
        url:'/interests',
        templateUrl:'partials/form-interests.html'
    })
     .state('form.payment', {
        url:'/payment',
        templateUrl:'partials/form-payment.html'
    });
    
    $urlRouterProvider.otherwise('/form/profile');
});

app.controller('FormController', function($scope){
    
    $scope.formData={};
    $scope.processForm = function(){
        alert('Awesome');
    };
    
});