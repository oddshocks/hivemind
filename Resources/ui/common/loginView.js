function DetailView() {
	var self = Ti.UI.createView();
	
	var lbl = Ti.UI.createLabel({
		text:'login',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	
	self.addEventListener('login', function(e) {
		
	});
	
	self.addEventListener('signup', function(e) {
		
	});
	
	return self;
};

module.exports = loginView;