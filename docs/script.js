var submitButton = document.getElementById('submit');

var color = {
	"HourHandColor": "0xFF0000",
	"MinHandColor": "0xFFFFFF",
	"DateColor": "0xFFAA00"
};

var gray = {
	"HourHandColor": "0xFF0000",
	"MinHandColor": "0x555555",
	"DateColor": "0xAAAAAA"
};

var white = {
	"HourHandColor": "0xFFFFFF",
	"MinHandColor": "0xFFFFFF",
	"DateColor": "0xFFFFFF"
};

var styles = [color, gray, white];

submitButton.addEventListener('click', function() {
	var radios = document.getElementByName('styling');
	var ind;

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			ind = radios[i].value;
			break;
		}
	}

	var style = styles[ind];

	function getQueryParam(variable, default) {
		var query = location.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] === variable) {
				return decodeURIComponent(pair[1]);
			}
		}
		return default || false;
	}
	var return_to = getQueryParam('return_to', 'pebblejs://close#');

	document.location = return_to + encodeURIComponent(JSON.stringify(options));

	window.close();
});