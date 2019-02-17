export default class Vendor {
	construct(builder) {
		builder.buildCar();
		builder.addDetails();
		return builder.get();
	}
}
class AutoCarBuilder {
	car : any;
	buildCar(){
		this.car = new AutoCar(4,4,1);
	};
	addDetails() {
		this.car.addParts();
	};
	get() {
		return this.car;
	};
}

class HybridCarBuilder {
	car : any;
	buildCar(){
		this.car = new HybridCar(4,5,1);
	};
	addDetails() {
		this.car.addParts();
	};
	get() {
		return this.car;
	};
}
class AutoCar {
	constructor(public wheel: number, public seat: number, public motor: number) {}
	addParts() {
		this.wheel = 4,
    this.seat = 4,
    this.motor = 1
  }
  showMessage() {
    console.log(`I am a ${this.seat} seat auto car with ${this.wheel} wheels and with ${this.motor} motors`)
  }
}

class HybridCar {
	constructor(public wheel: number, public seat: number, public motor: number) {}
	addParts() {
		this.wheel = 4,
    this.seat = 5,
    this.motor = 2
  }
  showMessage() {
    console.log(`I am a ${this.seat} seat hybrid car with ${this.wheel} wheels and with ${this.motor} motors `)
  }
}
namespace Radio {
	export function turnOn(station) {console.log(`You are listening ${station}fm`)}
}
class AutoCarPrototype{
	constructor(private proto: any){};
	clone() {
		let car = new AutoCar(0,0,0);

		car.wheel = this.proto.wheel;
    car.seat = this.proto.seat;
    car.motor = this.proto.motor;

		return car;
	};
}

function execute() {
  Radio.turnOn('105.7')
	
	let proto = new AutoCar(4, 4, 5);
	let prototype = new AutoCarPrototype(proto);
	let protoCar = prototype.clone();
  protoCar.showMessage();
	let vendor = new Vendor();
	let autoCarBuilder = new AutoCarBuilder();
	let hybridCarBuilder = new HybridCarBuilder();
	let autoCar = vendor.construct(autoCarBuilder);
	let hybridCar = vendor.construct(hybridCarBuilder);
	autoCar.showMessage()
	hybridCar.showMessage()
};
execute();
