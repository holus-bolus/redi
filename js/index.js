const phoneInput = document.getElementById('phone')

phoneInput.addEventListener('input', function (e) {
	let input = e.target.value.replace(/\D/g, '')
	let formatted = ''

	if (input.length > 0) {
		formatted += input.substring(0, 2)
	}
	if (input.length > 2) {
		formatted += ') ' + input.substring(2, 5)
	}
	if (input.length > 5) {
		formatted += '-' + input.substring(5, 7)
	}
	if (input.length > 7) {
		formatted += '-' + input.substring(7, 9)
	}

	e.target.value = formatted
})
