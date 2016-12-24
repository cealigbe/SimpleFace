module.exports = [
	{
		"type": "heading",
		"defaultValue": "Watchface Configuration"
	},
	{
		"type": "text",
		"defaultValue": "Clay with Rocky.js"
	},
	{
		"type": "section",
		"items": [
			{
				"type": "heading",
				"defaultValue" : "Colors"
			},
			{
				"type": "color",
				"messageKey": "HourHandColor",
				"defaultValue": "0xFF0000",
				"label": "Background Color"
			},
			{
				"type": "color",
				"messageKey": "MinHandColor",
				"defaultValue": "0xFFFFFF",
				"label": "Minute Hand Color"
			},
			{
				"type": "color",
				"messageKey": "DateColor",
				"defaultValue": "0xFFAA00",
				"label": "Date Color"
			}
		]
	},
	{
		"type": "section",
		"items": [
			{
				"type": "heading",
				"defaultValue": "More Settings"
			},
			{
				"type": "toggle",
				"messageKey": "TopMark",
				"label": "12 Mark",
				"defaultValue": true
			}
		]
	},
	{
		"type": "submit",
		"defaultValue": "Save Settings"
	}
];