//define functions here

$(document).ready(function(){

// call functions here
function getIt () {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt () {
  $('img').on('load', function() {
    $(this).addClass('load');
  });
}

function pressIt () {
  $('form input').on('keydown', function() {
    if ($(this).val() === G) {
      
    }
  });
}
});
