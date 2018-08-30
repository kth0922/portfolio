$(document).ready(function(){

	// article2Nav Bg 추가
	$('.article2Nav').before('<div class="article2NavBg"></div>');
	// article2Nav Bg 추가
	// .yogerpresso coffee, coffeeDrip 추가
	$('.yogerpresso').append('<div class="coffee"></div>');
	$('.coffee').append('<div class="coffeeDrip"></div>');
	// .yogerpresso coffee, coffeeDrip 추가
	// recipe에 태그 추가
	var recipePositionX = [];
	var recipePositionY = [];
	for(var i=0; i<32; i++){
		for(var k=0; k<10; k++){
			recipePositionY.push(i*76);
		}
	}
	for(var i=0, j=0; i<320; i++){
		recipePositionX[i] = j*76;
		j++;
		if(j==10){j=0;}
		$('.recipe').append('<div></div>');
		$('.recipe>div').eq(i)
			.css({
				'background-position-x':recipePositionX[i]*-1,
				'background-position-y':recipePositionY[i]*-1,
				'transform':
					'translateX('+Math.floor(Math.random()*400-200)+'px)'
					+'translateY('+Math.floor(Math.random()*800)+'px)'
					+'rotate('+Math.floor(Math.random()*600-300)+'deg)',
				'transition-delay':(i*0.05)+'s'
			});
	}
	// recipe에 태그 추가
	// 스크롤 위치별 article2Nav 표시
	var winHeight = $(window).height();
	var winCenter = $(window).scrollTop()+winHeight/2;
	var yogerpresso = $('.yogerpresso').offset().top;
	var cafenery = $('.cafenery').offset().top;
	var story = $('.story').offset().top;
	var oneDay = $('.oneDay').offset().top;
	var event = $('.event').offset().top;
	var magazine = $('.magazine').offset().top;
	var sns = $('.sns').offset().top;
	var yogerpressoHeight = $('.yogerpresso').height();
	var cafeneryHeight = $('.cafenery').height();
	var storyHeight = $('.story').height();
	var oneDayHeight = $('.oneDay').height();
	var eventHeight = $('.event').height();
	var magazineHeight = $('.magazine').height();
	var snsHeight = $('.sns').height();
	var lastCenter;
	// storyList offset 변수에 저장
	var position = [];
	for(var i=0; i<$('.position').length ;i++){
		position[i] = $('.position').eq(i).offset().top;
	}
	// storyList offset 변수에 저장
	setTimeout(function(){
		winHeight = $(window).height();
		winCenter = $(window).scrollTop()+winHeight/2;
		yogerpresso = $('.yogerpresso').offset().top;
		cafenery = $('.cafenery').offset().top;
		story = $('.story').offset().top;
		oneDay = $('.oneDay').offset().top;
		event = $('.event').offset().top;
		magazine = $('.magazine').offset().top;
		sns = $('.sns').offset().top;
		yogerpressoHeight = $('.yogerpresso').height();
		cafeneryHeight = $('.cafenery').height();
		storyHeight = $('.story').height();
		oneDayHeight = $('.oneDay').height();
		eventHeight = $('.event').height();
		magazineHeight = $('.magazine').height();
		snsHeight = $('.sns').height();
		// storyList offset 변수에 저장
		for(var i=0; i<$('.position').length ;i++){
			position[i] = $('.position').eq(i).offset().top;
		}
		// storyList offset 변수에 저장
	},1000);
	var page=0;
	$(window).scroll(function(){
		winCenter = $(window).scrollTop()+winHeight/2;
		var divOffset1 = $('.menuList>li:nth-child(1)>a>div:nth-child(1)').offset();
		$('.menuListCopy1').offset(divOffset1);
		var divOffset2 = $('.menuList>li:nth-child(2)>a>div:nth-child(1)').offset();
		$('.menuListCopy2').offset(divOffset2);
		var divOffset3 = $('.menuList>li:nth-child(3)>a>div:nth-child(1)').offset();
		$('.menuListCopy3').offset(divOffset3);
		var divOffset4 = $('.menuList>li:nth-child(4)>a>div:nth-child(1)').offset();
		$('.menuListCopy4').offset(divOffset4);
		var li1DivLeft = parseFloat($('.menuList>li:nth-child(1)>a>div:nth-child(2)').css('left'));
		var li1DivTop = parseFloat($('.menuList>li:nth-child(1)>a>div:nth-child(2)').css('top'));
		var li2DivLeft = parseFloat($('.menuList>li:nth-child(2)>a>div:nth-child(2)').css('left'));
		var li2DivTop = parseFloat($('.menuList>li:nth-child(2)>a>div:nth-child(2)').css('top'));
		var li3DivLeft = parseFloat($('.menuList>li:nth-child(3)>a>div:nth-child(2)').css('left'));
		var li3DivTop = parseFloat($('.menuList>li:nth-child(3)>a>div:nth-child(2)').css('top'));
		var li4DivLeft = parseFloat($('.menuList>li:nth-child(4)>a>div:nth-child(2)').css('left'));
		var li4DivTop = parseFloat($('.menuList>li:nth-child(4)>a>div:nth-child(2)').css('top'));
		if(cafenery > winCenter && winCenter > yogerpresso){
			$('.article2Nav>li').eq(0).addClass('on').siblings().removeClass('on');
			$('.article').not('.yogerpresso').children('ul').children('li').removeClass('on');
			$('.yogerpresso').find('*').addClass('on');
			if(winCenter>lastCenter){
				$('.menuList>li:nth-child(1)>a>div:nth-child(2)').css({'left':(li1DivLeft-1)+'px','top':(li1DivTop+1)+'px'});
			}
			else{
				$('.menuList>li:nth-child(1)>a>div:nth-child(2)').css({'left':(li1DivLeft+1)+'px','top':(li1DivTop-1)+'px'});
			}
			if(winCenter>lastCenter){
				$('.menuList>li:nth-child(2)>a>div:nth-child(2)').css({'left':(li2DivLeft+1)+'px','top':(li2DivTop)+'px'});
			}
			else{
				$('.menuList>li:nth-child(2)>a>div:nth-child(2)').css({'left':(li2DivLeft-1)+'px','top':(li2DivTop)+'px'});
			}
			if(winCenter>lastCenter){
				$('.menuList>li:nth-child(3)>a>div:nth-child(2)').css({'left':(li3DivLeft-1)+'px','top':(li3DivTop+1)+'px'});
			}
			else{
				$('.menuList>li:nth-child(3)>a>div:nth-child(2)').css({'left':(li3DivLeft+1)+'px','top':(li3DivTop-1)+'px'});
			}
			if(winCenter>lastCenter){
				$('.menuList>li:nth-child(4)>a>div:nth-child(2)').css({'left':(li4DivLeft+1)+'px','top':(li4DivTop-1)+'px'});
			}
			else{
				$('.menuList>li:nth-child(4)>a>div:nth-child(2)').css({'left':(li4DivLeft-1)+'px','top':(li4DivTop+1)+'px'});
			}
		}
		else if(story > winCenter && winCenter >= cafenery){
			$('.article2Nav>li').eq(1).addClass('on').siblings().removeClass('on');
			$('.article').not('.cafenery').children('ul').children('li').removeClass('on');
			$('.cafenery>.h2Copy>li').addClass('on');
			$('.cafenery>p').addClass('on');
		}
		else if(oneDay > winCenter && winCenter >= story){
			$('.article2Nav>li').eq(2).addClass('on').siblings().removeClass('on');
			$('.article').not('.story').children('ul').children('li').removeClass('on');
			$('.story').find('*').addClass('on');
		}
		else if(event > winCenter && winCenter >= oneDay){
			$('.article2Nav>li').eq(3).addClass('on').siblings().removeClass('on');
			$('.article').not('.oneDay').children('ul').children('li').removeClass('on');
			$('.oneDay').find('*').addClass('on');
		}
		else if(magazine > winCenter && winCenter >= event){
			$('.article2Nav>li').eq(4).addClass('on').siblings().removeClass('on');
			$('.article').not('.event').children('ul').children('li').removeClass('on');
			$('.event').find('*').addClass('on');
		}
		else if(sns > winCenter && winCenter >= magazine){
			$('.article2Nav>li').eq(5).addClass('on').siblings().removeClass('on');
			$('.article').not('.magazine').children('ul').children('li').removeClass('on');
			$('.magazine').find('*').addClass('on');
		}
		else if(winCenter >= sns){
			$('.article2Nav>li').eq(6).addClass('on').siblings().removeClass('on');
			$('.article').not('.sns').children('ul').children('li').removeClass('on');
			$('.sns').find('*').addClass('on');
		}
		else{
			$('.article2Nav>li').removeClass('on');
			$('.yogerpresso>ul>li').removeClass('on');
		}
		if(winCenter>cafeneryContentsPCopy){
			$('.cafeneryContentsPCopy>div').addClass('on');
		}
		if(winCenter>cafenery2Copy){
			$('.cafenery2Copy>div').addClass('on');
		}
		if(winCenter>cafenery4Copy){
			$('.cafenery4Copy>div').addClass('on');
		}
		// winCenter가 클래스명이 position인 태그보다 내려오면 addClass
		for(var i=0; i<position.length; i++){
			if(winCenter+200 > position[i]){
				$('.position.position'+i).addClass('active');
			}
		}
		// winCenter가 클래스명이 position인 태그보다 내려오면 addClass
		// articleCanvas
		if(cafenery > winCenter && winCenter > yogerpresso && page != 1){
			page=1;
			fArticleBg(0);
		}
		else if(story > winCenter && winCenter >= cafenery && page != 2){
			page=2;
			fArticleBg(1);
		}
		else if(oneDay > winCenter && winCenter >= story && page != 3){
			page=3;
			fArticleBg(2);
		}
		else if(event > winCenter && winCenter >= oneDay && page != 4){
			page=4;
			fArticleBg(3);
		}
		else if(magazine > winCenter && winCenter >= event && page != 5){
			page=5;
			fArticleBg(4);
		}
		else if(sns > winCenter && winCenter >= magazine && page != 6){
			page=6;
			fArticleBg(5);
		}
		else if(winCenter >= sns && page != 7){
			page=7;
			fArticleBg(6);
		}
		// articleCanvas
		lastCenter = winCenter;
	});
	// 스크롤 위치별 article2Nav 표시
	// article2Nav>li click
	$('.article2Nav>li').click(function(){
		var idx = $(this).index();
		var article2Offset = $('.article2>div').eq(idx).offset().top;
		$('html, body').stop(true).animate({scrollTop:article2Offset});
	});
	// article2Nav>li click
	// article2>div>h2 transform
	function charTransform(name){
		var h2 = $('.'+name+'>h2').text();
		$('.'+name+'>h2').hide();
		var nameArray = [];
		$('.'+name+'>h2').after('<ul class="h2Copy"></ul>');
		for(var i=0; i<h2.length; i++){
			nameArray.push(h2.charAt(i));
			$('.'+name+'>.h2Copy').append('<li></li>');
			$('.'+name+'>.h2Copy>li').eq(i).text(nameArray[i]).css({'transform':
				'translateX('+ Math.floor(Math.random()*200-100) +'px) translateY('+ Math.floor(Math.random()*200-100) +'px) rotateX('+ Math.floor(Math.random()*200-100) +'deg) rotateY('+ Math.floor(Math.random()*200-100) +'deg)',
			});
		}
	}
	charTransform('yogerpresso');
	charTransform('cafenery');
	charTransform('story');
	charTransform('oneDay');
	charTransform('event');
	charTransform('magazine');
	charTransform('sns');
	// article2>div>h2 transform
	// .menuList tag 추가
	function menuListCopy(nth, h3, span, p){
		$('.menuList>li:nth-child('+nth+')>a>div').eq(1).append('<div class="menuListCopy'+nth+'"></div>');
		$('.menuListCopy'+nth).append('<h3>'+h3+'</h3>');
		$('.menuListCopy'+nth+'>h3').append('<span>'+span+'</span>');
		$('.menuListCopy'+nth).append('<p>'+p+'</p>');
		var offset = $('.menuList>li:nth-child('+nth+')>a>div:nth-child(1)').offset();
		$('.menuListCopy'+nth).offset(offset);
	}
	setTimeout(function(){
		menuListCopy(1, '요거프레소 ', '커피', 'Yogerpresso Coffee');
		menuListCopy(2, '요거프레소 ', '디저트', 'Yogerpresso Dessert');
		menuListCopy(3, '요거프레소 ', '요거트', 'Yogerpresso Yogurt');
		menuListCopy(4, '요거프레소 ', '드링크', 'Yogerpresso Drink');
	},500);
	// .menuList tag 추가
	// cafenery text transform
	function textTransform(className){
		var text = $('.'+className).text();
		$('.'+className).hide();
		$('.'+className).after('<div class="'+className+'Copy"></div>');
		var textArray = [];
		for(var i=0; i<text.length; i++){
			textArray[i] = text.charAt(i);
			$('.'+className+'Copy').append('<div>'+textArray[i]+'</div>');
			$('.'+className+'Copy>div').eq(i).css({'transform':
				'translateX('+ Math.floor(Math.random()*200-100) +'px) translateY('+ Math.floor(Math.random()*200-100) +'px) rotateX('+ Math.floor(Math.random()*800-400) +'deg) rotateY('+ Math.floor(Math.random()*800-400) +'deg)',
			});
		}
		$('.'+className+'Copy').css('height','150px');
		$('.'+className+'Copy>div').css({'float':'left','transition':'all 5s'});
		for(var i=0; i<text.length; i++){
			if(textArray[i].indexOf(' ')!==-1){
				$('.'+className+'Copy>div').eq(i).css({'width':'8px','height':'24px'});
			}
			else if(textArray[i].indexOf('/')!==-1){
				$('.'+className+'Copy>div').eq(i).css({'float':'none','height':'50px','display':'block'}).text('');
			}
		}
	}
	textTransform('cafeneryContentsP');
	textTransform('cafenery2');
	textTransform('cafenery4');
	var cafeneryContentsPCopy = $('.cafeneryContentsPCopy').offset().top;
	var cafenery2Copy = $('.cafenery2Copy').offset().top;
	var cafenery4Copy = $('.cafenery4Copy').offset().top;
	setTimeout(function(){
		cafeneryContentsPCopy = $('.cafeneryContentsPCopy').offset().top;
		cafenery2Copy = $('.cafenery2Copy').offset().top;
		cafenery4Copy = $('.cafenery4Copy').offset().top;
	}, 1000);
	// cafenery text transform
	// event mousemove
	var moveEvent2 = 0;
	$('.event1').mousemove(function(e){
		var event1Center = $('.event1').offset().left + $('.event1').width()/2;
		var mouseX = e.pageX;
		if(event1Center < mouseX && moveEvent2 < 5){
			moveEvent2++;
			$('.event2').css('transform','rotateY('+moveEvent2+'deg)');
		}
		else if(event1Center > mouseX && moveEvent2 > -5){
			moveEvent2--;
			$('.event2').css('transform','rotateY('+moveEvent2+'deg)');
		}
	});
	// event mousemove
	// sns
	$('.snsImg>li').append('<div></div>');
	$('.snsImg>li').append('<div></div>');
	$('.snsImg>li').append('<div></div>');
	$('.snsImg>li').append('<div></div>');
	// sns
	// articleCanvas
	var articleCanvas = [];
	var articleCtx = [];
	for(var i=0; i<$('.article').length; i++){
		articleCanvas[i] = document.getElementById('articleCanvas'+i);
		articleCtx[i] = articleCanvas[i].getContext('2d');
	}
	var x = [];
	var y = [];
	var vx = [];
	var vy = [];
	var speed = 3;
	var direction = [[speed,0],[-1*speed,0],[0,speed],[0,-1*speed]];
	var count = 0;
	var clearCount = 0;
	var extraction = [];
	var randomCount = Math.floor(Math.random()*100+10);
	var drawNum = 40;
	var setDraw;
	function fArticleBg(num){
		clearInterval(setDraw);
		articleCtx[num].clearRect(0, 0, articleCanvas[num].width, articleCanvas[num].height);
		for(var i=0; i<drawNum; i++){
			extraction[i] = Math.floor(Math.random()*direction.length);
			x[i] = Math.floor(Math.random()*1400);
			y[i] = Math.floor(Math.random()*articleCanvas[num].height);
			vx[i] = direction[extraction[i]][0];
			vy[i] = direction[extraction[i]][1];
		}
		function draw(index){
			articleCtx[num].beginPath();
			articleCtx[num].moveTo(x[index], y[index]);
			x[index] = x[index] + vx[index];
			y[index] = y[index] + vy[index];
			articleCtx[num].lineTo(x[index], y[index]);
			articleCtx[num].closePath();
			articleCtx[num].stroke();
		}
		articleCtx[num].strokeStyle = 'rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+', 0.4)';
		setDraw = setInterval(function(){
			count++;
			clearCount++;
			if(clearCount==30*60*2){
				articleCtx[num].clearRect(0, 0, articleCanvas[num].width, articleCanvas[num].height);
				clearCount=0;
			}
			if(count==randomCount){
				for(var i=0; i<drawNum; i++){
					extraction[i] = Math.floor(Math.random()*direction.length);
					vx[i] = direction[extraction[i]][0];
					vy[i] = direction[extraction[i]][1];
					articleCtx[num].strokeStyle = 'rgba('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+', 0.4)';
				}
				count=0;
				randomCount = Math.floor(Math.random()*100+10);
			}
			for(var i=0; i<drawNum; i++){
				draw(i);
			}
			for(var i=0; i<drawNum; i++){
				if(x[i] < 0 || articleCanvas[num].width < x[i]){
					x[i] = Math.floor(Math.random()*articleCanvas[num].width);
				}
				if(y[i] < 0 || articleCanvas[num].height < y[i]){
					y[i] = Math.floor(Math.random()*articleCanvas[num].height);
				}
			}
		}, 30);
	}
	// articleCanvas

});