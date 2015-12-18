voiceCmdr.debug(true);

if(voiceCmdr.isSupported()) {

	voiceCmdr.addCommand("go", function (command) {
		//$("#listening").trigger('change');
		// insert text span and trigger insert event
		$("#something").text(command).trigger('change');
	});

	voiceCmdr.addCommand("search", function (command) {
		// insert text span and trigger insert event
		$("#search").text(command).trigger('search');
	});

	voiceCmdr.start();

} else {
	console.info("Sorry, your browser does not support the Web Speech API :(")
}
