var win = Ti.UI.currentWindow;

var header = Ti.UI.createView({
	backgroundColor: '#FFF',
	width: '100%',
	height: '33%',
	top: 0
});
	var chooseHive = Ti.UI.createLabel({
		title: 'Choose your Hive',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font:{
			fontFamily: 'Geometry-soft',
			fontSize: '25'
		},
		color:'#000'
	});
header.add(chooseHive);
	


win.add(header);
