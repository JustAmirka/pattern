class ManagerOfStrategy {
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
class Strategy1 {
    doAction() {
        console.log('StrategyPattern1');
    }
}
class Strategy2 {
    doAction() {
        console.log('StrategyPattern2');
    }
}
const strategyManager = new ManagerOfStrategy();
const strategy1 = new Strategy1();
const strategy2 = new Strategy2();

strategyManager.strategy = strategy1;
strategyManager.doAction();

strategyManager.strategy = strategy2;
strategyManager.doAction();