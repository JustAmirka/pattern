class TV {
  constructor(price, place) {
    this.price = price;
    this.level = "";
  }
  getPrice() {
    return this.price;
  }
  getDesc() {
    return `This TV in ${this.level}`;
  }
}

class SmartTV extends TV {
  constructor() {
    super();
    this.price = 130000;
    this.level = "smart";
  }
}
class Standard extends TV {
  constructor() {
    super();
    this.price = 250000;
    this.level = "stand";
  }
}




class Color {
  constructor(tv, color) {
    this.tv = tv;
    this.color = color;
  }
  getPrice() {
    switch (this.color) {
      case "blue":
        return this.tv.getPrice() + 2000;
        break;
      case "standartic":
        return this.tv.getPrice();
        break;
      case "white":
        return this.tv.getPrice() + 30000;
        break;
    }
  }
  getDesc() {
    return `${this.tv.getDesc()} with color ${this.color}`;
  }
}
class Diametr {
  constructor(tv, diametr) {
    this.tv = tv;
    this.diametr = diametr;
  }
  getPrice() {
    switch (this.diametr) {
      case "30diametr":
        return this.tv.getPrice() + 30000;
        break;
      case "60diametr":
        return this.tv.getPrice() + 50000;
        break;
      case "90diametr":
        return this.tv.getPrice() + 800000;
        break;
    }
  }
  getDesc() {
    return `${this.tv.getDesc()} and have diametr ${this.diametr}`;
  }
}


var smart = new SmartTV();
const dia30 = "30diametr";
smart = new Diametr(smart, dia30);
const white = "white";
smart = new Color(smart, white);
console.log(smart.getPrice(), smart.getDesc());

var standart = new Standard();
const dia60 = "60diametr";
standart = new Diametr(standart, dia60);
const standartic = "standartic";
standart = new Color(standart, standartic);
console.log(standart.getPrice(), standart.getDesc());
