class Button {
  constructor (id_, x_, y_, text_, layer_ = 'buttons') {
    this.box = new CollisionBox(x_, y_, 0, 0, layer_)
    this.isPressed = false
    this.id = id_
    this.text = text_
    this.isHighlighted = false
    this.useCustomDimensions = false
    this.customDimensions = {
      width: RATIO*45,
      height: RATIO*45
    }
    this.textStroke = {
      color: 0,
      weight: 0
    }
    this.stroke = {
      color: 200,
      weight: 0
    }
  }

  draw () {
    rectMode(CENTER)
    colorHandler.colorButton(this.isHighlighted, this.stroke)
    rect(this.box.position.x, this.box.position.y, this.box.width, this.box.height, 5)
    colorHandler.colorText(this.isHighlighted, this.textStroke)
    if (!this.useCustomDimensions) {
      this.setDimensions()
    } else {
      this.box.width = this.customDimensions.width
      this.box.height = this.customDimensions.height
    }
    let txt
    if (isNaN(parseInt(this.text)) && this.text != '<') {
      txt = translate.text[this.text][LANGUAGE]
    } else { txt = this.text }
    text(txt, this.box.position.x, this.box.position.y)
  }

  setDimensions () {
    let txt
    if (isNaN(parseInt(this.text)) && this.text != '<') {
      txt = translate.text[this.text][LANGUAGE]
    } else { txt = this.text }
    this.box.width = textWidth(txt) * 11 / 10
    this.box.height = colorHandler.textSize * 3 / 2
  }

  update () {
    this.isHighlighted = false
    this.isPressed = false
    if (this.box.pointHit(mouseX, mouseY)) {
      this.isHighlighted = true
      if (isTouching === 'undefined') {
        if (mouseIsPressed) { this.isPressed = true }
      }
      else {
        if (isTouching) { this.isPressed = true }
      }
    }
  }
}
