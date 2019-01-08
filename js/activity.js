$(document).ready(function () {
	var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1J5U8rf7GXVi_VUydzF4z204NfAGSm0Nea_pVG6PMeU8/pubhtml';
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo, 
		simpleSheet: true
	} )
	function showInfo(data, tabletop) {
		var news_txt = '';
		for(var i = 0; i < data.length; i++){
			news_txt += '<div class="card my-4">';
			news_txt += '<div class="card-body">';
			news_txt += '<div class="row">';
			news_txt += '<div class="col-md-7">';
			news_txt += '<h3 class="card-title"><i class="far fa-star"></i> ' + data[i]['title'] + '</h3>';
			news_txt += '<ul class="card-text">';
			news_txt += '<li>活動時間：' + data[i]['time'] + '</li>';
			news_txt += '<li>活動地點：' + data[i]['address_name'] + '</li>';
			news_txt += '<li>活動內容：' + data[i]['content'] + '</li>';
			news_txt += '<li>門票費用：' + data[i]['fee'] + '</li>';
			news_txt += '<li>主辦單位：' + data[i]['host'] + '</li>';
			news_txt += '</ul>';
			news_txt += '<div class="my-4"><a href="' + data[i]['url'] + '" class="btn btn-light light-gray" target="_blank">詳細資料...</a></div>';
			news_txt += '</div>';
			news_txt += '<div class="col-md-5">';
			news_txt += '<div class="embed-responsive embed-responsive-4by3">';
			news_txt += '<iframe id="map" class="embed-responsive-item" src="http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=' + data[i]['address'] + '&z=15&t=p&output=embed"><p>Your browser does not support iframes.</p></iframe>';
			news_txt += '</div>';
			news_txt += '</div>';		
			news_txt += '</div>';
			news_txt += '</div>';
			news_txt += '</div>';
		}
		$('#news').html(news_txt);
		$('#loading').hide();
		$('#page_content').show();
	}
	
})