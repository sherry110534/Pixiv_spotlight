function getYoutube(video_list_id, name){
	$('#loading').show();
	var xmlhttp = new XMLHttpRequest();
	var video_list_url = '';
	video_list_url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=' + video_list_id + '&key=AIzaSyBQnNGfYg9QL1M4Xhr04kdMkkR8yfy9_CE&maxResults=50'
	$('body').on('click', '.list-group-item', function(){
		$('.list-group-item').removeClass('active');
		$(this).closest('.list-group-item').addClass('active');
	});
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			video_data = getInform(myArr);
			$('#list_name_bottom').html(name);
			showOtherVideo(video_data)
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				slidesPerView: 'auto',
				spaceBetween: 20,
				loop: true,
				preventClicks : false,
				slideToClickedSlide: true,
				keyboard: true,
				simulateTouch: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				on:{
						transitionEnd: function(){
							showVideo(this.realIndex, video_data)
							console.log(this.realIndex)
						},
				},
			})
			$('#loading').hide();
		}
	}
	xmlhttp.open("GET", video_list_url, true);
	xmlhttp.send();
}
function showInfo(data, tabletop){
	var video_data = {};
	var video_list_txt = '';
	for(var i = 0; i < data.length; i++){
		video_list_txt += '<a href="#" class="list-group-item list-group-item-action" id="list_' + i + '" onclick="getYoutube(&#039' + data[i]['list_id'] + '&#039, &#039' + data[i]['title'] + '&#039);">' + data[i]['title'] + '</a>';
	}
	$('#video_list').html(video_list_txt);
	$('#list_0').addClass('active');
	getYoutube(data[0]['list_id'], data[0]['title']);
}

function showOtherVideo(video_data){
	var swiper_txt = '';
	for(var i = 0; i < video_data.length; i++){
		swiper_txt += '<div class="swiper-slide">';
		swiper_txt += '<img class="img-fluid" src="' + video_data[i]['img_url'] + '" title="' + video_data[i]['title'] + '">';
		swiper_txt += '</div>';
	}
	$('#swiper').html(swiper_txt);
}

function getInform(arr) {
	var item = arr.items;
	var data_list = [];
	var data = {
		"video_id": "",
		"title": "",
		"description": "",
		"time": "",
		"img_url": ""
	}
	for(var i = 0; i < item.length; i++){
		if(item[i].snippet != ''){
			data.video_id = item[i].contentDetails.videoId;
			data.title = item[i].snippet.title;
			data.description = item[i].snippet.description;
			var time = item[i].contentDetails.videoPublishedAt;
			time = time.substring(0, 10);
			data.time = time;
			data.img_url = item[i].snippet.thumbnails.medium.url;
		}
		var tmp = Object.assign({}, data);
		data_list.push(tmp);
	}
	return data_list;
}

function showVideo(index, video_data){
	$('#title').html('<i class="fas fa-video"></i> ' + video_data[index]['title']);
	$('#iframe').attr('src', 'https://www.youtube.com/embed/' + video_data[index]['video_id'] + '?rel=0');
	$('#time').html('發布時間：' + video_data[index]['time']);
	$('#intro').html(video_data[index]['description'])
}
$(document).ready(function () {
	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1oZ6hgltIXKBkLuiJ_CYHDnYopxkSGhE2jwAX-ASTWAc/pubhtml';
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo, 
		simpleSheet: true
	} )
})
