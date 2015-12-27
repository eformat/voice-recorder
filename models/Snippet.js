'use strict';

var mongoose = require('mongoose');

var snippetSchema = mongoose.Schema({
	content: {type: String, required: '{PATH} is required!'},
	isPrivate: {type: Boolean, default: false},
	user: {type: String, default: "all"}
});

var Snippet = mongoose.model('Snippet', snippetSchema);

function createDefaultSnippets() {
	Snippet.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Snippet.create({content: 'the quick brown fox jumped over the lazy dog', "id_": -1, "__v": 0, user:'all'});
			console.log('Snippets initialized');
		}
	});
}

exports.createDefaultSnippets = createDefaultSnippets;