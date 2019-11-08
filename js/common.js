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

    $(function() {
        var replaceWidth2 = 1280;
        var windowWidth2 = parseInt($(window).width());
        if(windowWidth2 >= replaceWidth2) {

//            $('.header_wrap li').hover(function(){
//                $(this).children('div.dl_outer:not(:animated)').show().addClass('check');
//            },function(){
//                $(this).children('div.dl_outer:not(:animated)').fadeOut(100);
//            })

            $(document).on('mouseenter', '.header_wrap li', function(){
                $(this).children('div.dl_outer:not(:animated)').show().addClass('check');
            })
            $(document).on('mouseleave', '.header_wrap li', function(){
                $(this).children('div.dl_outer:not(:animated)').fadeOut(100);
            })

        } else {
            
            $(document).on('click', '.header_div_wrap li .headerlink', function(){
                $('+div.dl_outer',this).slideToggle(100);
                $(this).toggleClass('open');
            })
            $(document).on('click', '.header_div_wrap li.splink-false .headerlink', function(){
                return false;
            })

//            $('.header_div_wrap dt').click(function(){
//                $('+dd:not(:animated)',this).slideToggle(100);
//                $(this).toggleClass('open');
//            })

            $(document).on('click', '.header_div_wrap dt', function(){
                $('~dd',this).slideToggle(100);
                $(this).toggleClass('open');
                return false;
            })

        }

    });
    
    $(document).on('click', '#menubtn', function(){
        $('.header_div_wrap:not(:animated)').slideToggle(100);
        $(this).toggleClass('open');
    })
    
    //$(document).on('click touchend', function(e) {
    //if (!$(e.target).closest('.eventarea').length) {
    //    $('.header_div_wrap').slideUp(100);
    //    $('#menubtn').removeClass('open');
    //}
        
});


/* ------------------------------------------------------------------------
   コンフィグ
------------------------------------------------------------------------ */
//クライアントID
var clientID = 'scunion';

/* ------------------------------------------------------------------------
   meta系読み込み
------------------------------------------------------------------------ */
jQuery(function metaViewportAct() {
    var metaViewport = jQuery('<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">');
    var linkImport = jQuery('<link href="/-/' + clientID + '/file/html/member/css/reset.css" rel="stylesheet" type="text/css" /><link href="/-/' + clientID + '/file/html/member/css/style.css" rel="stylesheet" type="text/css" /><link href="/-/' + clientID + '/file/html/member/css/pc.css" rel="stylesheet" type="text/css" media="screen and (min-width: 769px)" /><link href="/-/' + clientID + '/file/html/member/css/tb.css" rel="stylesheet" type="text/css" media="screen and (max-width: 768px)" /><link href="/-/' + clientID + '/file/html/member/css/sp.css" rel="stylesheet" type="text/css" media="screen and (max-width: 640px)" /><link rel="stylesheet" href="https://use.typekit.net/lkt6aud.css" /><link href="/-/' + clientID + '/file/html/member/js/slick/slick.css" rel="stylesheet" type="text/css" /><link href="/-/' + clientID + '/file/html/member/js/slick/slick-theme.css" rel="stylesheet" type="text/css" />');
    jQuery('head').prepend(metaViewport).append(linkImport);
    //jQuery('head').append(linkImport);
});

/* ------------------------------------------------------------------------
   ページ振り分け
------------------------------------------------------------------------ */

//検索ページの時
jQuery(document).ready(function() {
    if (document.URL.match('search.php')) {
        jQuery(function() {
            jQuery('body').addClass('search');
        });
    }
});
//問い合わせページの時
jQuery(document).ready(function() {
    if (document.URL.match('enquete.php')) {
        jQuery(function() {
            jQuery('body').addClass('enquete');
        });
    }
});
//一覧ページの時
jQuery(document).ready(function() {
    if (document.URL.match('CID=')) {
        jQuery(function() {
            jQuery('body').addClass('archive');
        });
    }
});
//個別ページの時
jQuery(document).ready(function() {
    if (document.URL.match('AID=')) {
        jQuery(function() {
            jQuery('body').removeClass('archive').addClass('single');
        });
    }
});
//規約規定ページの時
jQuery(document).ready(function() {
    if (document.URL.match('AID=159294')) {
        jQuery(function() {
            jQuery('body').addClass('kiyakukitei');
        });
    }
});

