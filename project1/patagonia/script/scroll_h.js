 window.onload = function () {			
            $(".page").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;		
							count = $(this).index()+1; // 1 2 3							
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
							count = $(this).prev().index(); // 1 2 3		
                        }
                    }
                    // 화면 이동 0.8초(800)
					$('#bt>li').eq(count).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
                    $("html,body").stop().animate({scrollTop:moveTop},300); // 속도 1000분의 1초, 1000=1초
                });
            });
        }
		//1번 $('#bt>li').eq(count).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'}) 지우고
		//2번 맨위 .each 왼쪽 대상을 바꿔준다.
		//3번 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 넣어준다.
		// 플러그인에 따라서 옛날버전 으로 위에 jquery 사이트에서 예전버전도 넣어줘야 적용되는 경우가 있음 