$('#page-top').click(function(){
  $('body,html').animate({
    scrolltop: 0
  }, 500);
  return false;
});