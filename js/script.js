var headerSizeWeb = 100;
var headerSizeMobile = 60;
var scrollTop;

var header = $('header');
var gnb = $('header .menu_wrap ul.gnb');
var menu_wrap = $('header .menu_wrap');
var menuOpen = $('header .menu-open');
var menuClose = $('header .menu-close');

var scriptPage = {
	start: function () {
		scriptPage.nav();
		scriptPage.goTop();
		scriptPage.solution();
		// scriptPage.calendar();
	}
	, nav: function () {
		// header--scroll
		$(window).scroll(function () {
			scrollTop = $(window).scrollTop();
			if (scrollTop > 30) {
        header.addClass('scroll');
        $('header .contants_wrap .logo--color').css('display', 'inline-block');
        $('header .contants_wrap .logo--white').css('display', 'none');
        $('header .contants_wrap .menu-open i').css(
          'color',
          'var(--gnb-color--active)'
        );
        $('.go-top').fadeIn();
      } else {
        header.removeClass('scroll');
        $('header .contants_wrap .logo--color').css('display', 'none');
        $('header .contants_wrap .logo--white').css('display', 'inline-block');
        $('header .contants_wrap .menu-open i').css(
          'color',
          'var(--gnb-color)'
        );
        $('.go-top').fadeOut();
      }
		});

		// header--active
		gnb.hover(
			function () {
				if (!menuClose.is(':visible')) {
					header
						.addClass('active')
						.stop(true, true)
						.animate({ height: 360 }, 100);
					$('header .contants_wrap .logo--color').css('display', 'inline-block');
					$('header .contants_wrap .logo--white').css('display', 'none');
					$('header .contants_wrap .menu-open i').css(
						'color',
						'var(--gnb-color--active)'
					);
				}
			}
			// hover out 시 scroll 위치 확인해 스타일 변경
			, function() {
				scrollTop = $(window).scrollTop();
				if (!menuClose.is(':visible')) {
					if (scrollTop > 30) {
						header
							.stop(true, true)
							.animate({ height: headerSizeWeb }, 0, function () {
								$(this).removeClass('active');
								$('header .contants_wrap .logo--color').css('display', 'inline-block');
								$('header .contants_wrap .logo--white').css('display', 'none');
								$('header .contants_wrap .menu-open i').css('color', 'var(--gnb-color--active)');
							});
					} else {
						header
							.stop(true, true)
							.animate({ height: headerSizeWeb }, 0, function () {
								$(this).removeClass('active');
								$('header .contants_wrap .logo--color').css('display', 'none');
								$('header .contants_wrap .logo--white').css('display', 'inline-block');
								$('header .contants_wrap .menu-open i').css('color', 'var(--gnb-color--active)');
							});
					}
				}
			}
    );

    // header--mobile
    menuOpen.on('click', function () {
      menu_wrap.stop(true, true).animate({ right: 0 }, 200);
      return false;
    });
		
    menuClose.on('click', function () {
      menu_wrap.stop(true, true).animate({ right: -200 }, 200);
      return false;
    });

		$('ul.gnb .category').on('click', function () {
      if (menuClose.is(':visible')) {
        var getMenu = $(this).parent();
        if (getMenu.hasClass('active')) {
          getMenu
            .removeClass('active')
            .find('.lnb')
            .stop(true, true)
            .slideUp(200);
        } else {
          $('.gnb .menu.active')
            .removeClass('active')
            .find('.lnb')
            .stop(true, true)
            .slideUp(200);
          getMenu
            .addClass('active')
            .find('.lnb')
            .stop(true, true)
            .slideDown(200);
        }
        return false;
      }
    });
	}
	, goTop : function() {
		$('.go-top a').click(function(){
			$('html, body').animate({scrollTop:0}, 1000);
			return false;
		});
	}
	, solution : function(){
		$('#slide3').click(function(){
			$('#slide1').animate({'width':480, 'left':0, 'top':60});
			$('#slide1').css('z-index',2);
			$('#slide2').animate({'width':480, 'left':400, 'top':60});
			$('#slide2').css('z-index',1);
			$('#slide3').animate({'width':600, 'left':130, 'top':0});
			$('#slide3').css('z-index',3);
		});
		$('#slide2').click(function(){
			$('#slide1').animate({'width':480, 'left':400, 'top':60});
			$('#slide1').css('z-index',1);
			$('#slide2').animate({'width':600, 'left':130, 'top':0});
			$('#slide2').css('z-index',3);
			$('#slide3').animate({'width':480, 'left':0, 'top':60});
			$('#slide3').css('z-index',2);	
		});
		$('#slide1').click(function(){
			$('#slide1').animate({'width':600, 'left':130, 'top':0});
			$('#slide1').css('z-index',3);
			$('#slide2').animate({'width':480, 'left':0, 'top':60});
			$('#slide2').css('z-index',2);
			$('#slide3').animate({'width':480, 'left':400, 'top':60});
			$('#slide3').css('z-index',1);
		});
	}
	// , calendar : function(){
	// 	$(".calendar").datepicker({
	// 		regional: "ko",
	// 		dateFormat: "yy.mm.dd",
	// 		changeMonth: true, 
	// 		changeYear: true,
	// 		showMonthAfterYear: true,
	// 		nextText: "다음 달",
	// 		prevText: "이전 달",
	// 		dayNames: [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ],
	// 		dayNamesShort: [ "일", "월", "화", "수", "목", "금", "토" ],
	// 		dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
	// 		monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
	// 		monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
	// 		monthNamesMin: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ]
	// 	});
	// }
}