/*
	fetcher.js
	woof	
*/

module.exports = function(connection, qty) {
	var connectionErr;
	var queryErr;
	
	var noConnectionPost = `
		<h2>Error Connecting to Database</h2>
		<p>
			Whoops. You've caught us with our database down, we'll fix that ASAP.
		</p>
	`;
	var queryErrPost = `
		<h2>Error Retrieving Posts</h2>
		<p>
			Whoops. We can't show you any posts right now, we'll fix that ASAP.
		</p>
	`;
	
	connection.connect(connectionErr = function(err) {
		if(err) {
			console.error('error connecting:\n' + err.stack + '\n');
			return true;
		}
		console.log('connected as ' + connection.threadId);
		return false;
	});
	
	if(!connectionErr) {
		connection.query(`
			
			`, var queryErr = function(err, rows) {
			if(err) {
				console.log('error performing query:\n' + err.stack + '\n');
				return true;
			}
			else {
				
				return false;
			}
		});
		
		if(queryErr) {
			return queryErrPost;
		}
		
		connection.end();
	}
	else {
		return noConnectionPost;	
	}
}
