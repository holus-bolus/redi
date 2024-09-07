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


window.onload = () => {
    let hours = 2
    let minutes = 0
    let seconds = 0

    const formatTime = (value) => value.toString().padStart(2, '0')

    const updateCountdown = () => {
        const displayTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
        document.getElementById('hero__countdown-timer').innerText = displayTime
    }

    const countdown = () => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(timerInterval)
                    return
                } else {
                    hours--
                    minutes = 59
                    seconds = 59
                }
            } else {
                minutes--
                seconds = 59
            }
        } else {
            seconds--
        }

        updateCountdown()
    }

    const timerInterval = setInterval(countdown, 1000)
    updateCountdown()
}

window.onload = () => {
    let hours = 2
    let minutes = 0
    let seconds = 0

    const formatTime = (value) => value.toString().padStart(2, '0')

    const updateCountdown = () => {
        const displayTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
        document.getElementById('hero__countdown-timer').innerText = displayTime
    }

    const countdown = () => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(timerInterval)
                    return
                } else {
                    hours--
                    minutes = 59
                    seconds = 59
                }
            } else {
                minutes--
                seconds = 59
            }
        } else {
            seconds--
        }

        updateCountdown()
    }

    const timerInterval = setInterval(countdown, 1000)
    updateCountdown()

    const orderDate = new Date()

    const formatDate = (date) => {
        const day = formatTime(date.getDate())
        const month = formatTime(date.getMonth() + 1)
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
    }

    const displayOrderDate = () => {
        const formattedDate = formatDate(orderDate)
        document.getElementById('hero__order-date').innerText = `Order Date: ${formattedDate}`
    }

    displayOrderDate()
}

