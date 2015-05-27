// Fix map for IE
if (!('map' in Array.prototype)) { 
  Array.prototype.map = function (mapper, that /*opt*/) { 
    var other = new Array(this.length); 
    for (var i = 0, n = this.length; i < n; i++) 
      if (i in this) 
        other[i] = mapper.call(that, this[i], i, this); 
    return other; 
  }; 
};

var mapSVG = {
	states: ['all','B14x','B13x','B12x','B15x','low','B131', 'B130', 'B85', 'B134', 'B133', 'B132', 'B155', 'B139', 'B140', 'B23', 'B145', 'B148', 'B149', 'B147', 'B144', 'B125', 'B138', 'B153', 'B154', 'B150', 'B151', 'B152'],
	all: "M240 5 V 500 H 490 V 295 H 515 V 315 H 665 V 160 H 515 V 230 H 490 V 5 Z ",
	B14x:"M420 148 V 200 H 442 V 148 Z",
	B13x:"M 320 500 V 445 H 340 V 440 H 387 V 445 H 405 V 500Z",
	B12x:"M420 500 V 472 H 445 V 469 H 465 V 472 H 490 V 500 H 475 V 495 H 435 V 500Z",
	B15x:"M240 475 V 430 H 305 V 470 H 307 V 475 Z",
	// low:"M330 200 V 240 H 340 L 345 245 V 253 H 382 V 245 L 387 240 H 397 V 200 H 387 L 382 195 V 182 H 345 V 195 L 340 Z",
	B131: "M323 475 H 355 V 487 H 323Z",
	B130: "M365 448 H 402 V 475 H 365Z",
	B85: "M243 472 V 455 H 285 V 472Z",
	B134: "M375 487 H 402 V 497 H 375Z",
	B133: "M323 487 H 355 V 497 H 323Z",
	B132: "M375 475 H 402 V 487 H 375Z",
	B155: "M478 497 V 475 H 487 V 497Z",
	B139: "M525 180 V 190 H 550 V 195 H 575 V 190 H 600 V 180 Z",
	B140: "M525 170 V 180 H 600 V 170 Z",
	B23: "M325 135 H 335 V 145 H 390 V 135 H 400 V 94 H 390 V 90 S 362 20 335 90 V 94 H 325Z",
	B145: "M240 5 V 110 H 260 V 25 H 265 V 5 Z",
	B148: "M430 151 V 197 H 435 V 151 Z",
	B149: "M435 151 V 197 H 439 V 151 Z",
	B147: "M423 151 V 197 H 430 V 151 Z",
	B144: "M420 295 V 315 H 490 V 295 H 465 V 290 H 445 V 295Z",
	B125: "M423 487 V 475 H 445 V 487Z",
	B138: "M 355 497 V 475 H 375 V 497Z",
	B153: "M268 454 V 433 H 256 V 454Z",
	B154: "M256 454 V 433 H 243 V 454Z",
	B150: "M302 454 V 433 H 291 V 454Z",
	B151: "M291 454 V 433 H 280 V 454Z",
	B152: "M280 454 V 433 H 268 V 454Z"
}

var browser = BrowserDetect;

if (isOldBrowser()) {
	$('#old_browser_msg').show();
	$('#wtf').hide();
	$('fieldset#state').addClass('ff3');
	$('#ie8_percents').addClass('ff3');
	$('#share2').addClass('ff3');
	$('#poweredby.old_browsers').show();
}

