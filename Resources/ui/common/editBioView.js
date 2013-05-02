/**
 * edit user bio view
 * This is the view from which users can
 * edit bio with the Hivemind application.
 */

var win = Ti.UI.currentWindow;

//Creates scroll view
var scrollView = Ti.UI.createScrollView({
 	contentWidth: 'auto',
  	contentHeight: 'auto',
  	showVerticalScrollIndicator: true,
  	showHorizontalScrollIndicator: true,
  	height: '100%',
  	width: '100%'
});

//Creates a view(wrapper) for our form elements
var editBio = Ti.UI.createView({
	backgroundImage: 'images/rebel.png',
	top: 0,
	width: '100%',
	height: 800
});

var editUser = Ti.UI.createLabel({
	color:'#D5FF0C',
  	font: { 
  		fontFamily: 'Geometry-soft',
  		fontSize:32 },
  	shadowColor: '#111',
  	shadowOffset: {x:5, y:5},
  	html: 'Edit<br /> Account',
  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  	top: 0,
  	width: Ti.UI.SIZE,
  	height: Ti.UI.SIZE
});
editBio.add(editUser);

var litedb = Ti.Database.open('hivemind');
var query = litedb.execute('SELECT * FROM users ORDER BY id DESC LIMIT 1');
     	if(query.isValidRow()){
     		var newUserName = query.fieldByName('nickname');

     		var editUserName = Titanium.UI.createTextField({
			color:'#000',
			backgroundColor: '#EEE',
			top:80,
			width:'80%',
			font:{fontSize: 12},
			value: newUserName,
			keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
			returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
			borderRadius: 10
		});
		editBio.add(editUserName);

     	}
    	litedb.close();

var userDesc = Titanium.UI.createTextArea({
	color:'#000',
	backgroundColor: '#EEE',
	top:130,
	width:250,
	height:125,
	font:{fontSize: 12},
	hintText:'Add user Decription',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
editBio.add(userDesc);

var moreHives = Titanium.UI.createTextArea({
	color:'#000',
	backgroundColor: '#EEE',
	top:290,
	width:250,
	height:125,
	font:{fontSize: 12},
	hintText:'Add more hives, separated by comma',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
editBio.add(moreHives);

var createUser  = Titanium.UI.createButton({
	title: 'Save',
	color:'#D5FF0C',
	backgroundColor: '#11000000',
	font: {fontSize: 12},
	left: 70,
	top:425,
	width:50,
	height:50
});
editBio.add(createUser);

var cancelButton  = Titanium.UI.createButton({
	title: 'Cancel',
	top:425,
	left: 170,
	width:60,
	height:50,
	borderRadius:5,
	color:'#D5FF0C',
	backgroundColor: '#11000000',
	font: {fontSize: 12}
});
editBio.add(cancelButton);

//Add scrollView to current window
scrollView.add(editBio);
win.add(scrollView);
	
/*
* Creating user button event Handling
*/
createUser.addEventListener('click', function(e){
		var userValue = 1;
    		var litedb = Ti.Database.open('hivemind');

    		litedb.execute('INSERT INTO users (nick, bio) '+ 'VALUES (?)', userDesc.value);
    		litedb.execute('UPDATE users SET bio = ? WHERE id = ?', userDesc.value, userValue);
    		return litedb.rowsAffected;
		litedb.execute('INSERT INTO hives (hiveName) '+ 'VALUES (?)', moreHives.value);
    		litedb.close();
		
		alert('You are trying to add null hives, that does not work');

});

/*
* Cancel event Handling
*/
cancelButton.addEventListener('click', function(e){
	win.close();
});
