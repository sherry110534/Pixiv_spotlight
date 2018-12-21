$(document).ready(function(){

});
function contact_res(){
	res = {
		'name': $('input[name="name"]').val(),
		'email': $('input[name="email"]').val(),
		'msg': $('textarea[name="msg"]').val(),
	};
	if(res.name == null || res.name == ""){
		$('#name').addClass('is-invalid');
		return false;
	}
	else if(res.email == null || res.email == ""){
		$('#email').addClass('is-invalid');
		return false;
	}
	else if(res.msg == null || res.msg == ""){
		$('#msg').addClass('is-invalid');
		return false;
	}
	else{
		var MySubmit = "https://docs.google.com/forms/d/e/1FAIpQLSej6drhos6iR6kPyq7bdQts9KE-kNU2Y-gMa7LF2jGXi97WkA/formResponse?usp=pp_url&entry.1164540671=" + res.name + "&entry.350298919=" + res.email + "&entry.242647974=" + res.msg;
		$.ajax({
			url: MySubmit,
			complete: function(res){
				$('input[name="name"]').val('');
				$('input[name="email"]').val('');
				$('textarea[name="msg"]').val('');
				$('#contact').modal('hide');
				$('#ack').modal('show');
			}
		})
	}
}