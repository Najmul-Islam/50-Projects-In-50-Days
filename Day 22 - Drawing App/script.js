let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');
const disSize = document.getElementById('size');
const clear = document.getElementById('clear');
const colorPlete = document.getElementById('color');

let size = 10
let isPressd = false
colorPlete.value = 'black'
let color = colorPlete.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
	isPressd = true

	x = e.offsetX
	y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
	isPressd = false

	x = undefined
	y = undefined
})

canvas.addEventListener('mousemove', (e) => {
	if (isPressd) {
		const x2 = e.offsetX
		const y2 = e.offsetY

		drawCircle(x2, y2)
		drawLine(x, y, x2, y2)

		x = x2
		y = y2
	}
})

function sizeInScreen() {
	disSize.innerText = size
}

incBtn.addEventListener('click', (e) => {
	size += 5
	if (size > 50) {
		size = 50
	}
	sizeInScreen()
})

decBtn.addEventListener('click', (e) => {
	size -= 5
	if (size < 5) {
		size = 5
	}
	sizeInScreen()
})

clear.addEventListener('click', () => {

})

function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.strokeStyle = color
	ctx.lineWidth = size * 2
	ctx.stroke()
}

colorPlete.addEventListener('change', (e) => {
	color = e.target.value
})
clear.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
})