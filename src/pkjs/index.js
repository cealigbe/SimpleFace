Pebble.addEventListener('showConfiguration', function(e) {
	var url = 'https://cealigbe.github.io/SimpleFace/'
	
	Pebble.openURL(url);
});

Pebble.addEventListener('webviewclosed', function(e) {
	if (e && !e.response) {
		return;
	}
	
	// Return settings from config
	var settings = JSON.parse(decodeURIComponent(e.response));
	
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

Pebble.on('message', function(event) {
	if (event.data.command === 'settings') {
		restoreSettings();
	}
});

function restoreSettings() {
	// Restore settings from localStorage
	var settings = JSON.parse(localStorage.getItem('settings'));
	if (settings) {
		Pebble.postMessage(settings);
	}
}