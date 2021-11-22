export default class Car {
  constructor(initialSpeed) {
    this.engine = "2.94 L";
    this.power = "97 kW";
    this.speed = initialSpeed;
  }

  accelerate() {
    this.speed++;
  }

  brake() {
    speed--;
  }
}
