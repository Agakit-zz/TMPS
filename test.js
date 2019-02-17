var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var storageDetail = { wheelDetail: 4, seatDetail: 4, motorDetail: 4 };
var resourceStorage = { leather: 15, rubber: 10, metal: 15 };
var AbstractLeather = /** @class */ (function () {
    function AbstractLeather() {
    }
    return AbstractLeather;
}());
var AbstractRubber = /** @class */ (function () {
    function AbstractRubber() {
    }
    return AbstractRubber;
}());
var AbstractMetal = /** @class */ (function () {
    function AbstractMetal() {
    }
    return AbstractMetal;
}());
var Leather = /** @class */ (function (_super) {
    __extends(Leather, _super);
    function Leather(value) {
        var _this = _super.call(this) || this;
        resourceStorage.leather += value;
        return _this;
    }
    Leather.prototype.getResourses = function () { };
    return Leather;
}(AbstractLeather));
var Rubber = /** @class */ (function (_super) {
    __extends(Rubber, _super);
    function Rubber(value) {
        var _this = _super.call(this) || this;
        resourceStorage.rubber += value;
        return _this;
    }
    Rubber.prototype.getResourses = function () { };
    return Rubber;
}(AbstractRubber));
var Metal = /** @class */ (function (_super) {
    __extends(Metal, _super);
    function Metal(value) {
        var _this = _super.call(this) || this;
        resourceStorage.metal += value;
        return _this;
    }
    Metal.prototype.getResourses = function () { };
    return Metal;
}(AbstractMetal));
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    return AbstractFactory;
}());
var rubberFactory = /** @class */ (function (_super) {
    __extends(rubberFactory, _super);
    function rubberFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rubberFactory.prototype.getAPiece = function (quantity) {
        return new Rubber(quantity);
    };
    return rubberFactory;
}(AbstractFactory));
var metalFactory = /** @class */ (function (_super) {
    __extends(metalFactory, _super);
    function metalFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    metalFactory.prototype.getAPiece = function (quantity) {
        return new Metal(quantity);
    };
    return metalFactory;
}(AbstractFactory));
var leatherFactory = /** @class */ (function (_super) {
    __extends(leatherFactory, _super);
    function leatherFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    leatherFactory.prototype.getAPiece = function (quantity) {
        return new Leather(quantity);
    };
    return leatherFactory;
}(AbstractFactory));
var rFactory = new rubberFactory();
var mFactory = new metalFactory();
var lFactory = new leatherFactory();
var WheelDetail = /** @class */ (function () {
    function WheelDetail() {
    }
    WheelDetail.prototype.createItem = function (quantity) {
        if (resourceStorage.rubber <= quantity) {
            console.log("not enought rubber, need " + quantity + " more, creating...");
            rFactory.getAPiece(quantity);
            resourceStorage.rubber -= quantity;
            console.log("There is enough resources, building " + quantity + " wheelDetail");
            return storageDetail.wheelDetail += quantity;
        }
        else {
            console.log(quantity + " wheels were created");
            resourceStorage.rubber -= quantity;
            return storageDetail.wheelDetail += quantity;
        }
    };
    return WheelDetail;
}());
var SeatDetail = /** @class */ (function () {
    function SeatDetail() {
    }
    SeatDetail.prototype.createItem = function (quantity) {
        if (resourceStorage.leather <= quantity) {
            console.log("not enought leather, need " + quantity + " more, creating...");
            lFactory.getAPiece(quantity);
            resourceStorage.leather -= quantity;
            console.log("There is enough resources, building " + quantity + " seat...");
            return storageDetail.seatDetail += quantity;
        }
        else {
            console.log(quantity + " seats were created");
            resourceStorage.leather -= quantity;
            return storageDetail.seatDetail += quantity;
        }
    };
    return SeatDetail;
}());
var MotorDetail = /** @class */ (function () {
    function MotorDetail() {
    }
    MotorDetail.prototype.createItem = function (quantity) {
        if (resourceStorage.metal <= quantity) {
            console.log("not enought metal, need " + quantity + " more, creating...");
            mFactory.getAPiece(quantity);
            resourceStorage.metal -= quantity;
            console.log("There is enough resources, building " + quantity + " motor...");
            return storageDetail.motorDetail += quantity;
        }
        else {
            console.log(quantity + " motors were created");
            resourceStorage.metal -= quantity;
            return storageDetail.motorDetail += quantity;
        }
    };
    return MotorDetail;
}());
var DetailFactory = /** @class */ (function () {
    function DetailFactory() {
    }
    DetailFactory.prototype.createDetail = function (name) {
        switch (name) {
            case 'wheel':
                return new WheelDetail();
            case 'seat':
                return new SeatDetail();
            case 'motor':
                return new MotorDetail();
            default:
                return null;
        }
    };
    return DetailFactory;
}());
(function main() {
    var factory = new DetailFactory();
    var detail1 = factory.createDetail('wheel');
    var detail2 = factory.createDetail('seat');
    var detail3 = factory.createDetail('motor');
    detail1.createItem(7);
    detail2.createItem(8);
    detail3.createItem(4);
    detail1.createItem(8);
    detail2.createItem(4);
    detail3.createItem(6);
    detail1.createItem(5);
    detail2.createItem(6);
    detail3.createItem(3);
    console.log(storageDetail);
})();
