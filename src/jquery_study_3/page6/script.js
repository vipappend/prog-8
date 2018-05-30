$(function() {
  
  // toggleChangeBtn関数を定義してください
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == 3) {
      $('.next-btn').hide();
    }
  }
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var indexNumber = $('.index-btn').index($(this));
    $('.slide').eq(indexNumber).addClass('active');
    // 以下をtoggleChangeBtn関数にまとめ、関数を呼び出すようにしてください
    toggleChangeBtn();
    
  });
  
  $('.change-btn').click(function() {
    $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    // 以下をtoggleChangeBtn関数にまとめ、関数を呼び出すようにしてください
    toggleChangeBtn();
    
  });
});
