'use strict';

var Snippet = require('mongoose').model('Snippet');

// Create

exports.createSnippet = function (req, res) {
	console.log("createSnippet: " + req.body.content);
	var snippetInsert = new Snippet({"content": req.body.content });
	snippetInsert.save(function (err, result) {
		if (!err) {
			res.send({"result":"OK"});
		} else {
			res.send({"result": "Failed"})
		}
	});
};

// Read

exports.getSnippets = function (req, res) {
	Snippet.find({}).exec(function (err, collection) {
		res.send(collection);
	});
};

// Update

// Delete