var buckets = 11,
	colorScheme = 'rbow2',
	days = [
		{ name: 'Monday', abbr: 'Mo' },
		{ name: 'Tuesday', abbr: 'Tu' },
		{ name: 'Wednesday', abbr: 'We' },
		{ name: 'Thursday', abbr: 'Th' },
		{ name: 'Friday', abbr: 'Fr' },
		{ name: 'Saturday', abbr: 'Sa' },
		{ name: 'Sunday', abbr: 'Su' }
	],
	types = {
		all: 'All',
		fall: 'Fall',
		spring: 'Spring'
	},
	hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'],
	stateAbbrs = ['all', 'B131', 'B130', 'B85', 'B134', 'B133', 'B132', 'B155', 'B139', 'B140', 'B23', 'B145', 'B148', 'B149', 'B147', 'B144', 'B125', 'B138', 'B153', 'B154', 'B150', 'B151', 'B152'],
	states = {
		all: { name: 'All Libraries', abbr: 'all', offset: 0 },
		B14x: {name: 'Avery', abbr:'B14x',offset: 0},
		B12x: {name: 'John Jay', abbr:'B12x',offset: 0},
		B13x: {name: 'Butler', abbr:'B13x',offset: 0},
		B15x: {name: 'Lerner', abbr:'B15x',offset: 0},
		B131: { name: 'Butler 3', abbr: 'B131', offset: 0 },
		B130: { name: 'Butler 2', abbr: 'B130', offset: 0 },
		B132: { name: 'Butler 4', abbr: 'B132', offset: 0 },
		B85: { name: 'Roone Arledge', abbr: 'B85', offset: 0 },
		B134: { name: 'Butler 6', abbr: 'B134', offset: 0 },
		B133: { name: 'Butler 5', abbr: 'B133', offset: 0 },
		B155: { name: "JJ's Place", abbr: 'B155', offset: 0 },
		B139: { name: 'Lehman 2', abbr: 'B139', offset: 0 },
		B140: { name: 'Lehman 3', abbr: 'B140', offset: 0 },
		B23: { name: 'Uris', abbr: '23', offset: 0 },
		B145: { name: 'Sci & Eng Library', abbr: 'B145', offset: 0 },
		B148: { name: 'Avery 2', abbr: 'B148', offset: 0 },
		B149: { name: 'Avery 3', abbr: 'B149', offset: 0 },
		B147: { name: 'Avery 1', abbr: 'B147', offset: 2 },
		B144: { name: 'Starr East Asian', abbr: 'B144', offset: 0 },
		B125: { name: 'John Jay', abbr: 'B125', offset: 0 },
		B138: { name: 'Butler Stacks', abbr: 'B138', offset: 0 },
		B153: { name: 'Lerner 4', abbr: 'B153', offset: 0 },
		B154: { name: 'Lerner 5', abbr: 'B154', offset: 0 },
		B150: { name: 'Lerner 1', abbr: 'B150', offset: 0 },
		B151: { name: 'Lerner 2', abbr: 'B151', offset: 0 },
		B152: { name: 'Lerner 3', abbr: 'B152', offset: 0 }
	};
	
var data;

if (isOldBrowser() === false) {
	createMap();
}
addStateButtons();

d3.select('#vis').classed(colorScheme, true);

