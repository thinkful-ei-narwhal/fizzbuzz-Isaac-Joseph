'use strict';

$(function() {
  $('form').click(event => {
    event.preventDefault();

    let submitted = $(event.currentTarget).find('input').val();
    let checkResults = function() {
      if (submitted % 5 === 0 && submitted % 3 === 0) {
        $('.js-results').replaceWith(`<div class="js-results fizzbuzz">${submitted}</div>`)
      } else if (submitted % 5 === 0) {
        $('.js-results').replaceWith(`<div class="js-results buzz">${submitted}</div>`)
      } else if (submitted % 3 === 0) {
        $('.js-results').replaceWith(`<div class="js-results fizz">${submitted}</div>`)
      }
    }

    checkResults();
  });
});