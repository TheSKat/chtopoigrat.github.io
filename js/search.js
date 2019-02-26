$(function(){
  $('.fa-search').on('click',function(){
    $('.search').addClass('open');
    $('.close, .input').fadeIn(500);
  });
  
  $('.close').on('click',function(){
    $('.search').removeClass('open');
    $('.close, .input').fadeOut(500);
  });
});