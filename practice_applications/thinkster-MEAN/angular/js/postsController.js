angular.module('flapperNews')
  .controller('PostsController', PostsController)

  function PostsController ($stateParams, Posts) {

    this.post = Posts.posts[$stateParams.id]

  }
