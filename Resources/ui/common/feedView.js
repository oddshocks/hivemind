/**
 * Feed view
 * This is the view used for contributing notes.
 */

var win = Ti.UI.currentWindow;
var saveReq = Titanium.Network.createHTTPClient();

var header = Ti.UI.createView({
	width: '100%',
	height: '33%',
	top: 0
});
	
// Hive selection menu and buttons
var navigation = Ti.UI.createView({
	width: '100%',
	backgroundImage: 'images/rebel.png'
});

	var chooseHive = Ti.UI.createLabel({
		html: '<p>Choose your hive</p>',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font:{
			fontFamily: 'Geometry-soft',
			fontSize: '25'
		},
		color:'#D5FF0C',
		top: 0
	});
navigation.add(chooseHive);
	var litedb = Ti.Database.open('hivemind');
	var hiveOneQuery = litedb.execute('SELECT * FROM hives LIMIT 1');
	var hiveTwoQuery = litedb.execute('SELECT * FROM hives WHERE id = 2 LIMIT 1');
	var hiveThreeQuery = litedb.execute('SELECT * FROM hives WHERE id = 3 LIMIT 1');
	var hiveFourQuery = litedb.execute('SELECT * FROM hives WHERE id = 4 LIMIT 1');

	if(hiveOneQuery.isValidRow()){
    	var firstHive = hiveOneQuery.fieldByName('hiveName');
    	var hive1 = Ti.UI.createButton({
		title: firstHive,
		font:{
			fontFamily: 'Geometry-soft',
			fontSize: '14'
		},
		left: 10,
		backgroundImage: 'images/honeycomb.png',
		width: 50,
		height: 50
	});
	navigation.add(hive1);
	}	
	hiveOneQuery.close();
	litedb.close();

	if(hiveTwoQuery.isValidRow()){
	var secondHive = hiveTwoQuery.fieldByName('hiveName');
	var hive2= Ti.UI.createButton({
		title: secondHive,
		font:{
			fontFamily: 'Geometry-soft',
			fontSize: '14'
		},
		left: 95,
		backgroundImage: 'images/honeycomb.png',
		width: 50,
		height: 50
	});
	navigation.add(hive2);
	}
	hiveTwoQuery.close();
	litedb.close();

	if(hiveThreeQuery.isValidRow()){
	var thirdHive = hiveThreeQuery.fieldByName('hiveName');
	var hive3 = Ti.UI.createButton({
		title: thirdHive,
		font:{
			fontFamily: 'Geometry-soft',
			fontSize: '14'
		},
		left: 180,
		backgroundImage: 'images/honeycomb.png',
		width: 50,
		height: 50
	});
	navigation.add(hive3);
	}
	hiveThreeQuery.close();
	litedb.close();

	if(hiveFourQuery.isValidRow()){
	var fourthHive = hiveFourQuery.fieldByName('hiveName');
	var hive4 = Ti.UI.createButton({
		title: fourthHive,
		font:{
			fontFamily: 'Geometry-soft',
			fontSize: '14'
		},
		left: 265,
		backgroundImage: 'images/honeycomb.png',
		width: 50,
		height: 50
	});
	navigation.add(hive4);
	}
	hiveFourQuery.close();
	litedb.close();

var seperator = Ti.UI.createView({
	top: '33%',
	width: '100%',
	height: 1,
	backgroundColor: '#D5FF0C'
});
win.add(seperator);

// Notetaking area
var content = Ti.UI.createView({
	width: '100%',
	height: '60%',
	top: '33.5%',
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

	var notesTitle = Ti.UI.createTextField({
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

header.add(navigation);

win.add(header);
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


if (notesTitle.value == '' || takeNotes.value == '')
    {
        alert('All fields are required');
    }
    else
    {
        //-- Disable fields and buttons before making our HTTP request
        // notesTitle.enabled = false;
        // takeNotes.enabled = false;
        //-- Change this URL to where ever yours exists
        // saveReq.open('POST','http://marcbrigham.com/hivemind.php');
        // var params = {
        //     title: notesTitle.value,
        //     note: takeNotes.value
        // };
        // saveReq.send(params);

         var litedb = Ti.Database.open('hivemind');
        		litedb.execute('INSERT INTO notes (title, content) '+ 'VALUES (?,?)', notesTitle.value, takeNotes.value);
    		return litedb.rowsAffected;
    		litedb.close();
    }
	alert('Your notes have been saved');
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