/* ------------------------------------------------------------------------
   テンプレート読み込み
------------------------------------------------------------------------ */

//会員ページヘッダー読み込み
jQuery(document).ready(function() {
    if (document.URL.match('login_top') || document.URL.match('page.php') || document.URL.match('nlog') || document.URL.match('enquete')) {
        jQuery(function() {
            jQuery('body').prepend('<header id="header" />');
        });
        jQuery(function() {
            jQuery('#header').load('/-/' + clientID + '/file/html/member/include/header.html');
        });
    }
});
//全ページフッター＆バナー読み込み
jQuery(function includeAreaAct() {
    jQuery('body').append('<footer id="footer" />');
    //#container height不足分の追加
    jQuery(document).ready(function() {
        var windH = window.innerHeight;
        var headH = jQuery('#header').height();
        var footH = jQuery('#footer').height();
        jQuery('#container').css('min-height', windH - headH - footH);
    });
});
jQuery(function includeCallAct() {
    jQuery('#footer').load('/-/' + clientID + '/file/html/member/include/footer.html');
    //jQuery('#aside').load('/-/' + clientID + '/file/html/open/DailyUp/html/banners.html');
});

/* ------------------------------------------------------------------------
   トップページ・タイトルリストカスタム
------------------------------------------------------------------------ */
//NEWマーク・UPマークのカスタマイズ用要素の追加
jQuery(function() {
    jQuery('.NewsLogList_title img[src*=new]').wrap('<span class="new_mark"></span>');
    jQuery('.NewsLogList_title img[src*=up]').wrap('<span class="up_mark"></span>');
});
//要素の移動
jQuery(function() {
    jQuery('.NewsLogList_article').each(function() {
        jQuery(this).find('.NewsLogList_info').insertBefore(jQuery(this).find('.NewsLogList_thumbnail'));
        jQuery(this).find('.NewsLogList_body').insertAfter(jQuery(this).find('.NewsLogList_thumbnail'));
        jQuery(this).find('.NewsLogList_date').insertBefore(jQuery(this).find('.NewsLogList_category'));
    });
});

/* ------------------------------------------------------------------------
   トップページ・記事一覧などの差し替え
------------------------------------------------------------------------ */
//$(function(){
//    $('#kijiBlock .dateBlock').clone(true).appendTo('#kijiinfo-date');
//    $('.categoryList').clone(true).appendTo('#kijiinfo-category');
//    $('#kijiBlock .autherBlock').clone(true).appendTo('#kijiinfo-auther');
//    $('.navi .modify').clone(true).appendTo('#modify');
//    $('.text h2').wrapInner('<span></span>');
//    $('h3').wrapInner('<span></span>');
//    $('.block h3:not(#kijiBlock h3)').clone(true).appendTo('#kijiinfo-category');
//});

//spanタグで囲む
$(function(){
    $('.home-oshirase .NewsLogList_date').wrapInner('<span></span>');
    $('.home_headline .NewsLogList_date').wrapInner('<span></span>');
    $('.home_headline .NewsLogList_title a').wrapInner('<span></span>');
    $('.home_headline .NewsLogList_category').wrapInner('<span></span>');
    $('.archive h3').wrapInner('<span></span>');
});

