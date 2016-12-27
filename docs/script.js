var submitButton = document.getElementById('submit');

var color = {
	"HourHandColor": "FF0000",
	"MinHandColor": "FFFFFF",
	"DateColor": "FFAA00"
};

var gray = {
	"HourHandColor": "FF0000",
	"MinHandColor": "555555",
	"DateColor": "AAAAAA"
};

var white = {
	"HourHandColor": "FFFFFF",
	"MinHandColor": "FFFFFF",
	"DateColor": "FFFFFF"
};

var styles = [color, gray, white];

submitButton.addEventListener('click', function() {
	var radios = document.getElementsByName('styling');
	var ind;

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			ind = radios[i].value;
			break;
		}
	}

	var style = styles[ind];

	function getQueryParam(variable, defaultValue) {
		var query = location.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] === variable) {
				return decodeURIComponent(pair[1]);
			}
		}
		return defaultValue || false;
	}
	var return_to = getQueryParam('return_to', 'pebblejs://close#');

	document.location = return_to + encodeURIComponent(JSON.stringify(style));

	window.close();
});
