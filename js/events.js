//define functions here

$(document).ready(function(){

// call functions here
getIt();

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
    if (key.which === 47) {
      alert('G was pressed');
    }
  });
}
});
