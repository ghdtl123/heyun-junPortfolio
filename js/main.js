$(document).ready(function(){
  var menu = $(".gnb > li");
	var content = $("#sec > div");
	
	menu.click(function(){
		/*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
별도의 브라우저 행동을 막기 위해 사용됩니다.*/
		event.preventDefault();
		
		//사용자가 클릭한 li
		var tg = $(this);
		//순서값을 찾는 함수 index()
		var idx = tg.index();
		//선택한 li와 순서가 같은 content 를 찾음 eq()
		var section = content.eq(idx);
		//선택된 영역의 top 의 좌표값을 저장
		//.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
		var tt = section.offset().top;

		//스크롤이 tt의 값에 맞게 움직이게
		$("html,body").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		
		// 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
		$(window).scroll(function(){
		//.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
		var location = $(window).scrollTop();
		
		content.each(function() {
			//반복문(each)
      var tg = $(this);
			var idx = tg.index();
			
			if(tg.offset().top <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
				menu.removeClass("active");
				menu.eq(idx).addClass("active");
				}

    });//each() 끝
		
			
			});//scroll() 끝

    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
    
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,70); // 반복동작 
    } 
         
    function typing(){ 
      $(".typing ul li").removeClass("on");
       $(".typing ul li").eq(liIndex).addClass("on");
      if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ if(liIndex<liLength-1){
         //다음문장으로  가기위해 인덱스를 1증가
           liIndex++; 
         //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
           
         //다음문장 타이핑전 1초 쉰다
             clearInterval(tyInt);
              //타이핑종료
         
             setTimeout(function(){
               //1초후에 다시 타이핑 반복 시작
               tyInt = setInterval(typing,70);
             },500);
            } else if(liIndex==liLength-1){
              
             //마지막 문장까지 써지면 반복종료
               clearInterval(tyInt);
            }
        } 
    }//타이핑 end
})