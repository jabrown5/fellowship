console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
// var section = '<section></section>';
var section = $('<section>');

function makeMiddleEarth() {
	// create a section tag with an id of `middle-earth`
	$(section).prop('id', 'middle-earth');
	// add each land as an `article` tag
	// inside each `article` tag include an `h1` with the name of the land
	for (var place in lands) {
		var landArticle = $('<article>'); 
		var landHeader = $('<h1>');
		$(landHeader).text(lands[place]);
		$(landArticle).append(landHeader);
		$(section).append(landArticle);
	}
		// append `middle-earth` to your document `body`
		$(body).append(section);
}
makeMiddleEarth();

function makeHobbits(){
  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
	var ulHobbits = $('<ul>');

	for (eachHobbit in hobbits) {
		var liHobbits = $('<li>');
		$(liHobbits).text(hobbits[eachHobbit]);
		$(ulHobbits).append(liHobbits);
	// give each hobbit a class of `hobbit`
		$(liHobbits).prop('class', 'hobbit');
	}
	$("#middle-earth article:first").append(ulHobbits);

}
makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  // give the div a class of `'magic-imbued-jewelry'`
  // add the ring as a child of `Frodo`
  	// HELP FROM JIM: $('body').append('<div id="barry"><h1>hi</h1></div>');
	$("ul > li:first").append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
}
keepItSecretKeepItSafe();

function makeBuddies(){
  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside
  // insert your aside as a child element of `rivendell`
  	var aside = $('<aside>');
  	var ulBuddies = $('<ul>');
  	for (eachBuddy in buddies) {
  		var liBuddies = $("<li>");
  		$(liBuddies).text(buddies[eachBuddy]);
  		$(ulBuddies).append(liBuddies);
  		$(aside).append(ulBuddies);
  		$('h1:eq(1)').append(aside);
  	}
}
makeBuddies();

function beautifulStranger(){
  // change the `'Strider'` text to `'Aragorn'`
	$('aside ul li:eq(3)').text("Aragorn");
}
beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
	//HELP FROM: https://stackoverflow.com/questions/18541415/moving-li-from-one-ul-to-another-jquery
	$('aside ul').append($('.hobbit'));
}
leaveTheShire();

function forgeTheFellowship() {
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  	$("article:eq(1) h1").append('<div id="the-fellowship">the-fellowship</div>');
  	for (var i = 1; i <= 9; i++) {
  	  	var person = $('article:eq(1) h1 aside ul li:eq(0)').text();
  	  	window.alert(person + " has joined the fellowship");  	  	
		$('#the-fellowship').append($('article:eq(1) h1 aside ul li:eq(0)'));
  	}
}
forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border
  $('#the-fellowship > li:eq(0)').text('Gandalf the White');
  $('#the-fellowship > li:eq(0)').css('backgroundColor','white').css('border','solid grey');
}
theBalrog();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
	window.alert("The horn of Gondor has been blown!");  	  	
	// HELP FROM: https://stackoverflow.com/questions/10255326/jquery-how-to-find-and-remove-li-element
	$("#the-fellowship li:contains('Boromir')").remove();
}
hornOfGondor();

function itsDangerousToGoAlone() {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  	$("article:eq(2) h1").append($("#the-fellowship li:contains('Frodo Baggins')"));
  	$("article:eq(2) h1").append($("#the-fellowship li:contains('Samwise')"));
  	$("article:eq(2) h1").append("<div id='mount-doom'></div>");
}
itsDangerousToGoAlone();

function weWantsIt() {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  	$("h1:contains('Mordor')").append("<div id='gollum'>Gollum</div>");
  	$("#gollum").append($('#the-ring'));
  	$("#mount-doom").append($("#gollum"));
}
weWantsIt();

function thereAndBackAgain(){
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`  
  	$("#gollum").remove();
  	$("h1:contains('Shire')").append($(".hobbit"));
}
thereAndBackAgain();
