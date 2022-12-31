"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var oven_1 = __importDefault(require("./oven"));
var worker_1 = __importDefault(require("./worker"));
var ToppingChef = /** @class */ (function () {
    function ToppingChef(ToppingChefWorker) {
        this.oven = new oven_1.default(new worker_1.default());
        this.QueueOrders = [];
        this.ToppingChefWorker = ToppingChefWorker;
        this.listenToEvents();
    }
    ToppingChef.prototype.listenToEvents = function () {
        var _this = this;
        setInterval(function () {
            if (_this.QueueOrders.length) {
                for (var index = 0; index < _this.ToppingChefWorker.length; index++) {
                    if (_this.ToppingChefWorker[index].isAvailble && _this.ToppingChefWorker[index].Order == undefined) {
                        _this.ToppingChefWorker[index].isAvailble = false;
                        var order = _this.QueueOrders.shift();
                        if (order) {
                            _this.makeTopping(order, index);
                        }
                    }
                }
            }
        }, 1000);
    };
    ToppingChef.prototype.makeTopping = function (order, ToppingChefIndex) {
        var _this = this;
        setTimeout(function () {
            _this.oven.QueueOrders.push(order);
            _this.ToppingChefWorker[ToppingChefIndex ? ToppingChefIndex : 0].isAvailble = true;
        }, (order.Topping.length / 2 == 0 ? (order.Topping.length / 2) * 4000 : ((order.Topping.length / 2) * 4000) + 2000));
    };
    return ToppingChef;
}());
exports.default = ToppingChef;