//連番つける
$(function(){
    $('.home_headline .NewsLogList_article').each(function(i){
        $(this).attr('class','home_headlinebox' + (i+1));
    });
    $('.home_headline ul li').each(function(i){
        $(this).attr('class','home_headlinebox' + (i+1));
    });
    $('.home_link_data .NewsLogList_article').each(function(i){
        $(this).attr('class','home_linkbox' + (i+1));
    });
    $('.home-oshirase .NewsLogList_article').each(function(i){
        $(this).attr('class','home_newsbox' + (i+1));
    });
});

//差し替え
$(function(){
    //$('.home-oshirase .NewsLogList_date span').clone(true).appendTo('.home_news dt');
    //$('.home-oshirase .NewsLogList_title a').clone(true).appendTo('.home_news dd');
    $('.home-oshirase .home_newsbox1 .NewsLogList_date span').clone(true).appendTo('.home_news dt.home_newsbox1');
    $('.home-oshirase .home_newsbox1 .NewsLogList_title a').clone(true).appendTo('.home_news dd.home_newsbox1');

    $('.home-oshirase .home_newsbox2 .NewsLogList_date span').clone(true).appendTo('.home_news dt.home_newsbox2');
    $('.home-oshirase .home_newsbox2 .NewsLogList_title a').clone(true).appendTo('.home_news dd.home_newsbox2');

    $('.home-oshirase .home_newsbox3 .NewsLogList_date span').clone(true).appendTo('.home_news dt.home_newsbox3');
    $('.home-oshirase .home_newsbox3 .NewsLogList_title a').clone(true).appendTo('.home_news dd.home_newsbox3');

    $('.home_headline .home_headlinebox1 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox1 .textwrap .date');
    $('.home_headline .home_headlinebox1 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox1 .textwrap .category');
    $('.home_headline .home_headlinebox1 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox1 .textwrap p');
    var newicon1 = $('.home_headline .home_headlinebox1 .new_mark').hasClass('new_mark');
    if( newicon1 ) {
        $('.home_headline ul li.home_headlinebox1').addClass('new');
    }
    var upicon1 = $('.home_headline .home_headlinebox1 .up_mark').hasClass('up_mark');
    if( upicon1 ) {
        $('.home_headline ul li.home_headlinebox1').addClass('up');
    }
    var tn1 = $('.home_headline .home_headlinebox1 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox1 .imgwrap img').attr('src',tn1);
    var url1 = $('.home_headline .home_headlinebox1 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox1 a').attr('href',url1);

    $('.home_headline .home_headlinebox2 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox2 .textwrap .date');
    $('.home_headline .home_headlinebox2 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox2 .textwrap .category');
    $('.home_headline .home_headlinebox2 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox2 .textwrap p');
    var newicon2 = $('.home_headline .home_headlinebox2 .new_mark').hasClass('new_mark');
    if( newicon2 ) {
        $('.home_headline ul li.home_headlinebox2').addClass('new');
    }
    var upicon2 = $('.home_headline .home_headlinebox2 .up_mark').hasClass('up_mark');
    if( upicon2 ) {
        $('.home_headline ul li.home_headlinebox2').addClass('up');
    }
    var tn2 = $('.home_headline .home_headlinebox2 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox2 .imgwrap img').attr('src',tn2);
    var url2 = $('.home_headline .home_headlinebox2 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox2 a').attr('href',url2);

    $('.home_headline .home_headlinebox3 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox3 .textwrap .date');
    $('.home_headline .home_headlinebox3 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox3 .textwrap .category');
    $('.home_headline .home_headlinebox3 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox3 .textwrap p');
    var newicon3 = $('.home_headline .home_headlinebox3 .new_mark').hasClass('new_mark');
    if( newicon3 ) {
        $('.home_headline ul li.home_headlinebox3').addClass('new');
    }
    var upicon3 = $('.home_headline .home_headlinebox3 .up_mark').hasClass('up_mark');
    if( upicon3 ) {
        $('.home_headline ul li.home_headlinebox3').addClass('up');
    }
    var tn3 = $('.home_headline .home_headlinebox3 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox3 .imgwrap img').attr('src',tn3);
    var url3 = $('.home_headline .home_headlinebox3 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox3 a').attr('href',url3);

    $('.home_headline .home_headlinebox4 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox4 .textwrap .date');
    $('.home_headline .home_headlinebox4 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox4 .textwrap .category');
    $('.home_headline .home_headlinebox4 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox4 .textwrap p');
    var newicon4 = $('.home_headline .home_headlinebox4 .new_mark').hasClass('new_mark');
    if( newicon4 ) {
        $('.home_headline ul li.home_headlinebox4').addClass('new');
    }
    var upicon4 = $('.home_headline .home_headlinebox4 .up_mark').hasClass('up_mark');
    if( upicon4 ) {
        $('.home_headline ul li.home_headlinebox4').addClass('up');
    }
    var tn4 = $('.home_headline .home_headlinebox4 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox4 .imgwrap img').attr('src',tn4);
    var url4 = $('.home_headline .home_headlinebox4 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox4 a').attr('href',url4);

    $('.home_headline .home_headlinebox5 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox5 .textwrap .date');
    $('.home_headline .home_headlinebox5 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox5 .textwrap .category');
    $('.home_headline .home_headlinebox5 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox5 .textwrap p');
    var newicon5 = $('.home_headline .home_headlinebox5 .new_mark').hasClass('new_mark');
    if( newicon5 ) {
        $('.home_headline ul li.home_headlinebox5').addClass('new');
    }
    var upicon5 = $('.home_headline .home_headlinebox5 .up_mark').hasClass('up_mark');
    if( upicon5 ) {
        $('.home_headline ul li.home_headlinebox5').addClass('up');
    }
    var tn5 = $('.home_headline .home_headlinebox5 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox5 .imgwrap img').attr('src',tn5);
    var url5 = $('.home_headline .home_headlinebox5 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox5 a').attr('href',url5);

    $('.home_headline .home_headlinebox6 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox6 .textwrap .date');
    $('.home_headline .home_headlinebox6 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox6 .textwrap .category');
    $('.home_headline .home_headlinebox6 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox6 .textwrap p');
    var newicon6 = $('.home_headline .home_headlinebox6 .new_mark').hasClass('new_mark');
    if( newicon6 ) {
        $('.home_headline ul li.home_headlinebox6').addClass('new');
    }
    var upicon6 = $('.home_headline .home_headlinebox6 .up_mark').hasClass('up_mark');
    if( upicon6 ) {
        $('.home_headline ul li.home_headlinebox6').addClass('up');
    }
    var tn6 = $('.home_headline .home_headlinebox6 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox6 .imgwrap img').attr('src',tn6);
    var url6 = $('.home_headline .home_headlinebox6 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox6 a').attr('href',url6);

    $('.home_headline .home_headlinebox7 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox7 .textwrap .date');
    $('.home_headline .home_headlinebox7 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox7 .textwrap .category');
    $('.home_headline .home_headlinebox7 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox7 .textwrap p');
    var newicon7 = $('.home_headline .home_headlinebox7 .new_mark').hasClass('new_mark');
    if( newicon7 ) {
        $('.home_headline ul li.home_headlinebox7').addClass('new');
    }
    var upicon7 = $('.home_headline .home_headlinebox7 .up_mark').hasClass('up_mark');
    if( upicon7 ) {
        $('.home_headline ul li.home_headlinebox7').addClass('up');
    }
    var tn7 = $('.home_headline .home_headlinebox7 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox7 .imgwrap img').attr('src',tn7);
    var url7 = $('.home_headline .home_headlinebox7 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox7 a').attr('href',url7);

    $('.home_headline .home_headlinebox8 .NewsLogList_date span').clone(true).appendTo('.home_headline .home_headlinebox8 .textwrap .date');
    $('.home_headline .home_headlinebox8 .NewsLogList_category span').clone(true).appendTo('.home_headline .home_headlinebox8 .textwrap .category');
    $('.home_headline .home_headlinebox8 .NewsLogList_title a span').clone(true).prependTo('.home_headline .home_headlinebox8 .textwrap p');
    var newicon8 = $('.home_headline .home_headlinebox8 .new_mark').hasClass('new_mark');
    if( newicon8 ) {
        $('.home_headline ul li.home_headlinebox8').addClass('new');
    }
    var upicon8 = $('.home_headline .home_headlinebox8 .up_mark').hasClass('up_mark');
    if( upicon8 ) {
        $('.home_headline ul li.home_headlinebox8').addClass('up');
    }
    var tn8 = $('.home_headline .home_headlinebox8 .NewsLogList_thumbnail img').attr('src');
    $('.home_headline .home_headlinebox8 .imgwrap img').attr('src',tn8);
    var url8 = $('.home_headline .home_headlinebox8 .NewsLogList_title a').attr('href');
    $('.home_headline .home_headlinebox8 a').attr('href',url8);

});

