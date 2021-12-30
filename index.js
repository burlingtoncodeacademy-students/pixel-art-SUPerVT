let redButton = document.getElementById('red')
let blueButton = document.getElementById('blue')
let greenButton = document.getElementById('green')
let yellowButton = document.getElementById('yellow')
let violetButton = document.getElementById('violet')
let blackButton = document.getElementById('black')
let currentColor = document.getElementById('currentColor')

let startButton = document.querySelector('#start')
let gridCells = document.querySelectorAll('.cell')
let colorButtons = document.querySelectorAll('.colorButton')
let clearCellButton = document.getElementById('clearCell')
let clearBoardButton = document.getElementById('clearBoard')

//story 1 function to select the color buttons
function startButtonClick() {
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].disabled = false
  }
  currentColor.textContent = 'Black'
  startButton.disabled = true
}

function gridCellClick(event) {
  event.target.style.background = currentColor.textContent
}

//grid cell click
gridCells.forEach((gridCell) => {
  gridCell.addEventListener('click', gridCellClick)
})

//event listeners
startButton.addEventListener('click', startButtonClick)

redButton.addEventListener('click', () => {
  currentColor.textContent = 'Red'
})
blueButton.addEventListener('click', () => {
  currentColor.textContent = 'Blue'
})
greenButton.addEventListener('click', () => {
  currentColor.textContent = 'Green'
})
yellowButton.addEventListener('click', () => {
  currentColor.textContent = 'Yellow'
})
violetButton.addEventListener('click', () => {
  currentColor.textContent = 'Violet'
})
blackButton.addEventListener('click', () => {
  currentColor.textContent = 'Black'
})
clearCellButton.addEventListener('click', () => {
  currentColor.textContent = 'lightgray'
})

clearBoardButton.addEventListener('click', () => {
  let result = window.confirm('are you sure?')
  if (result) {
    gridCells.forEach((gridCell) => {
      gridCell.style.background = 'lightgray'
    })
  }
})
