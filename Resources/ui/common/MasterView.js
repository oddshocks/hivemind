/**
 * Master view
 * This is a crucial point of the application,
 * the central view.
 */

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

//edit userbio
var editUser = Ti.UI.createButton({
	title: 'edit Bio',
	color: '#D5FF0C',
	font: {fontSize: 11},
	backgroundColor: '#00000000',
	width: 100,
	top: 60,
	left: 20
}); 
userBio.add(editUser);


// TODO: What is this for? Can we get rid of it?


var litedb = Ti.Database.open('hivemind');
var userQuery = litedb.execute('SELECT * FROM users ORDER BY id DESC LIMIT 1');
if(userQuery.isValidRow()){
    var nickId = userQuery.fieldByName('nickname');
    var userDesc = userQuery.fieldByName('bio');

    var userNick = Ti.UI.createLabel({
    	html:'<p><b>'+nickId+'</b></p>',
    	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    	color: '#FFF',
    	font:{
    		fontFamily: 'Geometry-soft',
    		fontSize: 24},
    	width: 200,
    	height: 100,
    	left: '40%'
    });
    userBio.add(userNick);
     
    var userInfo = Ti.UI.createLabel({
        html: '<p><i>'+userDesc+'</i></p>',
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {fontSize: 11},
        color: '#FFF',
        width:200,
        height: 100,
        top: '30%',
        left: '40%'
	});
	userBio.add(userInfo);
}
userQuery.close();

	 var squery = litedb.execute('SELECT * FROM users where id = 1');
     		 while(squery.isValidRow()){
     		 	var nickId = squery.fieldByName('bio');
     		 	Ti.API.info(nickId);
     		 	squery.next();
     		 }
     		 squery.close();
litedb.close();

var userImage = Ti.UI.createImageView({
    image: 'images/honeycomb.png',
    width: 50,
    height: 50,
    left: '15%',
    top: '5%'
});
userBio.add(userImage);

var mainNav = Ti.UI.createView({
	width: '100%',
	top: '30%'
});

var takeNotes = Ti.UI.createButton({
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
