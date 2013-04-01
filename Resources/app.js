/*
* A master detail view, utilizing a native table view component and platform-specific UI and navigation. 
* A starting point for a navigation-based application with hierarchical data, or a stack of windows. 
* Requires Titanium Mobile SDK 1.8.0+.
* 
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*  
*/

// // use Kinvey cloudDB for our backend
// Ti.include('kinvey-titanium-0.9.14.js');

// Kinvey.init({
//     'appKey': 'kid_PTZ8c5fM8M',
//     'appSecret': 'e881cc20f68a426a8cfd00f22fa17192'
// });

// //for testing
// Kinvey.ping({
//   success: function(response) {
//     alert('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
//   },
//   error: function(error) {
//     alert('Kinvey Ping Failed. Response: ' + error.description);
//   }
// });

//var Cloud = require('ti.cloud');


//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
// this sets the background color of the master UIView (when there are no windows/tab groups on it)  
Titanium.UI.setBackgroundColor('#fff');    
var login = Titanium.UI.createWindow({  
     
    url:'common/login.js'  
});
login.open();