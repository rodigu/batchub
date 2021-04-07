class Calculator {
    constructor () {
        this.operation = 'none'
        this.numbers = {a: 0, b: 0}
        this.difficulty = 1
        this.numPad = new NumberPad(width / 2, height - BLOCK_SIZE * 2.5)
        this._createButtons()
        this.answer = -1
        this.answerDelay = 16
    }

    _createButtons () {
        this.buttons = {
            a: new Button('A', width / 2, BLOCK_SIZE / 1.5, this.numbers.a),
            b: new Button('B', width / 2, 2 * BLOCK_SIZE, this.numbers.b),
        }
        this.buttons.a.useCustomDimensions = true
        this.buttons.a.customDimensions = { width: BLOCK_SIZE * 2, height: BLOCK_SIZE }
        this.buttons.a.stroke.color = colorHandler.palette.textHighlight
        this.buttons.a.stroke.weight = 5

        this.buttons.b.useCustomDimensions = true
        this.buttons.b.customDimensions = { width: BLOCK_SIZE * 2, height: BLOCK_SIZE }
        this.buttons.b.stroke.color = colorHandler.palette.textHighlight
        this.buttons.b.stroke.weight = 5

        this.buttons.input =  new Button('IN', width / 2, 3.25 * BLOCK_SIZE, '0', false)
        this.buttons.input.setCustomDimensions({ width: BLOCK_SIZE * 4, height: BLOCK_SIZE }, { color: colorHandler.palette.textHighlight, weight: 5 })
        this.generate('+')

        this.buttons.operation = new Button('OP', (width / 2) - 1.75 * BLOCK_SIZE, 2 * BLOCK_SIZE, this.operation, false)
        this.buttons.operation.setCustomDimensions({ width: BLOCK_SIZE, height: BLOCK_SIZE }, { color: colorHandler.palette.textHighlight, weight: 5 })
        this.buttons.operation.roundness = 50
    }

    _isAnswerCorrect () {
        const checker = {
            '+': (x, y) => {
                return x + y
            },
            '*': (x, y) => {
                return x * y
            },
            '-': (x, y) => {
                return x - y
            }
        }
        const a = parseInt(this.buttons.a.text, 10)
        const b = parseInt(this.buttons.b.text, 10)
        if (this.answer === checker[this.operation](a, b)) {
            this.difficulty += this.difficulty / 2
            return true
        } else {
            this.difficulty -= this.difficulty < 1 ? 0 : 0.5
            return false
        }
    }

    generate (type_) {
        this.numPad.history = []
        this.operation = type_
        this.numbers.a = Math.ceil(Math.random() * this.difficulty * 5)
        this.numbers.b = Math.ceil(Math.random() * this.difficulty * 3)
    }

    draw () {
        this.numPad.draw()
        this.buttons.a.draw()
        this.buttons.b.draw()
        this.buttons.input.draw()
        this.buttons.operation.draw()
    }

    update () {
        this.answerDelay ++
        this.input()
        this.buttons.a.text = this.numbers.a
        this.buttons.b.text = this.numbers.b
        this.numPad.update()
        this.buttons.operation.update()
        if (this.buttons.operation.isPressed && this.answerDelay > 16 && this._isAnswerCorrect()) {
            this.answerDelay = 0
            this.generate('+')
        }
    }

    input () {
        this.buttons.input.text = this.numPad.history.join('')
        this.answer = !!this.buttons.input.text ? parseInt(this.buttons.input.text, 10) : -1
    }
}