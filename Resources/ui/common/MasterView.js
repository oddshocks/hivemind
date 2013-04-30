/**
 * Master view
 * This is a crucial point of the application,
 * the central view.
 */

var win2 = Ti.UI.currentWindow;
Ti.include('loginView.js');

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

//edit userbio
var editUser = Ti.UI.createButton({
	title: 'edit Bio',
	left: '15%',
	top: 100,
	color: '#D5FF0C',
	font: {fontSize: 11},
	backgroundColor: '#11000000',
	width: 50,
	height: 40
}); 
userBio.add(editUser);



	// var nickName = Ti.UI.createLabel({
		// text: username.value,
		// textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		// color: '#FFF',
		// width:200,
		// height:18,
		// top: '5%',
	// });
	// userBio.add(nickName);

var litedb = Ti.Database.open('hivemind');
var userQuery = litedb.execute('SELECT * FROM users');
while(userQuery.isValidRow()){
     		 	 var nickId = userQuery.fieldByName('bio');
     		 	 var userDesc = userQuery.field(1);
     		 	 
     		 	 var userInfo = Ti.UI.createLabel({
					html: '<p>'+userDesc+'</p>',
					textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
					font: {fontSize: 11},
					color: '#FFF',
					width:100,
					top: '25%',
					left: '60%'
	});
	userBio.add(userInfo);
    userQuery.next();
}
userQuery.close();
litedb.close();

	var userImage = Ti.UI.createImageView({
		image: 'images/normal.jpg',
		width: 100,
		height: 100,
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
		// backgroundImage: 'images/HarvestHoney.png',
		backgroundColor: '#454346',
		color: '#D5FF0C',
		title: 'Take Notes',
		width: 150,
		height: 50,
		top: 10,
		borderRadius: 10
	});
mainNav.add(takeNotes);

	var viewNotes = Ti.UI.createButton({
		// backgroundImage: 'images/BuzzHive.png',
		backgroundColor: '#454346',
		color: '#D5FF0C',
		title: 'View Notes',
		width: 150,
		height: 50,
		top: 70,
		borderRadius: 10
	});
mainNav.add(viewNotes);

var edit = Ti.UI.createButton({
		// backgroundImage: 'images/RoamFree.png',
		backgroundColor: '#454346',
		color: '#D5FF0C',
		title: 'Edit Notes',
		width: 150,
		height: 50,
		top: 130,
		borderRadius: 10
	});
mainNav.add(edit);

var footer = Ti.UI.createView({
	backgroundColor: '#111',
	width: '100%',
	height: '10%',
	top: '85%'
});
	var homeIcon = Ti.UI.createButton({
		backgroundImage: 'images/home.png',
		left: 10
	});
footer.add(homeIcon);

	var logOut = Ti.UI.createButton({
		backgroundColor: '#11000000',
		width:90,
		height:50,
		title: 'log out',
		font: {
			fontFamily: 'Geometry-soft',
			fontSize: 14
		},
		color:'#D5FF0C',
		left: 40
	});
footer.add(logOut);


//adds user bio and and main view content to wrapper
masterView.add(userBio);
masterView.add(mainNav);
win2.add(masterView);
win2.add(footer);


//view button events
editUser.addEventListener('click', function(e){
	var editBioView = Ti.UI.createWindow({
		url: "editBioView.js"
	});
	editBioView.open();
});

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

edit.addEventListener('click', function(e){
	var editNotes = Ti.UI.createWindow({
		url: "editNotes.js"
	});
	editNotes.open();
});

logOut.addEventListener('click', function(e){
	win2.close();
});
