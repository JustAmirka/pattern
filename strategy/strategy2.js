class ManagerOfStrategy {
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
class Strategy1 {
    doOperation() {
        console.log('StrategyPattern1');
    }
}
class Strategy2 {
    doOperation() {
        console.log('StrategyPattern2');
    }
}
const managerOfStrategy = new ManagerOfStrategy();
const strategy1 = new Strategy1();
const strategy2 = new Strategy2();

managerOfStrategy.strategy = strategy1;
managerOfStrategy.doOperation();

managerOfStrategy.strategy = strategy2;
managerOfStrategy.doOperation();