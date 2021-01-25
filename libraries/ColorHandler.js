class ColorHandler {
  constructor () {
    this.current_palette = 'default'
    this.palette = {
      background: '#000000',
      buttonColor: '#7C2839',
      textColor: '#E6D2A6',
      buttonHighlight: '#C16E4F',
      textHighlight: '#97D2A3'
    }
    this.fonts = {}
    this.currentFont
    this.textSize = 40
    this.textStroke = {
      color: 0,
      weight: 1
    }
    this.buttonStroke = {
      color: 200,
      weight: 2
    }
  }

  preload () {
    this.addFont('game_over', '.ttf')
    this.addFont('open_dyslexic_regular', '.otf')
    this.addFont('open_dyslexic_bold', '.otf')
    this.currentFont = 'game_over'
  }

  addFont (fontName, fontType) {
    this.fonts[fontName] = loadFont('./assets/' + fontName + fontType)
  }

  setFont (newFont) {
    this.currentFont = newFont
  }

  setPalette (new_palette) {
    if (new_palette === 'color_blindness_0') {
      this.palette = {
        background: '#090000',
        buttonColor: '#F7193A',
        textColor: '#59B7D9',
        buttonHighlight: '#3768DB',
        textHighlight: '#A0DFDB'
      }
    } else if (new_palette === 'default') {
      this.palette = {
        background: '#000000',
        buttonColor: '#C16E4F',
        textColor: '#E6D2A6',
        buttonHighlight: '#7C2839',
        textHighlight: '#97D2A3'
      }
    }
  }

  colorButton (isHighlighted = false) {
    if (isHighlighted) {
      fill(this.palette.buttonHighlight)
    } else {
      fill(this.palette.buttonColor)
    }
    stroke(this.buttonStroke.color)
    strokeWeight(this.buttonStroke.weight)
  }

  colorText (isHighlighted = false) {
    if (isHighlighted) {
      fill(this.palette.textHighlight)
    } else {
      fill(this.palette.textColor)
    }
    stroke(this.textStroke.color)
    strokeWeight(this.textStroke.weight)
    textFont(this.fonts[this.currentFont])
    textSize(this.textSize)
    textAlign(CENTER, CENTER)
  }
}
