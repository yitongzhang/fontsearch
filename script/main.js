$(function() {
updateFonts()
changeTrayBackground();

// ------- important variables. don't lose lol -------//]
//current fonts on page

var gFontsQuery

var next20Fonts

// ranges
var maxXheight
var minXheight
var xHeightChecked = false;
$("#xHeight").change(
    function(){
        if ($(this).is(':checked')) {
        	xHeightChecked = true;
            console.log('true');
        }
        else{
        	xHeightChecked = false;
        	console.log('false');
        }
    });

var maxStrokeThick
var minStrokeThick
var thicknessChecked = false;
$("#StrokeThickness").change(
    function(){
        if ($(this).is(':checked')) {
        	thicknessChecked = true;
            console.log('true');
        }
        else{
        	thicknessChecked = false;
        	console.log('false');
        }
    });

var maxStrokeContrast
var minStrokeContrast
var contrastChecked = false;
$("#StrokeContrast").change(
    function(){
        if ($(this).is(':checked')) {
        	contrastChecked = true;
            console.log('true');
        }
        else{
        	contrastChecked = false;
        	console.log('false');
        }
    });

var maxLetterWidth
var minLetterWidth
var widthChecked = false;
$("#LetterWidth").change(
    function(){
        if ($(this).is(':checked')) {
        	widthChecked = true;
            console.log('true');
        }
        else{
        	widthChecked = false;
        	console.log('false');
        }
    });

var maxStressAxe
var minStressAxe
var stressChecked = false;
$("#StressAxe").change(
    function(){
        if ($(this).is(':checked')) {
        	stressChecked = true;
            console.log('true');
        }
        else{
        	stressChecked = false;
        	console.log('false');
        }
    });

// serifs
var serifFilter = 9;
var bracketSizeFilter = 9;
var symFilter = 9;
var curvFilter =9;

$(".serifFonts img").click(function() {
	serifFilter=0;
});
$(".sansFonts img").click(function() {
	serifFilter=1;
});
$(".slabFonts img").click(function() {
	serifFilter=2;
});
$(".largeBrackets img").click(function() {
	bracketSizeFilter=0;
});
$(".smallBrackets img").click(function() {
	bracketSizeFilter=1;
});
$(".symm img").click(function() {
	symFilter=0;
});
$(".asymm img").click(function() {
	symFilter=1;
});
$(".curve img").click(function() {
	symFilter=0;
});
$(".flat img").click(function() {
	symFilter=1;
});

// ------------- API call ---------- //
var json;

$(document).ready(function apiCall() {
// Call airtable API
	$.ajax({
	   url : 'https://api.airtable.com/v0/appRpnaJzUD27twS5/Table%201?view=Main%20View',
	   method: 'GET',
	   beforeSend : function(xhr){
	   		xhr.setRequestHeader("Authorization", "Bearer keyiAM0m2a8F1ONji");
	   },
		dataType : 'json',
		contentType: 'application/json',
		complete: function (data){
			json = data["responseJSON"];
		}
	});	
});

// ------------- page updates ---------- //
$(document).ajaxStop(function () {
	var temp = json["records"];
	var cleanJson =[];
	for (key in temp){
		cleanJson[key]=temp[key]["fields"]
	}
	console.log("ajax ready");
	console.log(cleanJson);
	//update when scroll
		//when scroll past <li> at 70% of list

		//append 20 more relevant fonts at the bottom

		//update fonts on page

	//update when filter
		//when click any serif filter or onslider
		$('.serifStyle img, .bracketSize img, .serifSymm img, .serifCurve img, #xHeight, #StrokeThickness, #StrokeContrast, #LetterWidth, #StressAxe').click(function(){
			//updateAccordingToFilters()
			//remove any fonts that don't match filter
			var fontsToEvaluate = getFontsOnPage()
			// console.log(fontsToEvaluate[0]["serifType"])
			// console.log(serifFilter)
			var fontsToRemove =[];
			var fontsToAdd =[];
			for (key in fontsToEvaluate){
				//keep on screen?
				if (
				(xHeightChecked==false || between(minXheight, fontsToEvaluate[key]["xHeight"],maxXheight))
				&&(thicknessChecked==false || between(minStrokeThick,fontsToEvaluate[key]["thickness"],maxStrokeThick))
				&&(contrastChecked==false || between(minStrokeContrast,fontsToEvaluate[key]["contrast"],maxStrokeContrast))
				&&(stressChecked==false || between(minStressAxe,fontsToEvaluate[key]["stress"],maxStressAxe))
				&&(widthChecked==false || between(minLetterWidth,fontsToEvaluate[key]["width"],maxLetterWidth))
				&&(serifFilter==9||fontsToEvaluate[key]["serifType"] == serifFilter)
				&&(bracketSizeFilter==9||fontsToEvaluate[key]["bracketSize"] == bracketSizeFilter)
				&&(symFilter==9||fontsToEvaluate[key]["symmetric"] == symFilter)
				&&(curvFilter==9||fontsToEvaluate[key]["curve"] == curvFilter)
				) {
					//console.log("yes")
					continue
				}
				//delete!
				else{
					//console.log("removing "+ fontsToEvaluate[key]["name"])
					fontsToRemove.push(fontsToEvaluate[key])
				}

			}
			//console.log(fontsToRemove)

			//delete fonts
			for(key in fontsToRemove){
				var classToRemove = "."+fontsToRemove[key]["name"].replace(/\s/g, '')
				$(classToRemove).remove()

			}
			//append same number of fonts that was removed
			for(var i = 0;i<fontsToRemove.length;i++){
				for(key in cleanJson){
					console.log(cleanJson[key]["name"])
					if (
					(xHeightChecked==false || between(minXheight, fontsToEvaluate[key]["xHeight"],maxXheight))
					&&(thicknessChecked==false || between(minStrokeThick,fontsToEvaluate[key]["thickness"],maxStrokeThick))
					&&(contrastChecked==false || between(minStrokeContrast,fontsToEvaluate[key]["contrast"],maxStrokeContrast))
					&&(stressChecked==false || between(minStressAxe,fontsToEvaluate[key]["stress"],maxStressAxe))
					&&(widthChecked==false || between(minLetterWidth,fontsToEvaluate[key]["width"],maxLetterWidth))
					&&(serifFilter==9||fontsToEvaluate[key]["serifType"] == serifFilter)
					&&(bracketSizeFilter==9||fontsToEvaluate[key]["bracketSize"] == bracketSizeFilter)
					&&(symFilter==9||fontsToEvaluate[key]["symmetric"] == symFilter)
					&&(curvFilter==9||fontsToEvaluate[key]["curve"] == curvFilter)
					) {
						fontsToAdd.push(cleanJson[key])
						console.log(cleanJson[key])
					}
				}
			}
			//console.log(fontsToAdd)
			//$(".fontList").append()

			//update fonts on page
		});

		sliderX.noUiSlider.on('update', function(){

		});


});

// --------- Compare thumbnail----------//
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
	//find all thumbs
	var allThumbs = $(".compareItems").find(".thumbs");
	//set true if font in Tray
	if (allThumbs.hasClass(findThis)){
		//console.log("found a "+findThis);
		inTray = true;
	}
	//set false if font not in tray
	else{
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
changeSliderOpacity("StressAxe");


// Create sliders
var sliderX = document.getElementById('sliderX');
noUiSlider.create(sliderX, {
	start: [0, 1],
	connect: true,
	range: {
		'min': 0,
		'max': 1
	}
});
// When the slider value changes, update the input and span
sliderX.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		maxXheight = values[handle];
		//console.log("max is"+maxXheight)
	} else {
		minXheight = values[handle];
		//onsole.log("min is"+minXheight)
	}
});

