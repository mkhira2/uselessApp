var secondHand = document.querySelector('.secondHand')
var minuteHand = document.querySelector('.minuteHand')
var hourHand = document.querySelector('.hourHand')

var clockNode = document.querySelector('.clock')

var setDate = function() {

	var now = new Date()

	var seconds = now.getSeconds()
	var secondsDegrees = ((seconds / 60) * 360) + 90
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`

	var minutes = now.getMinutes()
	var minutesDegrees = ((minutes / 60) * 360) + 90
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

	var hours = now.getHours()
	var hoursDegrees = ((hours / 12) * 360) + 90
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

var lightenUp = function() {
	var now = new Date()
	if (now.getSeconds() === 0) {
		clockNode.style.border = '15px solid #F3DE8A'
	}
	else {
		clockNode.style.border = '15px solid white'
	}
}

setInterval(setDate, 1000)
setInterval(lightenUp, 1000)