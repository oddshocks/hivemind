//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'#000'
	});

	var userAvatar = Titanium.UI.createImageView({
		image:'',
		width:100,
		height:100,
		top:20,
		left:20
	});
	win.add(userAvatar);

	var userName = Titanium.UI.createView({
		text:'',
		width:200,
		height:18,
		top:20,
	});

	var rows [];
	var row;
	var table = Ti.UI.createTableView({
  		data: rows,
  		backgroundColor: 'white'
	});
	win.add(table);