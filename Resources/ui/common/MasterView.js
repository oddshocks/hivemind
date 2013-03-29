//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'#000'
	});
	
	//some dummy data for our table view
	var tableData = [
		{title:'Take Notes', price:'1.25', hasChild:true, color: '#EEE'},
		{title:'View Hive', price:'1.50', hasChild:true, color: '#EEE'},
		{title:'Join Hive', price:'1.50', hasChild:true, color: '#EEE'},
		{title:'Share Notes', price:'2.50', hasChild:true, color: '#EEE'}
	];
	
	var table = Ti.UI.createTableView({
		data:tableData
	});
	self.add(table);
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
		});
	});
	
	return self;
};

module.exports = MasterView;