d3.json('data.json', function(json) {
	
	data = json;

	createTiles();
	reColorTiles('all', 'all');
	
	if (isOldBrowser() === false) {
		drawMobilePie('all');
	}
		
	/* ************************** */
	
	// State map click events
	d3.selectAll('#map path.state').on('click', function() {
		var $sel = d3.select('path.state.sel'),
			prevState, currState;
				
		if ($sel.empty()) {
			prevState = '';
		} else {
			prevState = $sel.attr('id');
		}
		currState = d3.select(this).attr('id');
		
		if (prevState !== currState) {
			var type = d3.select('#type label.sel span').attr('class');
			reColorTiles(currState, type);
			drawMobilePie(currState);
		}
		
		d3.selectAll('#map path.state').classed('sel', false);
		d3.select(this).classed('sel', true);
		d3.select('#show_all_states').classed('sel', false);
		d3.select('#wtf h2').html(states[currState].name);
		d3.select('fieldset#state label.sel').classed('sel', false);
		d3.select('fieldset#state label[for="state_' + currState + '"]').classed('sel', true);
	});
	
	/* ************************** */
	
	// All, PC, Mobile control event listener
	$('input[name="type"]').change(function() {
		
		var type = $(this).val(),
			$sel = d3.select('#map path.state.sel');
		
		d3.selectAll('fieldset#type label').classed('sel', false);
		d3.select('label[for="type_' + type + '"]').classed('sel', true);
		
		if ($sel.empty()) {
			var state = 'all';
		} else {
			var state = $sel.attr('id');
		}
		
		reColorTiles(state, type);
		d3.select('#pc2mob').attr('class', type);
		
		var type = types[selectedType()];
		d3.select('#wtf .subtitle').html(type  + ' traffic daily');
	});
	
	/* ************************** */
	
	// All States click
	$('label[for="state_all"]').click(function() {
		
		d3.selectAll('fieldset#state label').classed('sel', false);
		$(this).addClass('sel');
		var type = d3.select('input[name="type"]').property('value');
		
		d3.selectAll('#map path.state').classed('sel', false);
		
		reColorTiles('all', type);
		drawMobilePie('all');
		
		d3.select('#wtf h2').html('All Libraries');
	});
	
	/* ************************** */
	
	// Text States list event listener
	$('input[name="state"]').change(function() {
		
		var state = $(this).val(),
			type = d3.select('input[name="type"]').property('value');
		
		d3.selectAll('fieldset#state label').classed('sel', false);
		d3.select('label[for="state_' + state + '"]').classed('sel', true);
		
		reColorTiles(state, type);
		updateIE8percents(state);
	});

	/* ************************** */
	
	// tiles mouseover events
	$('#tiles td').hover(function() {
	
		$(this).addClass('sel');
		
		var tmp = $(this).attr('id').split('d').join('').split('h'),
			day = parseInt(tmp[0]),
			hour = parseInt(tmp[1]);
		
		var $sel = d3.select('#map path.state.sel');
		
		if ($sel.empty()) {
			var state = 'all';
		} else {
			var state = $sel.attr('id');
		}
		
		var view = 'all';
		
		if (isOldBrowser() === false) {
			drawHourlyChart(state, day);
			selectHourlyChartBar(hour);
		}
		
		var type = types[selectedType()];
		d3.select('#wtf .subtitle').html(type  + ' traffic on ' + days[day].name + 's');
	
	}, function() {
		
		$(this).removeClass('sel');
		
		var $sel = d3.select('#map path.state.sel');
		
		if ($sel.empty()) {
			var state = 'all';
		} else {
			var state = $sel.attr('id');
		}
		if (isOldBrowser() === false) {
			drawHourlyChart(state, 3);
		}
		var type = types[selectedType()];
		d3.select('#wtf .subtitle').html(type  + ' traffic daily');
	});
});

/* ************************** */

function isOldBrowser() {

	var result = false;
	if (browser.browser === 'Explorer' && browser.version < 9) {
		result = true;
	} else if (browser.browser === 'Firefox' && browser.version < 4) {
		result = true;
	}
	
	//console.log(result);
	
	return result;
}


/* ************************** */

function selectedType() {
	
	//return d3.select('input[name="type"]:checked').property('value'); // IE8 doesn't like this
	return $('input[name="type"]:checked').val();
}

/* ************************** */

function addStateButtons() {

	for (var i = 1; i < stateAbbrs.length; i++) {
		var abbr = stateAbbrs[i];
		var html = '<input type="radio" id="state_' + abbr + '" name="state" value="' + abbr + '"/><label for="state_' + abbr + '"><span class="' + abbr + '">' + abbr + '</span></label>';
	
		$('fieldset#state').append(html);
	}
}

/* ************************** */

function getCalcs(state, view) {
	
	var min = 1,
		max = -1;
	
	// calculate min + max
	for (var d = 0; d < data[state].views.length; d++) {
		for (var h = 0; h < data[state].views[d].length; h++) {
			
			if (view === 'all') {
				var tot = data[state].views[d][h].fall + data[state].views[d][h].spring;
			} else {
				var tot = data[state].views[d][h][view];
			}
			
			if (tot > max) {
				max = tot;
			}
			
			if (tot < min) {
				min = tot;
			}
		}
	}
	
	return {'min': min, 'max': max};
};

