/**
 * Indiv notes
 * This is the view used for looking at a note.
 */

var win = Ti.UI.currentWindow;

var content = Ti.UI.createView({
	width: '100%',
	backgroundImage: 'images/rebel.png'
});

	var takeNotesLabel = Ti.UI.createLabel({
		top: 5,
		color: '#D5FF0C',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 35
		},
		html: '<p>Oracle connectivity</p>'
	});
content.add(takeNotesLabel);

	var stuff = Ti.UI.createLabel({
		top: 40,
		html: '<p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p>',
		width: '80%'
	});
content.add(stuff);

	var cancelButton  = Titanium.UI.createButton({
		backgroundColor: '#11000000',
		top:'91%',
		left: '65%',
		width:60,
		height:50,
		title: 'cancel',
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 14
		},
		color:'#D5FF0C'
	});
content.add(cancelButton);

win.add(content);


/*
* Event Handling
*/
cancelButton.addEventListener('click', function(e){
	win.close();
});
