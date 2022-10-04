
class Iphone {
    constructor() {
        this.cost = function () {
            return 999;
        };
        this.Model = function () {
            return 'Pro';
        };
    }
}

// Decorator1
const Memory = Iphone =>
{

    let c = Iphone.cost();
    Iphone.cost = function() {
        return c + 100;
    };

}

// Decorator2
const TradeIn = Iphone =>
{

    let c = Iphone.cost();
    Iphone.cost = function () {
        return c - 600;
    };
}


// Decorator3
const AppleCare = Iphone =>
{
    let c = Iphone.cost();
    Iphone.cost = function(){
        return  c + 199;
    };
}
let iphone = new Iphone();
Memory( iphone );
TradeIn( iphone );
AppleCare( iphone );

console.log( 'Iphone cost: ' + iphone.cost() );

console.log('Model of Iphone: Iphone ' + iphone.Model() );