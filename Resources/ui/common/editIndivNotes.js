/**
 * Edit Individual Notes view
 * This is the view used for editing an individual note
 */

var win = Ti.UI.currentWindow;

// Notetaking area
var content = Ti.UI.createView({
	width: '100%',
	backgroundImage: 'images/rebel.png'
});

	var takeNotesLabel = Ti.UI.createLabel({
		top: 5,
		color: '#D5FF0C',
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 14
		},
		html: '<p>Start taking notes</p>'
	});
content.add(takeNotesLabel);

	var litedb = Ti.Database.open('hivemind');
	var query = litedb.execute('SELECT * FROM notes WHERE id=1 LIMIT 1');
     		 if(query.isValidRow()){
     		 	var titleOne = query.fieldByName('title');
     		 	var contentOne = query.fieldByName('content');

     		 	var notesTitle = Ti.UI.createTextField({
				value: titleOne,
				top: '8%',
				color: '#000',
				width: '80%',
				hintText: 'Title',
				keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
				returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
				borderRadius: 7
			});
			content.add(notesTitle);

			var takeNotes = Ti.UI.createTextArea({
				value: contentOne,
				top: '30%',
				width: '80%',
				height: '60%',
				color: '#000',
				borderRadius: 5,
				font:{fontSize: 12},
				hintText:'type in here',
				keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
				returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
				borderRadius: 7
			});
			content.add(takeNotes);
     		 }
     	litedb.close();

// Back and home buttons
var footer = Ti.UI.createView({
	backgroundColor: '#111',
	width: '100%',
	height: '10%',
	top: '85%'
});
	var backIcon = Ti.UI.createButton({
		backgroundImage: 'images/back.png',
		left: 10
	});
footer.add(backIcon);

	var homeIcon = Ti.UI.createButton({
		backgroundImage: 'images/home.png',
		left: 40
	});
footer.add(homeIcon);

	var saveButton  = Titanium.UI.createButton({
		backgroundColor: '#11000000',
		left: 175,
		width:50,
		height:50,
		title: 'save',
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 14
		},
		color:'#D5FF0C'
	});
footer.add(saveButton);

	var clearButton  = Titanium.UI.createButton({
		backgroundColor: '#11000000',
		left: 225,
		width:60,
		height:50,
		title: 'clear',
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 14
		},
		color:'#D5FF0C'
	});
footer.add(clearButton);

win.add(content);
win.add(footer);

/*
* Event Handling
*/
clearButton.addEventListener('click', function(e){
	takeNotes.value = ' ';
});

saveButton.addEventListener('click', function(e){
    // TODO: Interact with the MySQL database here to
    // add a note. Not sure how we're implementing that.
    // If I can help with this part, let me know, unless
    // Marc has it covered. I assume this is where
    // we'll call his PHP script?
	var idValue = 1;
	var litedb = Ti.Database.open('hivemind');
	litedb.execute('UPDATE notes SET title = ?, content = ? WHERE id = ?', notesTitle.value, takeNotes.value, idValue);
	alert('Your notes have been saved');
	litedb.close();
});


// TODO: Make this go home? Or does it already? This code
// does the same thing as the "back" event listener below
// it.
homeIcon.addEventListener('click', function(e){
	win.close();
});
backIcon.addEventListener('click', function(e){
	win.close();
});
