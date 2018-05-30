$(function() {
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

  // 言語一覧部分
  $('.languages-box').hover(
    function(){
      $(this).find('p').fadeIn(500);
    },
    function(){
      $(this).find('p').fadeOut(500);
    }
  );

  // モーダル表示
  $('.btn-pricing').click(function() {
    $('#apply-modal').fadeIn();
    var selectedItem = $(this).attr('id');
    var course = $(this).parents('.price-column').find('h2').text();
    $('#course-select').val(selectedItem);
    $('#apply-form').children('h2').text('【' + course + '】に申し込む');
  });

  // モーダル非表示
  $('#close-modal').click(function() {
    $('#apply-modal').fadeOut();
  });
 
  // コラム画像
  $('.column-image').hover(
    function(){
      $(this).addClass('zoom');
      $(this).children('.zoom-black').fadeIn(300);
    },
    function(){
      $(this).removeClass('zoom');
      $(this).children('.zoom-black').fadeOut(300);
    }
  );

});
