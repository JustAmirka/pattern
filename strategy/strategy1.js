
class Salutation {
  constructor() {
    this.str = null;
  }
  set strategy(strategy) {
    this.str = strategy;
  }
  doOperation() {
    this.str.doOperation();
  }
}
class politeSalutationStrategy {
  doOperation() {
    console.log("Hello!");
  }
}

class friendlySalutationStrategy{
  doOperation() {
    console.log("Howdy!");
  }
}

class kazakhSalutationStrategy {
  doOperation() {
    console.log("Salem");
  }
}
const salutation = new Salutation();
const politeSalutation = new politeSalutationStrategy();
const friendlySalutation = new friendlySalutationStrategy();
const kazakhSalutation = new kazakhSalutationStrategy();

salutation.strategy = politeSalutation;
salutation.doOperation();
salutation.strategy = friendlySalutation;
salutation.doOperation();
salutation.strategy = kazakhSalutation;
salutation.doOperation();
