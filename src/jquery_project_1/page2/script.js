$(function(){
  // header navigation
  $('header a').click(function(){
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('html, body').animate({ scrollTop: top }, 500);
  });

  // read more
  $('#read-more').click(function(){
    if ($(this).hasClass('active')) {
      $('#more-text').slideUp();
      $('#read-more').removeClass('active').text('もっと詳しく');
    } else {
      $('#more-text').slideDown();
      $('#read-more').addClass('active').text('閉じる');
    };
  });

});
