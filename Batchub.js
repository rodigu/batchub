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
let IS_PORTRAIT = true

function setup () {
  canvas = createCanvas(windowWidth, windowHeight)
  IS_PORTRAIT = (windowHeight > windowWidth)
  BLOCK_SIZE = windowWidth / 5
  b = new Calculator()
  translate = new Translator(TRANSLATION_FILE.getArray())
  colorHandler.textSize = BLOCK_SIZE
}

function preload () {
  TRANSLATION_FILE = loadTable('./assets/Batchub_Translations.csv', 'csv')
  colorHandler.preload()
}

function draw () {
  background(colorHandler.palette.background)
  b.draw()
  b.update()
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
