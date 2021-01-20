let canvas
let b

function setup () {
  canvas = createCanvas(windowWidth, windowHeight)
  b = new Button('b', width/2, height/2, 70, 50, false,
  () => {
    fill(200, 50)
    noStroke()
  },
  () => {
    strokeWeight(2)
    stroke(200, 150, 150)
  })
}

function draw () {
  background(0)
  b.draw()
  b.update()
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}
