$(document).ready(function () {
	// 要先取得網址裡的路徑起點終點經緯度參數 
	var uid = decodeURIComponent(GetUrlVar('uid'));
	var publicSpreadsheetUrl = sheet[uid];
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo, 
		simpleSheet: true
	} )
	function showInfo(data, tabletop) {
		$('#user_img').attr('src', './img/profile_image/' + uid + '.jpg');
		$('#name').html('<i class="fas fa-heart fa-xs"></i>    ' + id_name[uid] + '    <i class="fas fa-heart fa-xs"></i>')
		var work_txt = '';
		var modal_txt = '';
		for(var i = 0; i < data.length; i++){
			var ill_date = data[i]['create_date'];
			ill_date = ill_date.substring(0, 10);
			var tag = data[i]['tags'];
			tag = tag.replace(/\'/g,'"');
			try{
				tag = JSON.parse(tag);
			}
			catch(err){
				console.log(err.message);
				tag = JSON.parse('[{"name": ""}]');
			}
			work_txt += '<div class="col-lg-3 col-md-4 col-xs-6">';
			work_txt += '<a class="d-block mb-4 h-100 hand"  data-toggle="modal" data-target="' + '#_' + data[i]['illust_id'] + '">';
			work_txt += '<img class="img-fluid img-thumbnail" src="./img/square_medium/' + data[i]['illust_id'] + '.jpg" alt="">';
			work_txt += '</a>';
			work_txt += '</div>';

			modal_txt += '<div class="modal fade" id="_' + data[i]['illust_id'] + '" tabindex="-1" role="dialog" aria-hidden="true">';
			modal_txt += '<div class="modal-dialog" role="document">';
			modal_txt += '<div class="modal-content">';
			modal_txt += '<div class="modal-header">';
			modal_txt += '<h5 class="modal-title gray"><i class="fas fa-leaf fa-xs"></i>&nbsp;' + data[i]['title'] + '</h5>';
			modal_txt += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
			modal_txt += '<span aria-hidden="true">&times;</span>';
			modal_txt += '</button>';
			modal_txt += '</div>';
			modal_txt += '<div class="modal-body gray">';
			modal_txt += '<div class="text-center">';
			modal_txt += '<img class="img-fluid img-thumbnail" src="./img/medium/' + data[i]['illust_id'] + '.jpg" alt="">';
			modal_txt += '</div>';
			modal_txt += '<div class="container my-2">';
			modal_txt += '<div class="row">';
			modal_txt += '<div class="col-sm-6 col-md-4">' + ill_date + '</div>';
			modal_txt += '<div class="col-sm-6 col-md-4"></div>';
			modal_txt += '<div class="col-sm-6 col-md-4 text-lg-right"><i class="fas fa-heart fa-xs"></i> ' + data[i]['total_bookmarks'] + '</div>';
			modal_txt += '</div>';
			modal_txt += '<div class="row font">';
			modal_txt += '<div class="col-sm-12 col-lg-12 col-md-12 text"  id="img_intro">';
			modal_txt += '說明：<br>';
			modal_txt += data[i]['caption'];
			modal_txt += '</div>';
			modal_txt += '</div>';
			modal_txt += '<div id="tag" class="my-2">';
			for(var j = 0; j < tag.length; j++){
				modal_txt += '<span class="blue font">#' + tag[j]['name'] + '  </span>'
			}
			modal_txt += '</div>';
			modal_txt += '</div>';
			modal_txt += '</div>';
			modal_txt += '<div class="modal-footer">';
			modal_txt += '<a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id='+ data[i]['illust_id'] + '" role="button" class="btn btn-info" target="_blank">看大圖</a>';
			modal_txt += '</div>';
			modal_txt += '</div>';
			modal_txt += '</div>';
			modal_txt += '</div>';
		}
		$('#works').html(work_txt);
		$('#illust_modal').html(modal_txt);
		$('#loading').hide();
		$('#page_content').show();
	}

	// 取得網址裡的參數 
	function GetUrlVar(VarName) 
	{
	  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	  var regexS = "[\\?&]" + VarName + "=([^&#]*)";
	  var regex = new RegExp(regexS);
	  var results = regex.exec(window.location.href);
	  if (results == null)
			return "";
	  else
		 return results[1];
	}

})