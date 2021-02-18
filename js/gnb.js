$(document).ready(function () {
    $(window).scroll
    (function()
    {
    // 스크롤 상단이 50px보다 커질때,
    if($(window).scrollTop() > 50)
    // 참일 때 처리하는 블럭
        {
            // js로 html 태그를 불러오는 방법 
            // $('선택자' | '클래스' | 'id').함수명();
            // 대소문자 구별! 카멜표기 addClass 
            $('header').addClass('active');

        }
    // 나머지 상황(다시 돌아왔을때)
    else
    {
        $('header').removeClass('active');
    }
    }
    );
});