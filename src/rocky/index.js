var rocky = require('rocky');

function fractorad(fraction) {
	return fraction * 2 * Math.PI;
}

function drawTicks(ctx, cx, cy, count, inner, outer, color, weight) {
	var div = (1/count) * 2 * Math.PI;
	
	ctx.lineWidth = weight;
	ctx.strokeStyle = color;
	
	for(var i = 0; i < count; i++) {
		var angle = div * i;
		var ix = cx + Math.sin(angle) * inner;
		var iy = cx + Math.cos(angle) * inner;
		var ox = cx + Math.sin(angle) * outer;
		var oy = cx + Math.cos(angle) * outer;
		
		ctx.beginPath();
		
		ctx.moveTo(ix, iy);
		ctx.lineTo(ox, oy);
		
		ctx.stroke();
	}
	
}

function drawHand(ctx, cx, cy, angle, length, color, weight) {
	// Endpoints
	var x2 = cx + Math.sin(angle) * length;
	var y2 = cy - Math.cos(angle) * length;
	
	// Handstyle
	ctx.lineWidth = weight;
	ctx.strokeStyle = color;
	
	// Draw
	ctx.beginPath();
	
	ctx.moveTo(cx, cy);
	ctx.lineTo(x2, y2);
	
	ctx.stroke();
}

rocky.on('draw', function(event) {
	// Get the CanvasRenderingContext2D object
	var ctx = event.context;
	var d = new Date();
	
	// Clear screen
	ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
	
	// Determine display dims
	var w = ctx.canvas.unobstructedWidth;
	var h = ctx.canvas.unobstructedHeight;
	
	// Get center and length
	var cx = w/2;
	var cy = h/2;	
	
	var maxLength = (Math.min(w, h) - 50) / 2;
	
	// Draw ticks
	ctx.fillStyle = "dimgray";
	ctx.rockyFillRadial(cx, cy-70, 0, 3, 0, 2 * Math.PI);
	
	// Draw day
	ctx.fillStyle = 'lightsalmon';
	ctx.font = '20px bold Leco-numbers';
	ctx.fillText(d.getDate(), cx + 50, cy-13, w/2);
	
	// Calc and draw hands
	var minFrac = (d.getMinutes()) / 60;
	var minAngle = fractorad(minFrac);
	
	drawHand(ctx, cx, cy, minAngle, maxLength, "white", 2);
	
	var hourFrac = (d.getHours() % 12 + minFrac) / 12;
	var hourAngle = fractorad(hourFrac);
	
	drawHand(ctx, cx, cy, hourAngle, maxLength * 0.6, "red", 3);
	
	ctx.fillStyle = "white";
	ctx.rockyFillRadial(cx, cy, 0, 3, 0, 2 * Math.PI);
});

rocky.on('minutechange', function(event) {
	// Log on console
	//console.log("Another minute with your Pebble!");
	
	// Redraw screen
	rocky.requestDraw();
});