/* ************************** */

function reColorTiles(state, view) {
	
	var calcs = getCalcs(state, view),
		range = [];
	
	for (var i = 1; i <= buckets; i++) {
		range.push(i);
	}
	
	var bucket = d3.scale.quantize().domain([0, calcs.max > 0 ? calcs.max : 1]).range(range),
		side = d3.select('#tiles').attr('class');
	
	
	if (side === 'front') {
		side = 'back';
	} else {
		side = 'front';
	}
	
	for (var d = 0; d < data[state].views.length; d++) {
		for (var h = 0; h < data[state].views[d].length; h++) {

			var sel = '#d' + d + 'h' + h + ' .tile .' + side,
				val = data[state].views[d][h].fall + data[state].views[d][h].spring;
			
			if (view !== 'all') {
				val = data[state].views[d][h][view];
			}
			
			// erase all previous bucket designations on this cell
			for (var i = 1; i <= buckets; i++) {
				var cls = 'q' + i + '-' + buckets;
				d3.select(sel).classed(cls , false);
			}
			
			// set new bucket designation for this cell
			var cls = 'q' + (val > 0 ? bucket(val) : 0) + '-' + buckets;
			d3.select(sel).classed(cls, true);
		}
	}
	flipTiles();
	if (isOldBrowser() === false) {
		drawHourlyChart(state, 3);
	}
}

/* ************************** */

function flipTiles() {

	var oldSide = d3.select('#tiles').attr('class'),
		newSide = '';
	
	if (oldSide == 'front') {
		newSide = 'back';
	} else {
		newSide = 'front';
	}
	
	var flipper = function(h, d, side) {
		return function() {
			var sel = '#d' + d + 'h' + h + ' .tile',
				rotateY = 'rotateY(180deg)';
			
			if (side === 'back') {
				rotateY = 'rotateY(0deg)';	
			}
			if (browser.browser === 'Safari' || browser.browser === 'Chrome') {
				d3.select(sel).style('-webkit-transform', rotateY);
			} else {
				d3.select(sel).select('.' + oldSide).classed('hidden', true);
				d3.select(sel).select('.' + newSide).classed('hidden', false);
			}
				
		};
	};
	
	for (var h = 0; h < hours.length; h++) {
		for (var d = 0; d < days.length; d++) {
			var side = d3.select('#tiles').attr('class');
			setTimeout(flipper(h, d, side), (h * 20) + (d * 20) + (Math.random() * 100));
		}
	}
	d3.select('#tiles').attr('class', newSide);
}

/* ************************** */

function drawHourlyChart(state, day) {
	
	d3.selectAll('#hourly_values svg').remove();
	
	var w = 300,
		h = 150;
	
	var weeklyData = data[state].views[day],
		view = d3.select('#type label.sel span').attr('class');
		
		
	var y = d3.scale.linear()
		.domain([0, d3.max(weeklyData, function(d) { return (view === 'all') ? d.fall + d.spring : d[view] })])
		.range([0, h]);

	
	var chart = d3.select('#hourly_values .svg')
		.append('svg:svg')
		.attr('class', 'chart')
		.attr('width', 300)
		.attr('height', 170);
		
	var rect = chart.selectAll('rect'),
		text = chart.selectAll('text');
	
	rect.data(weeklyData)
		.enter()
			.append('svg:rect')
				.attr('x', function(d, i) { return i * 12; })
				.attr('y', function(d) { return (view === 'all') ? h - y(d.fall + d.spring) : h - y(d[view]) })
				.attr('height', function(d) { return (view === 'all') ? y(d.fall + d.spring) : y(d[view]) })
				.attr('width', 10)
				.attr('class', function(d, i) { return 'hr' + i});
	
	text.data(hours)
		.enter()
			.append('svg:text')
				.attr('class', function(d, i) { return (i % 3) ? 'hidden hr' + i : 'visible hr' + i })
				.attr("x", function(d, i) { return i * 12 })
				.attr("y", 166)
				.attr("text-anchor", 'left')
				.text(String);
}

