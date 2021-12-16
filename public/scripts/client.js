const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1639437853423
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1639524253423
  }
]
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  $button = $(".new-tweet, button");
  $button.submit(function (event) {
    event.preventDefault();
    const data = $("new-tweet, form").serialize();
    console.log(data);
    $.post('http://localhost:8080/tweets/',  data)
    .done(function() {
      alert( "success");
    })
    .fail(function() {
      alert( "error" );
    })
    });

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for(element of tweets){
    const $curr = createTweetElement(element);
    $('.tweet-history').append($curr);
  }
}

const createTweetElement = function(tweetObj) {
  let $tweet = $(`<article>
  <header>
    <span class= "class1">
    <img src="${tweetObj.user.avatars}">
    <span>${tweetObj.user.name}</span>
    </span>
    <span class= "class2">
    <span class="username">${tweetObj.user.handle}</span>
    </span>
  </header>
  <textarea name="recentTweet" class="tweetHistory">${tweetObj.content.text}</textarea>
  <footer>
    <span>${timeago.format(tweetObj.created_at)}</span>
    <span class="footer-icon">
      <i class="fas fa-flag child1"></i>
      <i class="fas fa-retweet child2"></i>
      <i class="fas fa-heart child3"></i>
    </span>
  </footer>
</article>`);
  // ...
  return $tweet;
}

renderTweets(data);
})
