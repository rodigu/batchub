class NumberPad {
  constructor (x_, y_) {
    this.history = []
    this.buttons = []
    this.blockSize = BLOCK_SIZE
    this.pressDelay = 0
    this.position = {
      x: x_ - this.blockSize,
      y: y_ - (this.blockSize + this.blockSize / 2)
    }
    this.buttons.push(new Button(0, this.position.x + this.blockSize, this.position.y + 3*this.blockSize, '0', 'pad'))
    this.buttons[0].useCustomDimensions = true
    this.buttons[0].stroke.color = 240
    this.buttons[0].stroke.weight = 2
    for (let i = 1; i <= 9; i++) {
      let xp = this.position.x + (((i - 1) % 3) * (this.blockSize))
      let yp = this.position.y + this.blockSize * Math.floor(i / 4)
      if (i === 3) { yp = this.position.y }
      if (i === 7) { yp = this.position.y  + this.blockSize * 2 }
      this.buttons.push(new Button(i, xp, yp, i.toString(), 'pad'))
      this.buttons[i].useCustomDimensions = true
      this.buttons[i].stroke.color = 240
      this.buttons[i].stroke.weight = 2
    }
    this.buttons.push(new Button('<', this.position.x + 2 * this.blockSize, this.position.y + 3 * this.blockSize, '<', 'pad'))
    this.buttons[10].useCustomDimensions = true
    this.buttons[10].stroke.color = 240
    this.buttons[10].stroke.weight = 2
  }

  draw () {
    rectMode(CORNER)
    fill(colorHandler.palette.buttonHighlight)
    stroke(colorHandler.palette.textHighlight)
    strokeWeight(5)
    rect(this.position.x - (this.blockSize / 4 + this.blockSize / 2), this.position.y  - (this.blockSize / 4 + this.blockSize / 2), 3 * this.blockSize + (this.blockSize / 2), 4 * this.blockSize  + (this.blockSize / 2), 5)
    for (let i = 0; i <= 10; i++) {
      this.buttons[i].draw()
    }
  }

  update () {
    this.pressDelay ++
    for (let i = 0; i <= 10; i++) {
      this.buttons[i].update()
      if (this.buttons[i].isPressed && this.pressDelay > 16) {
        this.pressDelay = 0
        if (this.buttons[i].id === '<') {
          this.history.pop()
        } else {
          this.history.push(this.buttons[i].id)
        }
      }
    }
  }
}
