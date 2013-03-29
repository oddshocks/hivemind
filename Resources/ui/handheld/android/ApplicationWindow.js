function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		loginView = require('ui/common/loginView');
	var Cloud = ('ti.cloud')	;
	// var idBool = new Boolean();
	var idExists = get.sessionId();
		
	//create object instance
	var self = Ti.UI.createWindow({
		title:'Sign in',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});


	if (idExists ===True){
		setSessionId("coolShit");

	}
	else if(idExists ===False && idExists ===null){
		//LoginView Reference UI
		var loginView = new loginView();
		loginView.add(Titanium.UI.View loginView);
	}

		// //add behavior for master view
		// masterView.addEventListener('itemSelected', function(e) {
		// //create detail view container
		// var detailView = new DetailView();
		// var detailContainerWindow = Ti.UI.createWindow({
		// 	title:'Product Details',
		// 	navBarHidden:false,
		// 	backgroundColor:'#ffffff'
		// });
		detailContainerWindow.add(detailView);
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	return self;
};

module.exports = ApplicationWindow;
