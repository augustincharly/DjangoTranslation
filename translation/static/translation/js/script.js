// setting boolean for the translation pause
pause = false;
$('#to_translate').on('input', function (e) {

	// I set end of string chars
	endChars = [' ', '.', '!', '?'];
	// I check if the last char is one of the allowed chars before sending AJAX
	if (endChars.indexOf(e.target.value.slice(-1)) != -1 && !pause) {
		console.log('hoora');
		$.ajax({
			url: `/translation/${e.target.value}/`,
			type: 'GET',
			success: function (data, statut) {
				$('#translated').html(data);
			},

			error: function (resultat, statut, erreur) {
				//
			},

			complete: function (resultat, statut) {
			}

		});
	}

});
$('#pause_btn').click(function () {
	pause = !pause;
	$('#pause_btn').text((pause) ? 'Defiger la traduction' : 'Figer la traduction');
	$('#to_translate').focus();
});