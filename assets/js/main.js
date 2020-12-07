// main.js

// 모바일용 메뉴 (햄버거 모양 변경, 메뉴 열림)
$(function(){
	$('.icon').on('click', function(){
		$(this).toggleClass('on')
		$('.gnb').toggleClass('show');
	});
})

// greet 왼쪽에서 나오는 애니메이션
$(document).ready(function() {
    $(window).scroll( function(){
        $('.greet').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},1000);
            }
            
        }); 
    });
});

