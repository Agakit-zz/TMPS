"use strict";
exports.__esModule = true;
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    Vendor.prototype.construct = function (builder) {
        builder.buildCar();
        builder.addDetails();
        return builder.get();
    };
    return Vendor;
}());
exports["default"] = Vendor;
var AutoCarBuilder = /** @class */ (function () {
    function AutoCarBuilder() {
    }
    AutoCarBuilder.prototype.buildCar = function () {
        this.car = new AutoCar(4, 4, 1);
    };
    ;
    AutoCarBuilder.prototype.addDetails = function () {
        this.car.addParts();
    };
    ;
    AutoCarBuilder.prototype.get = function () {
        return this.car;
    };
    ;
    return AutoCarBuilder;
}());
var HybridCarBuilder = /** @class */ (function () {
    function HybridCarBuilder() {
    }
    HybridCarBuilder.prototype.buildCar = function () {
        this.car = new HybridCar(4, 5, 1);
    };
    ;
    HybridCarBuilder.prototype.addDetails = function () {
        this.car.addParts();
    };
    ;
    HybridCarBuilder.prototype.get = function () {
        return this.car;
    };
    ;
    return HybridCarBuilder;
}());
var AutoCar = /** @class */ (function () {
    function AutoCar(wheel, seat, motor) {
        this.wheel = wheel;
        this.seat = seat;
        this.motor = motor;
    }
    AutoCar.prototype.addParts = function () {
        this.wheel = 4,
            this.seat = 4,
            this.motor = 1;
    };
    AutoCar.prototype.showMessage = function () {
        console.log("I am a " + this.seat + " seat auto car with " + this.wheel + " wheels and with " + this.motor + " motors");
    };
    return AutoCar;
}());
var HybridCar = /** @class */ (function () {
    function HybridCar(wheel, seat, motor) {
        this.wheel = wheel;
        this.seat = seat;
        this.motor = motor;
    }
    HybridCar.prototype.addParts = function () {
        this.wheel = 4,
            this.seat = 5,
            this.motor = 2;
    };
    HybridCar.prototype.showMessage = function () {
        console.log("I am a " + this.seat + " seat hybrid car with " + this.wheel + " wheels and with " + this.motor + " motors ");
    };
    return HybridCar;
}());
var Radio;
(function (Radio) {
    function turnOn(station) { console.log("You are listening " + station + "fm"); }
    Radio.turnOn = turnOn;
})(Radio || (Radio = {}));
var AutoCarPrototype = /** @class */ (function () {
    function AutoCarPrototype(proto) {
        this.proto = proto;
    }
    ;
    AutoCarPrototype.prototype.clone = function () {
        var car = new AutoCar(0, 0, 0);
        car.wheel = this.proto.wheel;
        car.seat = this.proto.seat;
        car.motor = this.proto.motor;
        return car;
    };
    ;
    return AutoCarPrototype;
}());
function execute() {
    Radio.turnOn('105.7');
    var proto = new AutoCar(4, 4, 5);
    var prototype = new AutoCarPrototype(proto);
    var protoCar = prototype.clone();
    protoCar.showMessage();
    var vendor = new Vendor();
    var autoCarBuilder = new AutoCarBuilder();
    var hybridCarBuilder = new HybridCarBuilder();
    var autoCar = vendor.construct(autoCarBuilder);
    var hybridCar = vendor.construct(hybridCarBuilder);
    autoCar.showMessage();
    hybridCar.showMessage();
}
;
execute();
