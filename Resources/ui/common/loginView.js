function loginView (){
	var win = Ti.UI.createWindow({
  fullscreen: true
});
var LOGIN = 1,  signUp = 2;
var loggedIn = false;

var activity = win.activity;

activity.onCreateOptionsMenu = function(e){
  var menu = e.menu;
  var login = menu.add({ title: "Login", itemId: LOGIN });
  login.setIcon("login.png");
  login.addEventListener("click", function(e) {
    loggedIn = true;
    // In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
    win.activity.invalidateOptionsMenu();
  });

  var signup = menu.add({ title: "Sign up", itemId: signUp });
  logout.setIcon("logout.png");
  logout.addEventListener("click", function(e) {
    loggedIn = false;
    // In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
    win.activity.invalidateOptionsMenu();
  });
};

activity.onPrepareOptionsMenu = function(e) {
  var menu = e.menu;
  menu.findItem(LOGIN).setVisible(!loggedIn);
  menu.findItem(signUp).setVisible(loggedIn);
};
win.open();
}
