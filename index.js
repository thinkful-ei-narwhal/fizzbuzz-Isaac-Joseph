'use strict';

$(function() {
  $('form').click(event => {
    event.preventDefault();

    let submitted = $(event.currentTarget).find('input').val();
    let checkResults = function() {
      if (submitted % 5 === 0 && submitted % 3 === 0) {
        $('.js-results').addClass('.fizzbuzz')
      } else if (submitted % 5 === 0) {
        $('.js-results').addClass('.buzz')
      } else if (submitted % 3 === 0) {
        $('.js-results').addClass('.fizz')
      }
    }

    
  });
});