var range = document.getElementById('sliderT');

noUiSlider.create(range, {
	start: [ 10, 50 ], // Handle start position
	connect: true, // Display a colored bar between the handles
	behaviour: 'tap-drag', // Move handle on tap, bar is draggable
	range: { // Slider can select '0' to '100'
		'min': 0,
		'max': 100
	},

});

var valueInput = document.getElementById('value-input'),
	valueSpan = document.getElementById('value-span');

// When the slider value changes, update the input and span
range.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		valueInput.innerHTML = values[handle];
	} else {
		valueSpan.innerHTML = values[handle];
	}
});