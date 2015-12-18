voiceCmdr.debug(true);

if(voiceCmdr.isSupported()) {

	voiceCmdr.addCommand("go", function (command) {
		// insert text span and trigger insert event
		$("#something").text(command).trigger('change');
	});

	voiceCmdr.start();

} else {
	console.info("Sorry, your browser does not support the Web Speech API :(")
}
