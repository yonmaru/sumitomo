// JavaScript Document

//画像切り替え
$(function() {
  var $elem = $('.image-switch');
  var sp = '_sp.';
  var pc = '_pc.';
  var replaceWidth = 640;

  function imageSwitch() {
    var windowWidth = parseInt($(window).width());

    $elem.each(function() {
      var $this = $(this);
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 100);
  });

    
    var windowWidth = parseInt($(window).width());

    $(function() {
        var $this = $(this);
        if(windowWidth >= replaceWidth) {

            $('.header_wrap li').hover(function(){
                $(this).children('div.dl_outer:not(:animated)').show();
            },function(){
                $(this).children('div.dl_outer:not(:animated)').fadeOut(100);
            })

        } else {

            $('.header_div_wrap li .headerlink').click(function(){
                $('+div.dl_outer:not(:animated)',this).slideToggle(100);
                $(this).toggleClass('open');
                return false;
            })

//            $('.header_div_wrap dt').click(function(){
//                $('+dd:not(:animated)',this).slideToggle(100);
//                $(this).toggleClass('open');
//            })

            $('.header_div_wrap dt').click(function(){
                $('~dd:not(:animated)',this).slideToggle(100);
                $(this).toggleClass('open');
            })

        }

    });
    
    $('#menubtn').click(function(){
        $('.header_div_wrap:not(:animated)').slideToggle(100);
        $(this).toggleClass('open');
        return false;
    })
    
    //$(document).on('click touchend', function(e) {
    //if (!$(e.target).closest('.eventarea').length) {
    //    $('.header_div_wrap').slideUp(100);
    //    $('#menubtn').removeClass('open');
    //}
        
});
    
});
