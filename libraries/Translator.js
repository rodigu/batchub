class Translator {
  constructor (file_) {
    this.file = file_
    this.text = {}
    for (let i = 1; i < this.file.length; i++) {
      this.text[this.file[i][0]] = {}
      for (let j = 1; j < this.file[i].length; j++) {
        this.text[this.file[i][0]][this.file[0][j]] = this.file[i][j]
      }
    }
  }

}
