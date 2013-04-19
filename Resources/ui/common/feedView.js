var win = Ti.UI.currentWindow;

var header = Ti.UI.createView({
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
	
var navigation = Ti.UI.createView({
	height: '40%',
	width: '100%',
	backgroundColor: '#FFF'
});
	var hive1 = Ti.UI.createButton({
		title: 'Hive 1',
		height: 75,
		width: 75,
		left: 10
	});
navigation.add(hive1);

	var hive2= Ti.UI.createButton({
		title: 'Hive 2',
		height: 75,
		width: 75,
		left: 95
	});
navigation.add(hive2);
	var hive3 = Ti.UI.createButton({
		title: 'Hive 3',
		height: 75,
		width: 75,
		left: 180
	});
navigation.add(hive3);
	var hive4 = Ti.UI.createButton({
		title: 'Hive 4',
		height: 75,
		width: 75,
		left: 265
	});
navigation.add(hive4);

header.add(navigation);
win.add(header);
