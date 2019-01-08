var sheet = {
	'13857255': 'https://docs.google.com/spreadsheets/d/1WjMDP6_TgZy5-2cKntYSAmw3CZfIQCQ52BCTsWsVEFM/pubhtml',
	'8103614': 'https://docs.google.com/spreadsheets/d/1B7rp7qr6fDmHeViU9s6elPOVG5FHA9haOxVbI8gSZiY/pubhtml',
	'871153': 'https://docs.google.com/spreadsheets/d/1NtRLUBkptNJk5u_eXv7dvUn-hQCJZq_syNGRvGsYi2g/pubhtml',
	'1243903': 'https://docs.google.com/spreadsheets/d/1CscvQarFpJFn0J3VTGqy6e0LaZociBC9DUHwMNY7ZYY/pubhtml',
	'1443093': 'https://docs.google.com/spreadsheets/d/1_yPH3XFpYOHdqpH4xhFq0X8qCJB6PY8dpcvdGTEmu_M/pubhtml',
	'1553096': 'https://docs.google.com/spreadsheets/d/1__zIZ4er6ikzrRkL8XseV3LpOp_DMsEOcxEXPKJcoAU/pubhtml',
	'1979059': 'https://docs.google.com/spreadsheets/d/1Eo6oA7PNyDcSMjhZF3GoHCIxJ2YRaa06U_FOLxP0NHU/pubhtml',
	'4636340': 'https://docs.google.com/spreadsheets/d/1KYeAHicHew7oc88mxG1uUS7i71kvvcc5TaN9kjFjdu8/pubhtml',
	'7121031': 'https://docs.google.com/spreadsheets/d/1ZwCIaZqvdR4YHpoyfl5mduRcSTv__klWyY1xSzGkkHc/pubhtml',
	'10292': 'https://docs.google.com/spreadsheets/d/1Zhu1orKhs6HLDJoIN7pwoe-VTVLeQKe_CuBqeCdvr20/pubhtml',
	'27087': 'https://docs.google.com/spreadsheets/d/1jS8jCM71TuGeQQfopJMo-N-8VdIikt-BHBMBJizsP70/pubhtml',
	'27517': 'https://docs.google.com/spreadsheets/d/1JxtwB9hBGKI-p8knJz0uQjU74FWWUF9cjn7qRHTMrvE/pubhtml',
	'47488': 'https://docs.google.com/spreadsheets/d/1zfBBHPlADXKRCjcYXopS_rd_G6XPpl0qCksQJfFmKwk/pubhtml',
	'114086': 'https://docs.google.com/spreadsheets/d/1zYvBTUfwuD5F6At_-_ZnQxodQ_8GfswLz5faazt4rvc/pubhtml',
	'163536': 'https://docs.google.com/spreadsheets/d/17tASKnbMwi_QqzYmAs-HuOGy9g0Q7sop8LKUzyywpl4/pubhtml',
	'290366': 'https://docs.google.com/spreadsheets/d/1MLw-zBfwbfFcwnja1wq2aYrKms3Ya3YhBr1mH4rUvO0/pubhtml',
	'396769': 'https://docs.google.com/spreadsheets/d/1XVjuTC9Mb1X5USIRndceCmCMBZDhG7XaM4Ldcsjv9FQ/pubhtml',
	'426002': 'https://docs.google.com/spreadsheets/d/13P0zWX7qFyghXyEr8_dkoO5HAW0jWXHA1iLqcx0hXV4/pubhtml',
	'488766': 'https://docs.google.com/spreadsheets/d/11PhfQ7kGju-XPEqJdwwvDV9ixO0xWlMdLpT3Tjtl6D0/pubhtml',
	'648285': 'https://docs.google.com/spreadsheets/d/11v3dJ9Y8O6DC8o0Fbnl22UB0lRXXRsVa1JYLtTxCIBY/pubhtml'
}
var id_name = {
	'27517': '藤原',
	'1553096': 'らいらっく@3日目ス45b',
	'7121031': 'Mi\'yuki',
	'13857255': 'あさらい しき',
	'396769': 'げみ',
	'648285': 'mocha@3日目【ノ25a】',
	'871153': 'やすも',
	'1979059': '紅木春',
	'114086': '七原しえ',
	'290366': 'Noir',
	'47488': '飴村',
	'488766': 'みふる',
	'426002': 'かる',
	'163536': 'Rella',
	'1443093': 'Say HANa',
	'8103614': 'nocras＠3日目東シ40b',
	'27087': '雨',
	'1243903': 'Re°',
	'4636340': 'nanobe',
	'10292': 'ふーみ・３日目東シ32b'
}

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