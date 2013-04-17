var win2 = Ti.UI.createWindow();

//Creates homeView used for user userBio
var userBio = Ti.UI.createView({
		backgroundColor:'#000'
	});

	var userName = Titanium.UI.createTextArea({
		text:'Dweebles',
		width:200,
		height:18,
		top:20,
	});
	userBio.add(userName);
	
win2.add(userBio);