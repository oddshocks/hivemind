var win2 = Ti.UI.createWindow();
// var Gravitas = require('gravitas');

//Creates homeView used for user userBio
var userBio = Ti.UI.createView({
		backgroundColor:'#000'
	});

	// var userAvatar = Gravitas.createGravatar({
 // 	 	email: "dqn8613@rit.edu",
 // 	 	defaultStyle: Gravitas.Gravitar_DEFAULT_CUSTOM,
 // 	 	size: 250,
 // 	 	rating: Gravitas.Gravitar_RATING_R
	// });
	// userBio.add(userAvatar);

	var userName = Titanium.UI.createTextArea({
		text:'Dweebles',
		width:200,
		height:18,
		top:20,
	});
	userBio.add(userName);
	
win2.add(userBio);