//キャッチアップ下バナー
$(function() {
    var bnrsrc1 = $('.home_link_data .home_linkbox1 .NewsLogList_thumbnail img').attr('src');
    $('.home_link .home_link1 .homelinkicon img').attr('src',bnrsrc1);
    var bnrtitle1 = $('.home_link_data .home_linkbox1 .NewsLogList_title a').text();
    $('.home_link .home_link1 a').text(bnrtitle1);
    var bnrurl1b = $('<div class="homelinkicon"><img src="' + bnrsrc1 + '" width="54" height="44" alt=""></div>');
    $('.home_link .home_link1 a').prepend(bnrurl1b);
    var bnrurl1 = $('.home_link_data .home_linkbox1 .NewsLogList_body_content').text();
    $('.home_link .home_link1 a').attr('href',bnrurl1);

    var bnrsrc2 = $('.home_link_data .home_linkbox2 .NewsLogList_thumbnail img').attr('src');
    $('.home_link .home_link2 .homelinkicon img').attr('src',bnrsrc2);
    var bnrtitle2 = $('.home_link_data .home_linkbox2 .NewsLogList_title a').text();
    $('.home_link .home_link2 a').text(bnrtitle2);
    var bnrurl2b = $('<div class="homelinkicon"><img src="' + bnrsrc2 + '" width="54" height="44" alt=""></div>');
    $('.home_link .home_link2 a').prepend(bnrurl2b);
    var bnrurl2 = $('.home_link_data .home_linkbox2 .NewsLogList_body_content').text();
    $('.home_link .home_link2 a').attr('href',bnrurl2);

    var bnrsrc3 = $('.home_link_data .home_linkbox3 .NewsLogList_thumbnail img').attr('src');
    $('.home_link .home_link3 .homelinkicon img').attr('src',bnrsrc3);
    var bnrtitle3 = $('.home_link_data .home_linkbox3 .NewsLogList_title a').text();
    $('.home_link .home_link3 a').text(bnrtitle3);
    var bnrurl3b = $('<div class="homelinkicon"><img src="' + bnrsrc3 + '" width="54" height="44" alt=""></div>');
    $('.home_link .home_link3 a').prepend(bnrurl3b);
    var bnrurl3 = $('.home_link_data .home_linkbox3 .NewsLogList_body_content').text();
    $('.home_link .home_link3 a').attr('href',bnrurl3);

    var bnrsrc4 = $('.home_link_data .home_linkbox4 .NewsLogList_thumbnail img').attr('src');
    $('.home_link .home_link4 .homelinkicon img').attr('src',bnrsrc4);
    var bnrtitle4 = $('.home_link_data .home_linkbox4 .NewsLogList_title a').text();
    $('.home_link .home_link4 a').text(bnrtitle4);
    var bnrurl4b = $('<div class="homelinkicon"><img src="' + bnrsrc4 + '" width="54" height="44" alt=""></div>');
    $('.home_link .home_link4 a').prepend(bnrurl4b);
    var bnrurl4 = $('.home_link_data .home_linkbox4 .NewsLogList_body_content').text();
    $('.home_link .home_link4 a').attr('href',bnrurl4);
});

