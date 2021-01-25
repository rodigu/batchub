let canvas
let b
let RATIO
let translate
let TRANSLATION_FILE
let LANGUAGE = "Portuguese"
let colorHandler = new ColorHandler()

function setup () {
  canvas = createCanvas(windowWidth, windowHeight)
  RATIO = (windowWidth > windowHeight) ? windowWidth/windowHeight : windowHeight/windowWidth
  b = new Button('b', width/2, height/2, 'CANCEL')
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