// Create sliders
var sliderT = document.getElementById('sliderT');
noUiSlider.create(sliderT, {
	start: [0, 1],
	connect: true,
	range: {
		'min': 0,
		'max': 1
	}
});
// When the slider value changes, update the input and span
sliderT.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		maxStrokeThick = values[handle];
		//console.log("max is"+maxStrokeThick)
	} else {
		minStrokeThick = values[handle];
		//console.log("min is"+minStrokeThick)
	}
});

// Create sliders
var sliderC = document.getElementById('sliderC');
noUiSlider.create(sliderC, {
	start: [0, 1],
	connect: true,
	range: {
		'min': 0,
		'max': 1
	}
});
// When the slider value changes, update the input and span
sliderC.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		maxStrokeContrast = values[handle];
		//console.log("max is"+maxStrokeContrast)
	} else {
		minStrokeContrast = values[handle];
		//console.log("min is"+minStrokeContrast)
	}
});

// Create sliders
var sliderW = document.getElementById('sliderW');
noUiSlider.create(sliderW, {
	start: [0, 1],
	connect: true,
	range: {
		'min': 0,
		'max': 1
	}
});
// When the slider value changes, update the input and span
sliderW.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		maxStressAxe = values[handle];
		//console.log("max is"+maxStressAxe)
	} else {
		minStressAxe = values[handle];
		//console.log("min is"+minStressAxe)
	}
});

// Create sliders
var sliderS = document.getElementById('sliderS');
noUiSlider.create(sliderS, {
	start: [0, 1],
	connect: true,
	range: {
		'min': 0,
		'max': 1
	}
});
// When the slider value changes, update the input and span
sliderS.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		maxLetterWidth = values[handle];
		//console.log("max is"+LetterWidth)
	} else {
		minLetterWidth = values[handle];
		//console.log("min is"+LetterWidth)
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


}); //end of main Jquery





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
		start: [0, 1],
		connect: true,
		range: {
			'min': 0,
			'max': 1
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

function updateFonts(){
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
	//make new gGontsQuery
	for (key in newFontsToLoad) {
		if (key == 0) {
			newGfontsQuery = gfontsQuery.concat("|").concat(newFontsToLoad[key].replace(/\s/g, '+'));
		}
		else{
			newGfontsQuery = newGfontsQuery.concat("|").concat(newFontsToLoad[key].replace(/\s/g, '+'));
		}
	}
	// update gfonts
	$("#gfonts").attr("href", newGfontsQuery);
}


function getFontsOnPage(){
	var fontsOnPage =[];
	function fontObject(name,xHeight,thickness,contrast,width,stress,curve,serifType,bracketSize,symmetric){
		this.name =	name; 
		this.xHeight = xHeight; 
		this.thickness = thickness; 
		this.contrast =	contrast; 
		this.width = width; 
		this.stress = stress; 
		this.curve = curve; 
		this.serifType = serifType; 
		this.bracketSize = bracketSize; 
		this.symmetric = symmetric; 
		
	}
	var temp = $(".fontList");
	var tempListOfFonts = temp[0]["children"]

	for(key in tempListOfFonts){
		if (key<tempListOfFonts) {
			var tempProp = tempListOfFonts[key]["children"][3].getAttribute('id').split("/")
			var tempName = tempListOfFonts[key]["children"][1].innerHTML
			var tempFontObject = new fontObject(tempName,tempProp[0],tempProp[1],tempProp[2],tempProp[3],tempProp[4],tempProp[5],tempProp[6],tempProp[7],tempProp[8])
			fontsOnPage[key] = tempFontObject
		}
		else{
			break;
		}
	}
	return fontsOnPage;

}

function between(min, x, max) {
  return x >= min && x <= max;
}