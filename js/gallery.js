$(document).ready(function () {
	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1A2F4LWlsjwY7gMjnHOkOsNRRS-mc5qYqvkEI6yI6CUw/pubhtml';
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo, 
		simpleSheet: true
	} )
	function showInfo(data, tabletop) {
		var swiper_txt = '';
		swiper_txt += '<div class="swiper-container my-5">'
		swiper_txt += '<div class="swiper-wrapper" >'
		for(var i = 0; i < data.length; i++){
			swiper_txt += '<div class="swiper-slide">';
			swiper_txt += '<img src="./img/profile_image/' + data[i]['user_id'] + '.jpg" class="img-thumbnail">'
			swiper_txt += '</div>';
		}
		swiper_txt += '</div>';
		swiper_txt += '</div>';
		// swiper_txt += '<div class="swiper-pagination"></div>';
		// swiper_txt += '<div class="swiper-button-prev"></div>';
		// swiper_txt += '<div class="swiper-button-next"></div>';
		$('#swipe').html(swiper_txt);
		var mySwiper = new Swiper ('.swiper-container', {
			effect: 'coverflow',
			direction: 'horizontal',
			grabCursor: true,
			slidesPerView: "auto",
			centeredSlides: true,
			loop: true,
			preventClicks : false,
			slideToClickedSlide: true,
			keyboard: true,
			simulateTouch: true,
			coverflowEffect:{
				rotate: 40,
				stretch: 40,
				depth: 100,
				modifier: 1.5,
				slideShadows: true
			},
			// pagination: {
			// 	el: '.swiper-pagination',
			// },		
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },
			on:{
					transitionEnd: function(){
						showContent(this.realIndex, data);
						$('#loading').hide();
						$('#page_content').show();
						console.log(this.realIndex)
					},
			},
		}) 
	}
	function showContent(index, data){
		$('#name').html('<h4 class="col-sm">' + data[index]['name'] + '</h4>');
		$('#name').attr('href', './illusts.html?uid=' + data[index]['user_id']);
		if(data[index]['twitter'] == ""){
			$('#twitter').removeClass('isAbled').addClass('isDisabled')
		}
		else{
			$('#twitter').removeClass('isDisabled').addClass('isAbled').attr('href', 'https://twitter.com/' + data[index]['twitter']);
		}
		if(data[index]['homepage'] == ""){
			$('#home').removeClass('isAbled').addClass('isDisabled')
		}
		else{
			$('#home').removeClass('isDisabled').addClass('isAbled').attr('href', data[index]['homepage']);
		}
		$('#pixiv').removeClass('isDisabled').addClass('isAbled').attr('href', 'https://www.pixiv.net/member.php?id=' + data[index]['user_id']);
		var loc = "";
		var job = "";
		var intro = data[index]['introduction'];
		intro = intro.replace(/\\r\\n\\r\\n/g,"<br/>");
		intro = intro.replace(/\\r\\n/g,"<br/>");
		intro = intro.replace(/\\xa0/g,"&nbsp;");
		intro = intro.replace(/\\u3000/g,"&nbsp;&nbsp;");
		if(data[index]['location'] == ""){
			loc = '<i class="fas fa-map-marker-alt"></i> 地區：不公開';
		}
		else{
			loc = '<i class="fas fa-map-marker-alt"></i> 地區：' + data[index]['location']
		}
		if(data[index]['job'] == ""){
			job = '職業：不公開';
		}
		else{
			job = '職業：' + data[index]['job']
		}
		$('#loc').html(loc);
		$('#job').html(job);
		$('#work').html('作品數：' + data[index]['works']);
		$('#heart').html('人氣：' + data[index]['favorites']);
		$('#intro').html(intro.substring(2, intro.length-2));
		$('#illu_1').attr('src', './img/square_medium/' + data[index]['illust_1'] + '.jpg');
		$('#illu_2').attr('src', './img/square_medium/' + data[index]['illust_2'] + '.jpg');
		$('#illu_3').attr('src', './img/square_medium/' + data[index]['illust_3'] + '.jpg');
		$('#illu_4').attr('src', './img/square_medium/' + data[index]['illust_4'] + '.jpg');
		$('#more').attr('href', './illusts.html?uid=' + data[index]['user_id']);
	}

	  
})