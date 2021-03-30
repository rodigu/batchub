class Calculator {
    constructor () {
        this.operation = 'none'
        this.numbers = {a: 0, b: 0}
        this.difficulty = 1
        this.numPad = new NumberPad(windowWidth / 2, windowHeight - BLOCK_SIZE * 3)
        this.buttons = {
            a: new Button('A', windowWidth / 2, BLOCK_SIZE / 1.5, this.numbers.a),
            b: new Button('B', windowWidth / 2, 2 * BLOCK_SIZE, this.numbers.b),
        }
        this.buttons.a.useCustomDimensions = true
        this.buttons.a.customDimensions = {width: BLOCK_SIZE * 2, height: BLOCK_SIZE }
        this.buttons.a.stroke.color = colorHandler.palette.textHighlight
        this.buttons.a.stroke.weight = 5
        this.buttons.b.useCustomDimensions = true
        this.buttons.b.customDimensions = {width: BLOCK_SIZE * 2, height: BLOCK_SIZE }
        this.buttons.b.stroke.color = colorHandler.palette.textHighlight
        this.buttons.b.stroke.weight = 5
        this.generate('sum')
    }

    generate (type_) {
        this.operation = type_
        this.numbers.a = Math.ceil(Math.random() * this.difficulty * 5)
        this.numbers.b = Math.ceil(Math.random() * this.difficulty * 3)
    }

    draw () {
        this.numPad.draw()
        this.buttons.a.draw()
        this.buttons.b.draw()
    }

    update () {
        this.buttons.a.text = this.numbers.a
        this.buttons.b.text = this.numbers.b
        this.numPad.update()
    }
}