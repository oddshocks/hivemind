var win = Ti.UI.currentWindow;
var Cloud = ('ti.cloud');


//Creates a view(wrapper) for our form elements
var loginView = Ti.UI.createView({
	top: 10,
	width: 300,
	height: 800
});

	var username = Titanium.UI.createTextField({
		color:'#336699',
		top:10, 
		left:10,
		width:250,
		height:40,
		hintText:'Username',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
loginView.add(username);

	var password = Titanium.UI.createTextField({
		color:'#336699',
		top:60,
		left:10,
		width:250,
		height:40,
		hintText:'Password',
		passwordMask:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
loginView.add(password);

	var loginButton  = Titanium.UI.createButton({
		title:'Log in',
		left: 40,
		top:280,
		width:90,
		height:55,
		borderRadius:5,
		font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
	});
loginView.add(loginButton);

	var signUpButton  = Titanium.UI.createButton({
		title:'Sign up',
		top:280,
		left: 170,
		width:90,
		height:55,
		borderRadius:5,
		font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
	});
loginView.add(signUpButton);

//Adds loginView to current window
win.add(loginView);
	
/*
* Login event Handling
*/
loginButton.addEventListener('click', function(e){
	var homeView = Ti.UI.createWindow({
		url: "MasterView.js"
	});
	homeView.open();
});

/*
* Sign up event Handling
*/
signUpButton.addEventListener('click', function(e){
	var signUpView = Ti.UI.createWindow({
		url: "signUpView.js"
	});
	signUpView.open();
});