//$(function() {
//    $('.home_link .inner').load('/-/scunion/nlog/viewer/view.php?ID=1985&CID=15503&AID=158901&T=kiji .wrap_home_link ul');
//});


/* ------------------------------------------------------------------------
   オリジナルの画像に差し替え
------------------------------------------------------------------------ */
$(function() {
  $('.original a.attached').each(function(){
    var path = $(this).attr('href');
    $(this).children('img.attached').attr('src', path);
  });
});

//労組についてページのアコーディオン
$(function() {
    $('.acd .acd-inner').hide();
    $('.acd h4').click(function(){
        $('+div',this).slideToggle(100);
        $(this).toggleClass('open');
        return false;
    })
});

//ページ遷移リンクの要素抜き出し
$(function() {
    var hasnavi =  $('.blogcontents .navi .control a').hasClass('page');
    if( hasnavi ) {
        $('.blogcontents .navi .control .page').clone(true).appendTo('.blogcontents .inner').wrapAll('<div class="pagectl"></div>');
    }
});

//ページ遷移リンクの前後区別
$(function(){
    $('.blogcontents .inner a.page').each(function(){
        if($(this).text().indexOf('前の') != -1){
            $(this).addClass('prev');
        }else {
            $(this).addClass('next');
        }
    });
});

