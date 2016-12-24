var Clay = require('./clay');
var clayConfig = require('./config');
var clay = new Clay(clayConfig, null, { autoHandleEvents: false });

Pebble.addEventListener('showConfiguration', function(e) {
	Pebble.openURL(clay.generateUrl());
});

Pebble.addEventListener('webviewclosed', function(e) {
	if (e && !e.response) {
		return;
	}
	
	// Return settings from config
	var settings = clay.getSettings(e.response, false);
	
	var settingsFlat = {};
	Object.keys(settings).forEach(function(key) {
		if (typeof settings[key] === 'object' && settings[key]) {
			settingsFlat[key] = settings[key].value;
		} else {
			settingsFlat[key] = settings[key];
		}
	});
	
	Pebble.postMessage(settingsFlat);
});