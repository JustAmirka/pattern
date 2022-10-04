
class Salutation {
  constructor() {
    this._strategy = null;
  }
  set strategy(strategy) {
    this._strategy = strategy;
  }
  get strategy() {
    return this._strategy;
  }
  doAction() {
    this._strategy.doAction();
  }
}
class politeSalutationStrategy {
  doAction() {
    console.log("Hello!");
  }
}

class friendlySalutationStrategy{
  doAction() {
    console.log("Howdy!");
  }
}

class kazakhSalutationStrategy {
  doAction() {
    console.log("Salem");
  }
}
const salutation = new Salutation();
const politeSalutation = new politeSalutationStrategy();
const friendlySalutation = new friendlySalutationStrategy();
const kazakhSalutation = new kazakhSalutationStrategy();

salutation.strategy = politeSalutation;
salutation.doAction();
salutation.strategy = friendlySalutation;
salutation.doAction();
salutation.strategy = kazakhSalutation;
salutation.doAction();
