class Starter extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/volcano.jpg';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    this.height += 100;
    this.width += 100;

    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
  }
}
