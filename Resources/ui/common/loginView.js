/**
 * Login view
 * The view used to log into the app.
 */

Ti.include('MasterView.js');
var win = Ti.UI.currentWindow;

// Hivemind logo
var Logo = Ti.UI.createLabel({
		color:'#D5FF0C',
  		font: { 
  			fontFamily: 'Geometry-soft',
  			fontSize:48 },
  		shadowColor: '#111',
  		shadowOffset: {
  			x:5,
  			y:5},
  		text: 'HiveMind',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 20,
  		width: Ti.UI.SIZE,
  		height: Ti.UI.SIZE
	});
win.add(Logo);

//Creates a view(wrapper) for our form elements
var loginView = Ti.UI.createView({
	backgroundColor: '#55B0A9B3',
	top: 120,
	width: 300,
	height: 200,
	borderRadius: 10
});
	var username = Titanium.UI.createTextField({
		borderRadius: 7,
		borderColor: '#D5FF0C',
		color:'#D5FF0C',
		backgroundColor: '#000',
		top:40, 
		width:'80%',
		height:'20%',
		hintText:'Username',
		font:{fontSize: 12},
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	});
loginView.add(username);

	var password = Titanium.UI.createTextField({
		borderRadius: 7,
		borderColor: '#D5FF0C',
		color:'#D5FF0C',
		backgroundColor: '#000',
		top:90,
		width:'80%',
		height:'20%',
		hintText:'Password',
		font:{fontSize: 12},
		passwordMask:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	});
loginView.add(password);

	var loginButton  = Titanium.UI.createButton({
		backgroundImage: 'images/login.png',
		left: 80,
		top:140,
		width: 50,
		height: 50,
		borderRadius: 5
	});
loginView.add(loginButton);

	var signUpButton  = Titanium.UI.createButton({
		backgroundImage: 'images/signup.png',
		left: 170,
		top:140,
		width:50,
		height:50,
		borderRadius: 5
	});
loginView.add(signUpButton);

//Adds loginView to current window
win.add(loginView);
	

var userNickName = username.value;
/*
* Login event Handling
*/
loginButton.addEventListener('click', function(e){

	if (username.value != '' && password.value != '' ){
		var litedb = Ti.Database.open('hivemind');
        		var userPassword =  Titanium.Utils.md5HexDigest(password.value);
		var query = litedb.execute('SELECT * FROM users WHERE nickname = ' + ' "' + username.value + '"' + ' AND password = ' + ' "' + userPassword + '" ');
		if(query.isValidRow() > 0){
			query.next();
			var homeView = Ti.UI.createWindow({
				url: "MasterView.js"
			});
			homeView.userName = userNickName;
			homeView.open();
		}
		else{
			alert('make sure your username and password are correct');
		}
	litedb.close();
	}
	else{
		alert('Please enter username and password');
	}
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
