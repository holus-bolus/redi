const phoneInput = document.getElementById('phone')

phoneInput.addEventListener('input', function (e) {
	let input = e.target.value.replace(/\D/g, '') // Remove all non-digit characters
	let formatted = ''

	if (input.length > 0) {
		formatted += input.substring(0, 2) // First 2 digits for the area code (e.g., 95)
	}
	if (input.length > 2) {
		formatted += ') ' + input.substring(2, 5) // Add closing parenthesis and next 3 digits (e.g., 687)
	}
	if (input.length > 5) {
		formatted += '-' + input.substring(5, 7) // Add dash and next 2 digits (e.g., 02)
	}
	if (input.length > 7) {
		formatted += '-' + input.substring(7, 9) // Add dash and last 2 digits (e.g., 44)
	}

	e.target.value = formatted
})
