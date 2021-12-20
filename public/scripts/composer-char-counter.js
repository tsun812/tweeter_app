$(document).ready(function() {
  // --- our code goes here ---
  const $text = $('textarea');
  $text.on('input', (event) => {
    // count by words
    // const textvalue = $text.val().split(" ").filter(function(str) {
    //   return /\S/.test(str);
    // });
    const textvalue = $text.val().split("");
    let currlength = textvalue.length;
    const $count = $('.counter');
    let currCount = $count.val();
    currCount = 140 - currlength;
    $count.val(`${currCount}`);
    if (currCount <= 0) {
      $count.addClass("changeColor");
    } else {
      $count.removeClass("changeColor");
    }
    console.log(currCount);
    // });
  });
});