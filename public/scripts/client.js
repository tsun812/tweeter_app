
const loadtweets = function (){
  $.get( "http://localhost:8080/tweets/", function( dataInput ) {
    renderTweets(dataInput);
    
  });
}

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for(let i = tweets.length - 1; i >= 0; i--){
    const $curr = createTweetElement(tweets[i]);
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
loadtweets();
$(document).ready(() => {
  
  $button = $(".new-tweet, button");
  $button.submit(function (event) {
    event.preventDefault();
    const data = $("new-tweet, form").serialize();
    console.log(data);
    const $text = $('textarea');
    const textvalue = $text.val().split(" ").filter(function(str) {
      return /\S/.test(str);
    })
  
    $.post('http://localhost:8080/tweets/',  data)
    .done(function() {
      loadtweets();
      location.reload();
    })
    .fail(function() {
      if(textvalue.length === 0){
      alert( "Can't be blank" );
      } 
      else if (textvalue.length > 5){
        alert("must be 140 characters or less")
      }
    })
  
 });
    



})
