$(function() {

// --------- Compare fonts---------------- //
var compareItems = $(".compareItems img")
console.log(typeof compareItems)
console.log(compareItems)
console.log(compareItems.length)

if(compareItems.length==0) {
	console.log("0 item!")
	$(".compareTray").css("background","url(img/compareTray0.png) no-repeat")
	$(".compare button").css("display","none")
} 
else{

	if(compareItems.length==1){
		console.log("1 item!")
		$(".compareTray").css("background","url(img/compareTray1.png) no-repeat")
		// $(".compareTray").css("opacity","0")
		$(".compare button").css("display","none")
	}

	else{
		console.log("2 item!")
		$(".compareTray").css("background","url(img/compareTray2.png) no-repeat")
		$(".compare button").css("display","block")
	}

}

// --------- Input Range---------------- //

$('.xHeight input:checkbox').change(
    function(){
    if($(this).is(':checked')){
        $(".xHeight div").css('opacity',"1")
        $(".xHeight label").css('opacity',"1")
    } 
    else {
        $(".xHeight div").css('opacity',"0.5")
        $(".xHeight label").css('opacity',"0.5")   
    }
});

$('.StrokeThickness input:checkbox').change(
    function(){
    if($(this).is(':checked')){
        $(".StrokeThickness div").css('opacity',"1")
        $(".StrokeThickness label").css('opacity',"1")
    } 
    else {
        $(".StrokeThickness div").css('opacity',"0.5")
        $(".StrokeThickness label").css('opacity',"0.5")   
    }
});

$('.StrokeContrast input:checkbox').change(
    function(){
    if($(this).is(':checked')){
        $(".StrokeContrast div").css('opacity',"1")
        $(".StrokeContrast label").css('opacity',"1")
    } 
    else {
        $(".StrokeContrast div").css('opacity',"0.5")
        $(".StrokeContrast label").css('opacity',"0.5")   
    }
});

$('.LetterWidth input:checkbox').change(
    function(){
    if($(this).is(':checked')){
        $(".LetterWidth div").css('opacity',"1")
        $(".LetterWidth label").css('opacity',"1")
    } 
    else {
        $(".LetterWidth div").css('opacity',"0.5")
        $(".LetterWidth label").css('opacity',"0.5")   
    }
});

$('.StressAxe input:checkbox').change(
    function(){
    if($(this).is(':checked')){
        $(".StressAxe div").css('opacity',"1")
        $(".StressAxe label").css('opacity',"1")
    } 
    else {
        $(".StressAxe div").css('opacity',"0.5")
        $(".StressAxe label").css('opacity',"0.5")   
    }
});

var slider = document.getElementById('sliderX');
noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});

var slider = document.getElementById('sliderT');
noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});

var slider = document.getElementById('sliderC');
noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});

var slider = document.getElementById('sliderW');
noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});

var slider = document.getElementById('sliderS');
noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});


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

	 	serifpic.attr("src","img/serif.svg")
	 	sanspic.attr("src","img/sansLight.svg")
	 	slabpic.attr("src","img/slabLight.svg")
		sansFontsClick =0;
		slabFontsClick =0;
	}

	else{
	 	serifpic.attr("src","img/serifLight.svg")
	}
	serifFontsClick++;
});

$(".sansFonts img").click(function() {
	if (sansFontsClick%2 == 0){
	 	sanspic.attr("src","img/sans.svg")
	 	serifpic.attr("src","img/serifLight.svg")
	 	slabpic.attr("src","img/slabLight.svg")
		serifFontsClick =0;
		slabFontsClick =0;
	}

	else{
	 	sanspic.attr("src","img/sansLight.svg")
	}
	sansFontsClick++;
});


$(".slabFonts img").click(function() {
	if (slabFontsClick%2 == 0){
	 	slabpic.attr("src","img/slab.svg")
	 	serifpic.attr("src","img/serifLight.svg")
	 	sanspic.attr("src","img/sansLight.svg")
		sansFontsClick =0;
		serifFontsClick =0;
	}

	else{
	 	slabpic.attr("src","img/slabLight.svg")
	}
	slabFontsClick++;
});

$(".largeBrackets img").click(function() {
	if (largeClick%2 == 0){
	 	largepic.attr("src","img/large.svg")
	 	smallpic.attr("src","img/smallLight.svg")
		smallClick =0;
	}

	else{
	 	largepic.attr("src","img/largeLight.svg")
	}
	largeClick++;
});

$(".smallBrackets img").click(function() {
	if (smallClick%2 == 0){
	 	smallpic.attr("src","img/small.svg")
	 	largepic.attr("src","img/largeLight.svg")
		largeClick =0;
	}

	else{
	 	smallpic.attr("src","img/smallLight.svg")
	}
	smallClick++;
});


$(".symm img").click(function() {
	if (symClick%2 == 0){
	 	sympic.attr("src","img/symm.svg")
	 	asympic.attr("src","img/asymmLight.svg")
		asymClick =0;
	}

	else{
	 	sympic.attr("src","img/symmLight.svg")
	}
	symClick++;
});

$(".asymm img").click(function() {
	if (asymClick%2 == 0){
	 	asympic.attr("src","img/asymm.svg")
	 	sympic.attr("src","img/symmLight.svg")
		symClick =0;
	}

	else{
	 	asympic.attr("src","img/asymmLight.svg")
	}
	asymClick++;
});

$(".curve img").click(function() {
	if (curveClick%2 == 0){
	 	curvepic.attr("src","img/curve.svg")
	 	flatpic.attr("src","img/flatLight.svg")
		flatClick =0;
	}

	else{
	 	curvepic.attr("src","img/curveLight.svg")
	}
	curveClick++;
});

$(".flat img").click(function() {
	if (flatClick%2 == 0){
	 	flatpic.attr("src","img/flat.svg")
	 	curvepic.attr("src","img/curveLight.svg")
		curveClick =0;
	}

	else{
	 	flatpic.attr("src","img/flatLight.svg")
	}
	flatClick++;
});


});

