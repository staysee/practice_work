angular.module('flapperNews')
  .factory('Posts', PostsService)

function PostsService(){
  return {
    posts: [],

    addPost: function (posts) {
      if(!this.title || this.title === '') { return; }
      this.posts.push({
        title: this.title,
        link: this.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      this.title = '';
      this.link = '';
    },

    incrementUpvotes: function (post) {
      post.upvotes += 1
    }

  }
}
