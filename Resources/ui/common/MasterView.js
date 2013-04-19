var win2 = Ti.UI.currentWindow;

//creates a wrapper to store all of our views inside
var masterView = Ti.UI.createView({
	backgroundImage:'images/rebel.png',
	width: '100%',
	height: '100%',
});

//Creates homeView used for user userBio
var userBio = Ti.UI.createView({
	backgroundColor: '#55B0A9B3',
	width: '100%',
	height: '20%',
	top: 0
});
	var userName = Ti.UI.createLabel({
		text:'Dweebles',
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		color: '#FFF',
		width:200,
		height:18,
		top: '5%',
	});
	userBio.add(userName);

	var userInfo = Ti.UI.createLabel({
		text:'Design, Build and Test...keeping this iteration going',
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		font: {fontSize: 11},
		color: '#FFF',
		width:100,
		top: '22%',
		left: '60%'
	});
	userBio.add(userInfo);

	var userImage = Ti.UI.createImageView({
		image: 'images/normal.jpg',
		width: 70,
		height: 70,
		left: '15%',
		borderRadius: 5,
		top: '5%'
	});
	userBio.add(userImage);

var mainNav = Ti.UI.createView({
	width: '100%',
	top: '30%'
});
	var takeNotes = Ti.UI.createButton({
		backgroundImage: 'images/HarvestHoney.png',
		width: 150,
		height: 50,
		top: 10,
		borderRadius: 10
	});
mainNav.add(takeNotes);

	var viewNotes = Ti.UI.createButton({
		backgroundImage: 'images/BuzzHive.png',
		width: 150,
		height: 50,
		top: 70,
		borderRadius: 10
	});
mainNav.add(viewNotes);
var leave = Ti.UI.createButton({
		backgroundImage: 'images/RoamFree.png',
		width: 150,
		height: 50,
		top: 130,
		borderRadius: 10
	});
mainNav.add(leave);

//adds user bio and and main view content to wrapper
masterView.add(userBio);
masterView.add(mainNav);
win2.add(masterView);


//view button events
takeNotes.addEventListener('click', function(e){
	var feedView = Ti.UI.createWindow({
		url: "feedView.js"
	});
	feedView.open();
});

viewNotes.addEventListener('click', function(e){
	var notesView = Ti.UI.createWindow({
		url: "viewNotes.js"
	});
	notesView.open();
});

leave.addEventListener('click', function(e){
	win2.close();
});