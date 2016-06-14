$(function() {

// ---------Serif filter buttons--------- //
var serifpic = $(".serifFonts img");
var sanspic = $(".sansFonts img");
var slabpic = $(".slabFonts img");

var largepic = $(".largeBrackets img");
var smallpic = $(".smallBrackets img");

var sympic = $(".symm img");
var asympic = $(".asymm img");

var curvepic = $(".curve img");
var flatpic = $(".flat img");


var serifFontsClick =0;
var sansFontsClick =0;
var slabFontsClick =0;

var largeClick =0;
var smallClick =0;

var symClick =0;
var asymClick =0;

var curveClick =0;
var flatClick =0;


$(".serifFonts img").click(function() {
	if (serifFontsClick%2 == 0){

	 	serifpic.attr("src","img/serif.png")
	 	sanspic.attr("src","img/sansLight.png")
	 	slabpic.attr("src","img/slabLight.png")
		sansFontsClick =0;
		slabFontsClick =0;
	}

	else{
	 	serifpic.attr("src","img/serifLight.png")
	}
	serifFontsClick++;
});

$(".sansFonts img").click(function() {
	if (sansFontsClick%2 == 0){
	 	sanspic.attr("src","img/sans.png")
	 	serifpic.attr("src","img/serifLight.png")
	 	slabpic.attr("src","img/slabLight.png")
		serifFontsClick =0;
		slabFontsClick =0;
	}

	else{
	 	sanspic.attr("src","img/sansLight.png")
	}
	sansFontsClick++;
});


$(".slabFonts img").click(function() {
	if (slabFontsClick%2 == 0){
	 	slabpic.attr("src","img/slab.png")
	 	serifpic.attr("src","img/serifLight.png")
	 	sanspic.attr("src","img/sansLight.png")
		sansFontsClick =0;
		serifFontsClick =0;
	}

	else{
	 	slabpic.attr("src","img/slabLight.png")
	}
	slabFontsClick++;
});

$(".largeBrackets img").click(function() {
	if (largeClick%2 == 0){
	 	largepic.attr("src","img/large.png")
	 	smallpic.attr("src","img/smallLight.png")
		smallClick =0;
	}

	else{
	 	largepic.attr("src","img/largeLight.png")
	}
	largeClick++;
});

$(".smallBrackets img").click(function() {
	if (smallClick%2 == 0){
	 	smallpic.attr("src","img/small.png")
	 	largepic.attr("src","img/largeLight.png")
		largeClick =0;
	}

	else{
	 	smallpic.attr("src","img/smallLight.png")
	}
	smallClick++;
});


$(".symm img").click(function() {
	if (symClick%2 == 0){
	 	sympic.attr("src","img/symm.png")
	 	asympic.attr("src","img/asymmLight.png")
		asymClick =0;
	}

	else{
	 	sympic.attr("src","img/symmLight.png")
	}
	symClick++;
});

$(".asymm img").click(function() {
	if (asymClick%2 == 0){
	 	asympic.attr("src","img/asymm.png")
	 	sympic.attr("src","img/symmLight.png")
		symClick =0;
	}

	else{
	 	asympic.attr("src","img/asymmLight.png")
	}
	asymClick++;
});

$(".curve img").click(function() {
	if (curveClick%2 == 0){
	 	curvepic.attr("src","img/curve.png")
	 	flatpic.attr("src","img/flatLight.png")
		flatClick =0;
	}

	else{
	 	curvepic.attr("src","img/curveLight.png")
	}
	curveClick++;
});

$(".flat img").click(function() {
	if (flatClick%2 == 0){
	 	flatpic.attr("src","img/flat.png")
	 	curvepic.attr("src","img/curveLight.png")
		curveClick =0;
	}

	else{
	 	flatpic.attr("src","img/flatLight.png")
	}
	flatClick++;
});


});

