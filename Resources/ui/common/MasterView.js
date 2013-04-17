var win2 = Ti.UI.currentWindow;

//Creates homeView used for user userBio
var userBio = Ti.UI.createView({
		backgroundImage:'images/rebel.png',
		width: '100%',
		height: '100%'
	});
	var userName = Ti.UI.createLabel({
		text:'Dweebles',
		color: '#D5F000',
		width:200,
		height:18,
		top:20,
	});
	userBio.add(userName);

win2.add(userBio);