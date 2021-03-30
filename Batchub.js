let canvas
let b
let RATIO
let translate
let TRANSLATION_FILE
let LANGUAGE = "Portuguese"
let colorHandler = new ColorHandler()
let keysPressed = []
let isTouching = 'undefined'
let BLOCK_SIZE

function setup () {
  canvas = createCanvas(windowWidth, windowHeight)
  RATIO = (windowWidth > windowHeight) ? windowWidth/windowHeight : windowHeight/windowWidth
  BLOCK_SIZE = RATIO * 50
  b = new Calculator()
  translate = new Translator(TRANSLATION_FILE.getArray())
}

function preload () {
  TRANSLATION_FILE = loadTable('./assets/Batchub_Translations.csv', 'csv')
  colorHandler.preload()
}

function draw () {
  background(colorHandler.palette.background)
  b.draw()
  b.update()
  // console.log(mouseX, mouseY)
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
  RATIO = (windowWidth > windowHeight) ? windowWidth/windowHeight : windowHeight/windowWidth
}

function touchStarted () {
  isTouching = true
}

function touchEnded () {
  isTouching = false
}

function keyPressed () {
  keysPressed.push(key)
}
function keyReleased () {
  keysPressed.pop()
}
