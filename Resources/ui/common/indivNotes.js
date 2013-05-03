/**
 * Indiv notes
 * This is the view used for looking at an individual note.
 */
var win = Ti.UI.currentWindow;

var content = Ti.UI.createView({
	width: '100%',
	backgroundImage: 'images/rebel.png'
});
	var litedb = Ti.Database.open('hivemind');
	var query = litedb.execute('SELECT * FROM notes WHERE id=1 LIMIT 1');

	if(query.isValidRow()){
		var noteTitle = query.fieldByName('title');
     		var bodyContent = query.fieldByName('content'); 
		
		var takeNotesLabel = Ti.UI.createLabel({
		top: 5,
		color: '#D5FF0C',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 35
		},
		html: '<p>'+noteTitle+'</p>'
	});
content.add(takeNotesLabel);

	var stuff = Ti.UI.createLabel({
		top: 40,
		html: '<p>'+bodyContent+'</p>',
		width: '80%'
	});
content.add(stuff);
	}	


	var cancelButton  = Titanium.UI.createButton({
		backgroundColor: '#11000000',
		top:'91%',
		left: '65%',
		width:60,
		height:50,
		title: 'back',
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
