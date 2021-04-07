class Button {
  constructor (id_, x_, y_, text_, trans = true, layer_ = 'buttons') {
    this.box = new CollisionBox(x_, y_, 0, 0, layer_)
    this.isPressed = false
    this.id = id_
    this.text = text_
    this.isHighlighted = false
    this.useCustomDimensions = false
    this.customDimensions = {
      width: BLOCK_SIZE,
      height: BLOCK_SIZE
    }
    this.textStroke = {
      color: 0,
      weight: 0
    }
    this.stroke = {
      color: 200,
      weight: 0
    }
    this.roundness = 5
    this.doTranslate = trans
  }

  draw () {
    if (!this.useCustomDimensions) {
      this.setDimensions()
    } else {
      this.box.width = this.customDimensions.width
      this.box.height = this.customDimensions.height
    }
    rectMode(CENTER)
    colorHandler.colorButton(this.isHighlighted, this.stroke)
    rect(this.box.position.x, this.box.position.y, this.box.width, this.box.height, this.roundness)

    let txt
    if (this.doTranslate && (isNaN(parseInt(this.text)) && this.text != '<')) {
      txt = translate.text[this.text][LANGUAGE]
    } else { txt = this.text }
    colorHandler.colorText(this.isHighlighted, this.textStroke)
    text(txt, this.box.position.x, this.box.position.y)
  }

  setDimensions () {
    let txt
    if (this.doTranslate && (isNaN(parseInt(this.text)) && this.text != '<')) {
      txt = translate.text[this.text][LANGUAGE]
    } else { txt = this.text }
    this.box.width = textWidth(txt) * 11 / 10
    this.box.height = colorHandler.textSize * 3 / 2
  }

  setStroke (stroke_) {
    this.stroke = stroke_
  }

  update () {
    this.isHighlighted = false
    this.isPressed = false
    if (this.box.pointHit(mouseX, mouseY)) {
      if (isTouching === 'undefined') {
        this.isHighlighted = true
        if (mouseIsPressed) { this.isPressed = true }
      }
      else {
        if (isTouching) {
          this.isHighlighted = true
          this.isPressed = true
        } else this.isPressed = false
      }
    }
  }

  setCustomDimensions(customD, stroke_) {
    this.customDimensions = customD
    this.stroke = stroke_
    this.useCustomDimensions = true
  }
}
