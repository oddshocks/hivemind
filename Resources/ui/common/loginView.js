var win = Ti.UI.currentWindow;
var Cloud = ('ti.cloud');

//Creates a view(wrapper) for our form elements
var loginView = Ti.UI.createView({
	top: 30,
	width: 300,
	height: 800
});
	var Logo = Ti.UI.createLabel({
		color:'#D5FF0C',
  		font: { 
  			fontFamily: 'sans-serif',
  			fontSize:48 },
  		shadowColor: '#aaa',
  		shadowOffset: {x:5, y:5},
  		text: 'HiveMind',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 0,
  		width: Ti.UI.SIZE,
  		height: Ti.UI.SIZE
	});
loginView.add(Logo);

	var username = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderColor: '#D5FF0C',
		color:'#D5FF0C',
		backgroundColor: '#000',
		top:90, 
		width:'80%',
		height:'4%',
		hintText:'Username',
		font:{fontFamily: "fonts/orbitron-medium", fontSize: 12},
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	});
loginView.add(username);

	var password = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderColor: '#D5FF0C',
		color:'#D5FF0C',
		backgroundColor: '#000',
		top:140,
		width:'80%',
		height:'4%',
		hintText:'Password',
		font:{fontFamily: "Orbitron Medium", fontSize: 12},
		passwordMask:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	});
loginView.add(password);

	var loginButton  = Titanium.UI.createButton({
		backgroundImage: 'images/login.png',
		left: 80,
		top:200,
		width: 50,
		height: 50,
		borderRadius: 5
	});
loginView.add(loginButton);

	var signUpButton  = Titanium.UI.createButton({
		backgroundImage: 'images/signup.png',
		left: 170,
		top:200,
		width:50,
		height:50,
		borderRadius: 5
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
	win.hide();
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