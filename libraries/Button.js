class Button {
  constructor (id_, x_, y_, wid_, hei_, state_, textf_, text_, visual_, hov_, layer_ = 'buttons') {
    this.box = new CollisionBox(x_, y_, wid_, hei_, layer_)
    this.visual = visual_
    this.isPressed = state_
    this.id = id_
    this.hover = hov_
    this.text_formatting = textf_
    this.text = text_
  }

  draw () {
    rectMode(CENTER)
    this.text_formatting()
    text(translate.text[this.text][LANGUAGE], this.box.position.x, this.box.position.y)
    this.visual()
    rect(this.box.position.x, this.box.position.y, this.box.width, this.box.height, 10)
  }

  update () {
    if (this.box.pointHit(mouseX, mouseY)) {
      rectMode(CENTER)
      this.text_formatting()
      text(translate.text[this.text][LANGUAGE], this.box.position.x, this.box.position.y)
      this.hover()
      rect(this.box.position.x, this.box.position.y, this.box.width, this.box.height, 10)
      if (mouseIsPressed) { this.isPressed = true }
    }
  }
}