//記事が属するカテゴリーIDを抽出してリンク設定
$(function(){
    $('.si-categorybox .NewsLogList_title').each(function(){
        var id = $(this).children('a').attr('href').match(/ID=(.*?)(&|$)/);
        var cid = $(this).children('a').attr('href').match(/CID=(.*?)(&|$)/);
        $(this).prevAll('.NewsLogList_category').wrapInner('<a></a>').children('a').attr('href', '/-/scunion/nlog/viewer/view.php?ID=' + id[1] + '&CID=' + cid[1] + '');
    });
});

//カテゴリーの移動
$(function(){
    $('.si-categorybox .NewsLogList_category').each(function(){
        $(this).nextAll('.NewsLogList_title').prepend(this);
    });
});

//職場委員の皆さんへページの日付移動
$(function(){
    $('.shokubaiin .NewsLogList_date').each(function(){
        $(this).nextAll('.NewsLogList_title').prepend(this);
    });
});

/* ------------------------------------------------------------------------
   オリジナルの画像に差し替え
------------------------------------------------------------------------ */
$(function() {
  $('.kumiairoom a.attached').each(function(){
    var path = $(this).attr('href');
    $(this).nextAll('a').children('img').attr('src', path);
    $(this).css('display','none');
  });
});



//    $(function(){
//        $('#kijiBlock .dateBlock').clone(true).appendTo('#kijiinfo-date');
//        $('.categoryList').clone(true).appendTo('#kijiinfo-category');
//        $('#kijiBlock .autherBlock').clone(true).appendTo('#kijiinfo-auther');
//        $('.navi .modify').clone(true).appendTo('#modify');
//        $('.text h2').wrapInner('<span></span>');
//        $('h3').wrapInner('<span></span>');
//        $('.block h3:not(#kijiBlock h3)').clone(true).appendTo('#kijiinfo-category');
//カテゴリー名にリンク付与
//        $('#kijiinfo-category').each(function(){
//            var sid = $(document.URL.match(/ID=(.*?)(&|$)/));
//            var scid = $(document.URL.match(/CID=(.*?)(&|$)/));
//            $(this).children('h3').children('span').wrapInner('<a></a>').children('a').attr('href', '/-/scunion/nlog/viewer/view.php?ID=' + sid[1] + '&CID=' + scid[1] + '');;
//        });
//    });
