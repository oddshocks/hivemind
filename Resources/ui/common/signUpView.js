var win = Ti.UI.currentWindow;
var Cloud = ('ti.cloud');

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
var signUp = Ti.UI.createView({
	backgroundColor: '#DDD5F000',
	top: 0,
	width: 300,
	height: 800
});
var SignUp = Ti.UI.createLabel({
		color:'#000',
  		font: { 
  			fontFamily: 'sans-serif',
  			fontSize:32 },
  		shadowColor: '#aaa',
  		shadowOffset: {x:5, y:5},
  		text: 'Create Account',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 0,
  		width: Ti.UI.SIZE,
  		height: Ti.UI.SIZE
	});
signUp.add(SignUp);

var createUserName = Titanium.UI.createTextField({
	color:'#D5FF0C',
	backgroundColor: '#000',
	top:60,
	width:'80%',
	height:'4%',
	font:{fontFamily: "fonts/orbitron-medium", fontSize: 12},
	hintText:'Create user name',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(createUserName);

var password = Titanium.UI.createTextField({
	color:'#D5FF0C',
	backgroundColor: '#000',
	top:110,
	width:'80%',
	height:'4%',
	font:{fontFamily: "fonts/orbitron-medium", fontSize: 12},
	hintText:' Enter password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(password);

var confirmPassword = Titanium.UI.createTextField({
	color:'#D5FF0C',
	backgroundColor: '#000',
	top:160,
	width:'80%',
	height:'4%',
	font:{fontFamily: "fonts/orbitron-medium", fontSize: 12},
	hintText:' confirm password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});
signUp.add(confirmPassword);

var hives = Titanium.UI.createTextArea({
	color:'#D5FF0C',
	backgroundColor: '#000',
	top:210,
	width:250,
	height:240,
	font:{fontFamily: "fonts/orbitron-medium", fontSize: 12},
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
	top:530,
	width:90,
	height:55,
	borderRadius:5,
	font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
});
signUp.add(createUser);

var cancelButton  = Titanium.UI.createButton({
	title:'Not feelin it',
	top:530,
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