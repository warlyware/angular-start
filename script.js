var app = angular.module('ng-learn', []);

app.controller('TweetCtrl', function() {
  var tScope = this;
  
  tScope.tweet = '';

  tScope.tweetsList = ['Fake tweet 1', 'Fake tweet 2'];


  
  tScope.isTweetMaxed = function() {
    var currentTweetLength = this.getRemainingCharacters();
    return currentTweetLength > 140;
  };

  tScope.getRemainingCharacters = function() {
     return 140 - tScope.tweet.length;
  }

  tScope.submitTweet = function(tweet) {
    tScope.tweetsList.push(tweet);
    // console.log(data);
    // alert('Send a tweet!');
    console.log(this.tweetsList);
    tScope.tweet = '';
  }

});