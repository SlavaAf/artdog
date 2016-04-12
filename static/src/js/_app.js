$(document).ready(function(){
$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
  $('.dropdown-toggle', this).toggleClass("hovered");
});
});
