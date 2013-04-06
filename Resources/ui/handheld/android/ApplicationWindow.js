function ApplicationWindow() {
	var Cloud = ('ti.cloud');

	// //declare module dependencies
	 var MasterView = require('ui/common/MasterView'),
	 DetailView = require('ui/common/DetailView');
	 loginView = require('ui/common/loginView');

	 var Gravitar = require('ui/common/gravitas');

	 var win = ti.UI.CreateWindow();
	 var userPic = Gravitas.createGravitar({
	 	email: "dqn8613@rit.edu",
	 	defaultStyle: Gravitas_DEFAULT_CUSTOM,
	 	size: 250,
	 	rating: Gravitas_RATING_R;
	 });
	 
	//var db = openDatabase('db.sqlite', '3.0', 'HiveMind', 20000);
	//var userAuth;
// 
// 		
	// //create object instance
	// var self = Ti.UI.createWindow({
		// title:'Sign in',
		// exitOnClose:true,
		// navBarHidden:false,
		// backgroundColor:'#ffffff'
	// });
// 
// 
	// if (idExists ===True){
		// setSessionId("coolShit");
// 
	// }
	// else if(idExists ===False && idExists ===null){
		// //LoginView Reference UI
		// var loginView = new loginView();
		// loginView.add(Titanium.UI.View loginView);
	// }
	// return self;
// };
// 
// module.exports = ApplicationWindow;
headerView = Ti.UI.createView(S.combine($$.headerView,{top:0})),
		tabHeight = 60,
		tabWidth = platformWidth/3,
		tabView = Ti.UI.createView({
			bottom:0,
			height:tabHeight,
			backgroundColor: "black",
			width:platformWidth
		}),