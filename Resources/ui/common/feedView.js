var win = Ti.UI.currentWindow;

var header = Ti.UI.createView({
	width: '100%',
	height: '33%',
	top: 0
});
	
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
	var hive1 = Ti.UI.createButton({
		title: 'Hive 1',
		left: 10
	});
navigation.add(hive1);

	var hive2= Ti.UI.createButton({
		title: 'Hive 2',
		left: 95
	});
navigation.add(hive2);
	var hive3 = Ti.UI.createButton({
		title: 'Hive 3',
		left: 180
	});
navigation.add(hive3);
	var hive4 = Ti.UI.createButton({
		title: 'Hive 4',
		left: 265
	});
navigation.add(hive4);

var seperator = Ti.UI.createView({
	top: '33%',
	width: '100%',
	height: 1,
	backgroundColor: '#D5FF0C'
});
win.add(seperator);

var content = Ti.UI.createView({
	width: '100%',
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

	var takeNotes = Ti.UI.createTextArea({
		top: '10%',
		width: '80%',
		height: '60%',
		color: '#000',
		borderRadius: 5,
		font:{fontSize: 12},
		hintText:'type in here',
		passwordMask:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
	});
content.add(takeNotes);

header.add(navigation);
win.add(header);
win.add(content);
