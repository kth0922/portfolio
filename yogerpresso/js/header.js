$(document).ready(function(){

	// mainMenuBg 생성
	$('.mainMenu').before('<div class="mainMenuBg"></div>');
	// mainMenuBg 생성

	// 윈도우 scrollTop 0
	$(window).scrollTop(0);
	// 윈도우 scrollTop 0

	// menuBtn click
	var mainMenuBg = 0;
	$('.menuBtn').click(function(){
		$('.mainMenu').toggleClass('on');
		$('.menuBtn').toggleClass('on');
		if(mainMenuBg==0){
			$('.mainMenuBg').fadeIn();
			$('.menuBtn>p').removeClass().addClass('ion-android-close').css('padding-left','19px');
			mainMenuBg=1;
		}
		else{
			$('.mainMenuBg').fadeOut();
			$('.menuBtn>p').removeClass().addClass('ion-android-sort').css('padding-left','15px');
			mainMenuBg=0;
		}
	});
	// menuBtn click

});