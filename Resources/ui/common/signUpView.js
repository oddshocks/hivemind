var win = Ti.UI.currentWindow;
var Cloud = ('ti.cloud');

//Creates scroll view
var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '90%',
  width: '90%'
});

//Creates a view(wrapper) for our form elements
var signUp = Ti.UI.createView({
	backgroundColor: '#FFF',
	top: 10,
	width: 300,
	height: 800
});

var createUserName = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:250,
	height:40,
	hintText:'Create user name',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(createUserName);

var password = Titanium.UI.createTextField({
	color:'#336699',
	top:60,
	left:10,
	width:250,
	height:40,
	hintText:' Enter password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(password);

var confirmPassword = Titanium.UI.createTextField({
	color:'#336699',
	top:110,
	left:10,
	width:250,
	height:40,
	hintText:' confirm password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(confirmPassword);

var hives = Titanium.UI.createTextArea({
	color:'#336699',
	top:160,
	left:10,
	width:250,
	height:240,
	hintText:'Select Hives, separated by comma',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(hives);

var createUser  = Titanium.UI.createButton({
	title:'Join the Hive',
	left: 40,
	top:480,
	width:90,
	height:55,
	borderRadius:5,
	font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
});
signUp.add(createUser);

var cancelButton  = Titanium.UI.createButton({
	title:'Not feelin it',
	top:480,
	left: 170,
	width:90,
	height:55,
	borderRadius:5,
	font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
});
signUp.add(cancelButton);

//Add scrollView to current window
scrollView.add(signUp);
win.add(scrollView);
	
/*
* Creating user button event Handling
*/
createUser.addEventListener('click', function(e){
	
});

/*
* Cancel event Handling
*/
cancelButton.addEventListener('click', function(e){
	win.hide();
});