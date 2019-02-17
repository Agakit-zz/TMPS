let storageDetail = {wheelDetail: 4, seatDetail: 4, motorDetail: 4}
let resourceStorage = {leather: 15, rubber: 10, metal: 15}
abstract class AbstractLeather {
  abstract getResourses(): void;
}

abstract class AbstractRubber {
  abstract getResourses(): void;
}
abstract class AbstractMetal {
  abstract getResourses(): void;
}
class Leather extends AbstractLeather {
  constructor(value: number) {
    super();
    resourceStorage.leather += value
  }
  getResourses(): void {}
}

class Rubber extends AbstractRubber {
  constructor(value: number) {
    super();
    resourceStorage.rubber += value
  }
  getResourses(): void {}
}
class Metal extends AbstractMetal {
  constructor(value: number) {
    super();
    resourceStorage.metal += value
  }
  getResourses(): void {}
}
abstract class AbstractFactory {
  abstract getAPiece(quantity): AbstractLeather;
}
class rubberFactory extends AbstractFactory {
  getAPiece(quantity): Rubber {
    return new Rubber(quantity);
  }
}
class metalFactory extends AbstractFactory {
  getAPiece(quantity): Metal {
    return new Metal(quantity);
  }
}
class leatherFactory extends AbstractFactory {
  getAPiece(quantity): Leather {
    return new Leather(quantity);
  }
}
const rFactory = new rubberFactory();
const mFactory = new metalFactory();
const lFactory = new leatherFactory();

interface Detail {
  createItem(quantity): void;
}

interface Factory {
  createDetail(name): Detail;
}

class WheelDetail implements Detail {
  createItem(quantity): void {
    if(resourceStorage.rubber <= quantity) {
      console.log(`not enought rubber, need ${quantity} more, creating...`)
      rFactory.getAPiece(quantity)
      resourceStorage.rubber -= quantity;
      console.log(`There is enough resources, building ${quantity} wheelDetail`)
      return storageDetail.wheelDetail += quantity
    } else {
      console.log(`${quantity} wheels were created`)
      resourceStorage.rubber -= quantity;
      return storageDetail.wheelDetail += quantity
    }
  }
}

class SeatDetail implements Detail {
  createItem(quantity): void {
    if(resourceStorage.leather <= quantity) {
      console.log(`not enought leather, need ${quantity} more, creating...`)
      lFactory.getAPiece(quantity)
      resourceStorage.leather -= quantity;
      console.log(`There is enough resources, building ${quantity} seat...`)
      return storageDetail.seatDetail += quantity
    } else {
      console.log(`${quantity} seats were created`)
      resourceStorage.leather -= quantity;
      return storageDetail.seatDetail += quantity
    }
  }
}

class MotorDetail implements Detail {
  createItem(quantity): void {
    if(resourceStorage.metal <= quantity) {
      console.log(`not enought metal, need ${quantity} more, creating...`)
      mFactory.getAPiece(quantity)
      resourceStorage.metal -=quantity;
      console.log(`There is enough resources, building ${quantity} motor...`)
      return storageDetail.motorDetail += quantity
    } else {
      console.log(`${quantity} motors were created`)
      resourceStorage.metal -=quantity;
      return storageDetail.motorDetail += quantity
    }
    
  }
}

class DetailFactory implements Factory {
  createDetail(name): Detail {
    switch(name) {
      case 'wheel':
        return new WheelDetail();
      case 'seat':
        return new SeatDetail();
      case 'motor':
        return new MotorDetail();
      default:
        return null;
    }
  }
}

(function main() {
  const factory = new DetailFactory();
  const detail1 = factory.createDetail('wheel');
  const detail2 = factory.createDetail('seat');
  const detail3 = factory.createDetail('motor');
  detail1.createItem(7);
  detail2.createItem(8);
  detail3.createItem(4);
  detail1.createItem(8);
  detail2.createItem(4);
  detail3.createItem(6);
  detail1.createItem(5);
  detail2.createItem(6);
  detail3.createItem(3);
  // console.log(storageDetail)
})()
