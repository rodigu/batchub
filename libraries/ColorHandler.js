class ColorHandler {
  constructor () {
    this.current_palette = 'default'
    this.palette = {
      background: '#A9CBB7',
      buttonColor: '#EFECCA',
      textColor: '#5E565A',
      buttonHighlight: '#A9CBB7',
      textHighlight: '#5E565A'
    }
    this.fonts = {}
    this.currentFont
    this.textSize = 40
  }

  preload () {
    this.addFont('game_over', '.ttf')
    this.addFont('open_dyslexic_regular', '.otf')
    this.addFont('open_dyslexic_bold', '.otf')
    this.addFont('neutra_text_bold', '.otf')
    this.currentFont = 'neutra_text_bold'
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
        background: '#000000',
        buttonColor: '#EFECCA',
        textColor: '#5E565A',
        buttonHighlight: '#A9CBB7',
        textHighlight: '#5E565A'
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

  colorButton (isHighlighted = false, buttonStroke) {
    if (isHighlighted) {
      fill(this.palette.buttonHighlight)
    } else {
      fill(this.palette.buttonColor)
    }
    stroke(buttonStroke.color)
    strokeWeight(buttonStroke.weight)
  }

  colorText (isHighlighted = false, textStroke) {
    if (isHighlighted) {
      fill(this.palette.textHighlight)
    } else {
      fill(this.palette.textColor)
    }
    stroke(textStroke.color)
    strokeWeight(textStroke.weight)
    textFont(this.fonts[this.currentFont])
    textSize(this.textSize)
    textAlign(CENTER, CENTER)
  }
}
