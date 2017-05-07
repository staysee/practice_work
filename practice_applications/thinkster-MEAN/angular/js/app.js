angular.module('flapperNews', ['ui.router'])
    .config(MainRouter)


function MainRouter($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsController',
      controllerAs: 'posts'
    })


  $urlRouterProvider.otherwise('home')
}



