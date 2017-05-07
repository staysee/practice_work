angular.module('flapperNews')
  .controller('MainController', MainController)

  function MainController (Posts) {
    var self = this;

    this.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];

    self.posts = Posts.posts;
    self.addPost = Posts.addPost;
    self.incrementUpvotes = Posts.incrementUpvotes;

    // function incrementUpvotes(post) {
    //   post.upvotes += 1
    // }

    // function addPost(posts){
    //   if(!this.title || this.title === '') { return; }
    //   this.posts.push({
    //     title: this.title,
    //     link: this.link,
    //     upvotes: 0
    //   });
    //   this.title = '';
    //   this.link = '';
    // }

  }
