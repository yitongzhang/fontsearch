$(function() {

changeTrayBackground();

// api call

$( document ).ready(function() {
// Call airtable API
	$.ajax({
	   url : 'https://api.airtable.com/v0/appRpnaJzUD27twS5/Table%201?view=Main%20View',
	   method: 'GET',
	   beforeSend : function(xhr){
	   		xhr.setRequestHeader("Authorization", "Bearer keyiAM0m2a8F1ONji");
	   },
		dataType : 'json',
		contentType: 'application/json',
		complete: function(data){
			console.log(data);
		}
	});	
});

// ------------- Font loader ---------- //

//get the gfonts query
var gfontsQuery = $("#gfonts").attr("href");

//create array of all currently loaded fonts
var temp = gfontsQuery.split("=");
var loadedFonts = temp[1].split("|");
for(var i=0; i < loadedFonts.length; i++) {
	loadedFonts[i] = loadedFonts[i].replace("+", " ");
}

//get all displayed fonts
var allDisplayedFonts = $(".fontName");


//get all pangrams
var allPangrams = $(".smallShowcase");

var newFontsToLoad =[];
var newGfontsQuery;
var tempStyle;
var cheater = 0;
//update gfonts query + pangram css
for(var key in allDisplayedFonts){
	

	
	if (allDisplayedFonts.hasOwnProperty(key) && cheater<allDisplayedFonts.length) {
		//change the pangram css
		tempStyle = "<style> ."+allDisplayedFonts[key].innerHTML+"{ font-family:"+allDisplayedFonts[key].innerHTML+"; }</style>";
		$("#fontStyles").append(tempStyle);
		cheater+=1;

		//add any missing fonts to gfonts query
		if(isInGfontsQuery(allDisplayedFonts[key].innerHTML)){
			continue;
		}
		else{
			newFontsToLoad.push(allDisplayedFonts[key].innerHTML);

		}
	}
}
console.log(newFontsToLoad)
console.log(gfontsQuery)

//make new gGontsQuery
for (key in newFontsToLoad) {
	if (key == 0) {
		newGfontsQuery = gfontsQuery.concat("|").concat(newFontsToLoad[key].replace(/\s/g, '+'));
	}
	else{
		newGfontsQuery = newGfontsQuery.concat("|").concat(newFontsToLoad[key].replace(/\s/g, '+'));
	}
}
console.log(newGfontsQuery)

// update gfonts
$("#gfonts").attr("href", newGfontsQuery);
console.log($("#gfonts").attr("href"));



// --------- Compare thumbnail--------- //
// close error message
$(".dismiss").click(function() {
	$(this).parent().css("display","none");
});

// if button click
$(".addToCompare").click(function() {
	//is font already in Tray?
	var inTray = false;
	var button = this;
	var findThis = $(this).parent().find(".fontName").text().replace(/\s/g, '');
	var traym = $(".compareItems");
	//console.log(traym[0]);

	//find all thumbs
	var allThumbs = $(".compareItems").find(".thumbs");
	//set true if font in Tray
	if (allThumbs.hasClass(findThis)){
		//console.log("found a "+findThis);
		inTray = true;
	}
	//set false if font not in tray
	else{
		//console.log("no "+findThis);
		inTray = false;
	}


	//if font already in compare tray 
	if (inTray) {
		//Get fontName
		var button = this;
		var fontName = $(this).parent().find(".fontName").text();
		//generate class of font to remove
		var fontClass = "."+fontName.replace(/\s/g, '');
		//Remove html from compare Items
		$(".compareItems "+ fontClass).remove();
		//update background image
		changeTrayBackground();
		//change "x" to "+"
		this.innerHTML="<i class='fa fa-plus' aria-hidden='true'></i>";
		$(this).css("background-color","transparent");
		$(this).css("color","#4D4D4D");

		//remove error
		$(".error").css("display","none");
	}

	//if tray is full
	else if ($(".compareItems div").length>2) {
		$('.error').css('display','block');
	}

	//if tray not full and font not in compare tray 
	else{
		//Get fontName
		var button = this;
		var fontName = $(this).parent().find(".fontName").text();
		var fontAbbrev = fontName.substr(0,2)
		if(fontName.length >10){
			var trimmedFontName = fontName.substr(0,10)+"&hellip;";
		}
		else{
			var trimmedFontName = fontName;
		}
		

		//generate html with correct fontname
		var thumbCard = "<div class='thumbs "+fontName.replace(/\s/g, '')+"'><p class='fontName'>"+trimmedFontName+"</p><p class='abbreviation'>"+fontAbbrev+"</p></div>";
		//Insert html in compareItems (make this actually display correct font)
		$(".compareItems").append(thumbCard);
		//update background image
		changeTrayBackground();
		//change "+" to "x"
		this.innerHTML="<i class='fa fa-times' aria-hidden='true'></i>";
		$(this).css("background-color","#4D4D4D");
		$(this).css("color","white");
	}
});


// --------- Input Range---------------- //

//change slider opacity based on checkbox
changeSliderOpacity("xHeight");
changeSliderOpacity("StrokeThickness");
changeSliderOpacity("StrokeContrast");
changeSliderOpacity("LetterWidth");

// Create sliders
createUiSlider('sliderX');
createUiSlider('sliderT');
createUiSlider('sliderC');
createUiSlider('sliderW');
createUiSlider('sliderS');

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


}); //end of main Jquery


// useful functions

function changeTrayBackground(){
var compareItems = $(".compareItems div")

	if(compareItems.length==0) {
		$(".compareTray").css("background","url(img/compareTray0.png) no-repeat")
		$(".compare button").css("display","none")
	} 
	else{

		if(compareItems.length==1){
			$(".compareTray").css("background","url(img/compareTray1.png) no-repeat")
			$(".compare button").css("display","none")
		}

		else{
			$(".compareTray").css("background","url(img/compareTray2.png) no-repeat")
			$(".compare button").css("display","block")
		}

	}
}




function changeSliderOpacity(featureName){
	$('.'+featureName+' input:checkbox').change(
	    function(){
	    if($(this).is(':checked')){
	        $('.'+featureName+" div").css('opacity',"1")
	        $('.'+featureName+" label").css('opacity',"1")
	    } 
	    else {
	        $('.'+featureName+" div").css('opacity',"0.5")
	        $('.'+featureName+" label").css('opacity',"0.5")   
	    }
	});
}


function createUiSlider(sliderName){
	var slider = document.getElementById(sliderName);
	
	noUiSlider.create(slider, {
		start: [20, 80],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});
}

//check if part of gfonts query
function isInGfontsQuery(fontName){
	//get the gfonts query
	var gfontsQuery = $("#gfonts").attr("href");

	//create array of all currently loaded fonts
	var temp = gfontsQuery.split("=");
	var loadedFonts = temp[1].split("|");
	for(var i=0; i < loadedFonts.length; i++) {
		loadedFonts[i] = loadedFonts[i].replace("+", " ");
	}


	for (i=0;i<loadedFonts.length;i++){
		if (loadedFonts[i] == fontName) {
			return true;
		}
	}
	return false;
}

