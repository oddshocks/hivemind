/*
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*  
*/


if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else{
	Ti.UI.setBackgroundImage('ui/common/images/rebel.png');

	var login = Ti.UI.createWindow({
		url: "ui/common/loginView.js"
		// url: "ui/common/indivNotes.js"
	});
	login.open();
}