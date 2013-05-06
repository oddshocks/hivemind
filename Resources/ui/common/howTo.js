var htWin = Ti.UI.currentWindow;

var htScroll = Ti.UI.createScrollView({
	width: '100%',
	height: '100%',
});

var howTo = Ti.UI.createView({
	backgroundImage: 'images/rebel.png',
	height: 800,
	width: '100%'
});

var Logo = Ti.UI.createLabel({
		color:'#D5FF0C',
  		font: { 
  			fontFamily: 'Geometry-soft',
  			fontSize:48 },
  		shadowColor: '#111',
  		shadowOffset: {
  			x:5,
  			y:5},
  		text: 'HiveMind',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 0,
  		width: Ti.UI.SIZE,
  		height: Ti.UI.SIZE
	});
howTo.add(Logo);

var basics = Ti.UI.createLabel({
	width: '80%',
	height: '80%',
	top: 50,
	html: '<h1>Welcome to Hivemind!</h1><p>Hivemind is a simple app that will help you take, share, and organize your notes!</p><p>With Hivemind, all notes belong to a "hive". Hives are used to categorize your notes, say, for different classes you are taking or different projects you are working on.</p><p>To get started, simply choose a hive and add some notes! If you are joining a hive which already has notes, you will be able to see them right after joining. If you are in a hive, you have access to all of the notes in that hive!</p>',
	// html: '<h1>What is HiveMind?</h1><p>Collaborative note taking application.</p><h2>Main functions</h2><ul><li><b>Take Notes</b> Take and store notes under hives</li><li><b>View notes</b> check out personal notes or view others</li><li><b>Edit notes</b> touch up on previous notes</li></ul>',
	font: {
		fontFamily: 'Geometry-soft',
  		fontSize: 20
	}
});
howTo.add(basics);

var enter = Ti.UI.createButton({
	title: 'Go to App',
	color:'#D5FF0C',
	backgroundColor: '#11000000',
	font: {fontSize: 12},
	left: 70,
	top:750,
	// width:50,
	height:50
});
howTo.add(enter);

htScroll.add(howTo);
htWin.add(htScroll);

enter.addEventListener('click', function(e){
	var login = Ti.UI.createWindow({
		url: "loginView.js"
	});
	login.open();
	htWin.close();
});