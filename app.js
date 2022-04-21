const express = require('express')
const app = express()
const port = 80

var noBots = require('express-nobots');
var path = require("path");
const fs = require("fs");

app.use(noBots({block:true}));

app.get('*', (req, res) => {
	if (fs.existsSync(path.join(__dirname + '/public/' + req.headers.host))) {
		if(req.url == '/'){
			res.sendFile(path.join(__dirname + '/public/' + req.headers.host + req.url + '/index.html'));
		}
		else{
			if (fs.existsSync(path.join(__dirname + '/public/' + req.headers.host + req.url))) {
				res.sendFile(path.join(__dirname + '/public/' + req.headers.host + req.url));
			}
			else{
				res.sendFile(path.join(__dirname + '/public/404.html'));
			}
		}
	}
	else{
		res.sendFile(path.join(__dirname + '/public/404.html'));
	}
});

app.listen(port, () => {
	console.log(`Your MiniServer is running on port ${port}`)
})
