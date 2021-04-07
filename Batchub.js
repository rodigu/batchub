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
  canvas = (windowWidth > windowHeight) ? createCanvas(windowHeight * 3 / 4, windowHeight) : createCanvas(windowWidth, windowHeight)
  canvas.position((windowWidth / 2) - windowHeight * 3 / 8, 0)
  RATIO = height / width
  IS_PORTRAIT = (windowHeight > windowWidth)
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
