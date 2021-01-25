class Button {
  constructor (id_, x_, y_, text_, layer_ = 'buttons') {
    this.box = new CollisionBox(x_, y_, 0, 0, layer_)
    this.buttonFormatting = (isHighlighted) => { colorHandler.colorButton(isHighlighted) }
    this.isPressed = false
    this.id = id_
    this.textFormatting = (isHighlighted) => { colorHandler.colorText(isHighlighted) }
    this.text = text_
    this.isHighlighted = false
  }

  draw () {
    rectMode(CENTER)
    this.buttonFormatting(this.isHighlighted)
    rect(this.box.position.x, this.box.position.y, this.box.width, this.box.height, 5)
    this.textFormatting(this.isHighlighted)
    this.setDimensions()
    text(translate.text[this.text][LANGUAGE], this.box.position.x, this.box.position.y)
  }

  setDimensions () {
    this.box.width = textWidth(translate.text[this.text][LANGUAGE]) * 11 / 10
    this.box.height = colorHandler.textSize * 3 / 2
  }

  update () {
    this.isHighlighted = false
    this.isPressed = false
    if (this.box.pointHit(mouseX, mouseY)) {
      this.isHighlighted = true
      if (mouseIsPressed) { this.isPressed = true }
    }
  }
}
