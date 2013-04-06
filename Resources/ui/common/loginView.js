var win = Ti.UI.currentWindow;


//Creates a view(wrapper) for our form elements
var loginView = Ti.UI.createView();

	var username = Titanium.UI.createTextField({
		color:'#336699',
		top:10,
		left:10,
		width:300,
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
		width:300,
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
		left: 50,
		top:280,
		width:90,
		height:55,
		borderRadius:5,
		font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
	});
	loginView.add(loginButton);

	var signInButton  = Titanium.UI.createButton({
		title:'Sign up',
		top:280,
		left: 180,
		width:90,
		height:55,
		borderRadius:5,
		font:{fontFamily:'Orbitron',fontWeight:'bold',fontSize:14}
	});
	loginView.add(signInButton);

//Adds loginView to current window
win.add(loginView);

//creates	
socialNav = Ti.UI.createView();

	
	/*
	* Login Event Handling
	*/
	// var loginReq = Titanium.Network.createHTTPClient();
	// loginReq.onload = function(){
	// 	var json = this.responseText;
	// 	var response = JSON.parse(json);
	// 	if (response.logged == true){
	// 		alert("Welcome " + response.name + ". Your email is: " + response.email);
	// 	}
	// 	else{
	// 		alert(response.message);
	// 	}
	// };

	// loginReq.onerror = function(){
	// 	alert("Network error");
	// };

	/*
	* Login Button Click Event
	*/
	// loginButton.addEventListener('click',function(e){
	// 	if (username.value != '' && password.value != ''){
	// 		//loginReq.open("POST","http://localhost:8888/post_auth.php");
	// 		var params = {
	// 		username: username.value,
	// 		password: Ti.Utils.md5HexDigest(password.value)
	// 	};
	// 	loginReq.send(params);
	// 	}
	// 	else{
	// 		alert("Username/Password are required");
	// 	}
	// });