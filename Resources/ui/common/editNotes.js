var win = Ti.UI.currentWindow;

// var xhr = Titanium.Network.createHTTPClient();
// xhr.onload = function(){
//     var json = JSON.parse(this.responseText);
//     if (!json) { 
//         Titanium.API.info('Error - Null return!'); 
//         return;
//     }
//     var json = json.cats;
//     var pos;
//     for( pos=0; pos < jsoncats.length; pos++){
//         Ti.UI.info(json[pos].title, json[pos].);
//     }
// };
// xhr.open('GET', <'http://marcbrigham.com/hivemind.php'>);
// xhr.send();

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

	var hive2= Ti.UI.createButton({
		title: 'Hive 2',
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
	var hive3 = Ti.UI.createButton({
		title: 'Hive 3',
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
	var hive4 = Ti.UI.createButton({
		title: 'Hive 4',
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
		html: '<p>Select note to edit</p>'
	});
content.add(takeNotesLabel);

		var notes = Ti.UI.createTableView({
			top: 25,
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
		});
			var row1 = Titanium.UI.createTableViewRow({
    				// title: json[pos].title[1]
    				title: 'Oracle DB connectivity'
			});
		notes.appendRow(row1);
			var row2 = Titanium.UI.createTableViewRow({
    				// title: json[pos].title[2]
    				title: 'Design patterns'
			});
		notes.appendRow(row2);
			var row3 = Titanium.UI.createTableViewRow({
    				// title: json[pos].title[3]
    				title: 'PHP ado connectivy'
			});
		notes.appendRow(row3);

content.add(notes);

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

header.add(navigation);
win.add(header);
win.add(content);
win.add(footer);


/*
* Event Handling
*/
backIcon.addEventListener('click', function(e){
	win.close();
});
homeIcon.addEventListener('click', function(e){
	win.close();
});

row1.addEventListener('click', function(e){
	var noteView = Ti.UI.createWindow({
		url: "editIndivNotes.js"
	});
	noteView.open();
});