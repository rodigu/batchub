class CollisionBox {
  constructor (x_, y_, wid_, hei_, layer_) {
    this.position = createVector(x_, y_)
    this.width = wid_
    this.height = hei_
    this.layer = layer_
  }

  pointHit (x_, y_) {
    return (x_ > this.position.x - this.width/2 && x_ < this.position.x + this.width/2 && y_ > this.position.y - this.height/2 && y_ < this.position.y + this.height/2)
  }
}
