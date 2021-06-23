//pour jquery.nice-select
$(document).ready(function() {
  $('select').niceSelect();
});
//pour  jquery-countdown
$('#getting-started').countdown('2025/01/01', function(event) {
  $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
});

//pour jquery.slicknav.js
$(function(){
  $('#menu').slicknav();
});

function myTest(){
  alert(" le test marche via custom.js ");
};
