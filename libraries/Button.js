class Button {
  constructor (id_, x_, y_, wid_, hei_, state_, visual_, hov_, layer_ = 'buttons') {
    this.box = new CollisionBox(x_, y_, wid_, hei_, layer_)
    this.visual = visual_
    this.isPressed = state_
    this.id = id_
    this.hover = hov_
  }

  draw () {
    rectMode(CENTER)
    this.visual()
    rect(width/2, height/2, this.box.width, this.box.height, 10)
  }

  update () {
    if (this.box.pointHit(mouseX, mouseY)) {
      rectMode(CENTER)
      this.hover()
      rect(this.box.position.x, this.box.position.y, this.box.width, this.box.height, 10)
      if (mouseIsPressed) { this.isPressed = true }
    }
  }
}
