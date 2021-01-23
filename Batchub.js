let canvas
let b
let RATIO
let translate
let TRANSLATION_FILE
let LANGUAGE = "Portuguese"

function setup () {
  canvas = createCanvas(windowWidth, windowHeight)
  RATIO = (windowWidth > windowHeight) ? windowWidth/windowHeight : windowHeight/windowWidth
  b = new Button('b', width/2, height/2, 60*RATIO, 40*RATIO, false,
  () =>{
    textAlign(CENTER, CENTER)
    textSize(10*RATIO)
    fill(200)
  }, "CANCEL",
  () => {
    fill(200, 150, 150, 90)
    noStroke()
  },
  () => {
    strokeWeight(2)
    stroke(200, 150, 150)
  })
  translate = new Translator(TRANSLATION_FILE.getArray())
}

function preload () {
  TRANSLATION_FILE = loadTable('Batchub_Translations.csv', 'csv')
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
