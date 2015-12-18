'use strict';

var mongoose = require('mongoose');

var snippetSchema = mongoose.Schema({
	content: {type: String, required: '{PATH} is required!'},
	isPrivate: {type: Boolean, default: false}
});

var Snippet = mongoose.model('Snippet', snippetSchema);

function createDefaultSnippets() {
	Snippet.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Snippet.create({content: 'the big brown fox jumped over the lazy dog', "id_": -1, "__v": 0});
			console.log('Snippets initialized');
		}
	});
}

exports.createDefaultSnippets = createDefaultSnippets;