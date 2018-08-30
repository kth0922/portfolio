$(document).ready(function(){

	// imgPosition배열에 2차원 배열 생성
	var imgX = [];
	var imgY = [];
	for(var i=0,j=0; i<21; i++){
		var fix = 14.28*j
		imgX.push(fix.toFixed(2));
		j++;
		if(j==7){j=0;}
	}
	for(var i=0; i<3; i++){
		for(var j=0; j<7; j++){
			imgY.push(200*i);
		}
	}
	var imgPosition = [];
	for(var i=0; i<21; i++){
		imgPosition[i] = [];
		imgPosition[i][0] = imgX[i];
		imgPosition[i][1] = imgY[i];
	}
	// imgPosition배열에 2차원 배열 생성

	// img 배치
	for(var i=0; i<21; i++){
		$('.article1>ul>li').eq(i).css({'left':imgPosition[i][0]+'%','top':imgPosition[i][1]+'px'});
	}
	// img 배치

	// 배열 섞기 함수선언
	function shuffleArray(array){
		for(var i = array.length-1; i>0; i--){
			var j = Math.floor(Math.random()*(i+1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	// 배열 섞기 함수선언

	//img 재배치
	function fShuffle(){
		shuffleArray(imgPosition);
		for(var i=0; i<21; i++){
			$('.article1>ul>li').eq(i).stop(true).animate({'left':imgPosition[i][0]+'%','top':imgPosition[i][1]+'px'}, 5000);
		}
	}
	fShuffle();
	var setShuffle = setInterval(fShuffle, 6000);
	//img 재배치

	// img섞기 동작 / 정지
	$('.article1').hover(
		function(){
			clearInterval(setShuffle);
		},
		function(){
			clearInterval(setShuffle);
			setShuffle = setInterval(fShuffle, 6000);
		}
	);
	$('.article1').mousemove(function(){
		clearInterval(setShuffle);
	});
	// img섞기 동작 / 정지

});