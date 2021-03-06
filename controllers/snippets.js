'use strict';

var Snippet = require('mongoose').model('Snippet');

// Create

exports.createSnippet = function (req, res) {
	console.log("createSnippet: " + req.body.content + " user: " + req.body.user);
	var snippetInsert = new Snippet({"content": req.body.content, "user": req.body.user });
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
	console.log("getSnippets: " + req.params.user);
	Snippet.find({user: req.params.user}).exec(function (err, collection) {
		res.send(collection);
	});
};

exports.findSnippetByContent = function (req, res) {
	console.log("findSnippetByContent: " + req.params.content.substr(0));
	Snippet.find({"content": new RegExp(req.params.content.substr(0), "i"), "user": req.params.user}).exec(function (err, collection) {
		res.send(collection);
	});
};

// Update

// Delete

// Helper
exports.getHostname = function (req, res) {
	var fs = require('fs')
	fs.readFile('/etc/hostname', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		//console.log(data);
		res.send({"hostname" : data});
	});
}