/* ************************** */

function drawMobilePie(state) {

	var w = 150,
		h = 150,
		r = Math.min(w, h) / 2,
		pieData = [1, data[state].pc2mob],
		pie = d3.layout.pie(),
		arc = d3.svg.arc().innerRadius(0).outerRadius(r),
		type = selectedType();
	
	d3.select('#pc2mob').attr('class', type);
	d3.selectAll('#pc2mob svg').remove();
	
	var chart = d3.select("#pc2mob .svg").append('svg:svg')
		.data([pieData])
		.attr("width", w)
		.attr("height", h);
	
	var arcs = chart.selectAll('g')
		.data(pie)
		.enter().append('svg:g')
			.attr("transform", "translate(" + r + "," + r + ")");
	
	arcs.append('svg:path')
		.attr('d', arc)
		.attr('class', function(d, i) { return i === 0 ? 'spring' : 'fall' });
	
	var rawMobPercent = 100 / (data[state].pc2mob + 1);
	
	if (rawMobPercent < 1) {
		var mobPercent = '< 1',
			pcPercent = '> 99';
	} else {
		var mobPercent = Math.round(rawMobPercent),
			pcPercent = 100 - mobPercent;
	}
	
	d3.select('#pc2mob .fall span').html(pcPercent + '%');
	d3.select('#pc2mob .spring span').html(mobPercent + '%');
	
	var html = d3.select('#pc2mob ul').html();
	d3.select('#ie8_percents').html(html);
}

/* ************************** */

function updateIE8percents(state) {

	var rawMobPercent = 100 / (data[state].pc2mob + 1);
	
	if (rawMobPercent < 1) {
		var mobPercent = '< 1',
			pcPercent = '> 99';
	} else {
		var mobPercent = Math.round(rawMobPercent),
			pcPercent = 100 - mobPercent;
	}
	
	d3.select('#pc2mob .fall span').html(pcPercent + '%');
	d3.select('#pc2mob .spring span').html(mobPercent + '%');
	
	var html = d3.select('#pc2mob ul').html();
	d3.select('#ie8_percents').html(html);
}




/* ************************** */

function createTiles() {

	var html = '<table id="tiles" class="front">';

	html += '<tr><th><div>&nbsp;</div></th>';

	for (var h = 0; h < hours.length; h++) {
		html += '<th class="h' + h + '">' + hours[h] + '</th>';
	}
	
	html += '</tr>';

	for (var d = 0; d < days.length; d++) {
		html += '<tr class="d' + d + '">';
		html += '<th>' + days[d].abbr + '</th>';
		for (var h = 0; h < hours.length; h++) {
			html += '<td id="d' + d + 'h' + h + '" class="d' + d + ' h' + h + '"><div class="tile"><div class="face front"></div><div class="face back"></div></div></td>';
		}
		html += '</tr>';
	}
	
	html += '</table>';
	d3.select('#vis').html(html);
}

/* ************************** */

function selectHourlyChartBar(hour) {

	d3.selectAll('#hourly_values .chart rect').classed('sel', false);
	d3.selectAll('#hourly_values .chart rect.hr' + hour).classed('sel', true);
	
	d3.selectAll('#hourly_values .chart text').classed('hidden', true);
	d3.selectAll('#hourly_values .chart text.hr' + hour).classed('hidden', false);

};

/* ************************** */

function createMap() {
	var svg = d3.select("#map").append('svg:svg')
		.attr('width', 900)
		.attr('height', 1200);
	
	var g = svg.append('svg:g')
		.attr('transform', 'scale(0.5) translate(550, -200) rotate(90)');
	
	for (s = 0; s < mapSVG.states.length; s++ ) {
		var state = mapSVG.states[s];
		
		var path = g.append('svg:path')
			.attr('id', state)
			.attr('class', 'state')
			.attr('d', mapSVG[state]);
	}	
}