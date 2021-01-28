let canvas
let b
let RATIO
let translate
let TRANSLATION_FILE
let LANGUAGE = "Portuguese"
let colorHandler = new ColorHandler()
let keysPressed = []
let isTouching = 'undefined'

function setup () {
  canvas = createCanvas(windowWidth, windowHeight)
  RATIO = (windowWidth > windowHeight) ? windowWidth/windowHeight : windowHeight/windowWidth
  b = new NumberPad(100, 100)
  translate = new Translator(TRANSLATION_FILE.getArray())
}

function preload () {
  TRANSLATION_FILE = loadTable('./assets/Batchub_Translations.csv', 'csv')
  colorHandler.preload()
}

function draw () {
  background(0)
  b.draw()
  b.update()
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
  RATIO = (windowWidth > windowHeight) ? windowWidth/windowHeight : windowHeight/windowWidth
}

function toucheStarted () {
  isTouching = true
}

function toucheEnded () {
  isTouching = false
}

function keyPressed () {
  keysPressed.push(key)
}
function keyReleased () {
  keysPressed.pop()
}
