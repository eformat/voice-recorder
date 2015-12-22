'use strict';

var express = require('express'),
	router = express.Router(),
	snippets = require('../controllers/snippets');

router.get('/api/snippets', snippets.getSnippets);
router.post('/api/snippets', snippets.createSnippet);
router.get('/api/snippets/:content', snippets.findSnippetByContent);
router.get('/api/hostname', snippets.getHostname);

//router.get('/partials/*', function (req, res) {
//	res.render('partials/' + req.params[0]);
//});

router.get('*', function(req, res) {
	//res.render('index'); -- FIXME to render if using views --
	res.json('index');
});

module.exports = router;
