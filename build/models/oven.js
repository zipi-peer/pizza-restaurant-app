"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var serving_1 = __importDefault(require("./serving"));
var worker_1 = __importDefault(require("./worker"));
var Oven = /** @class */ (function () {
    function Oven(OvenWorker) {
        this.ExecutionTime = 10000;
        this.servingChef = new serving_1.default([new worker_1.default(), new worker_1.default()]);
        this.QueueOrders = [];
        this.OvenWorker = OvenWorker;
        this.ListenToEvents();
    }
    Oven.prototype.ListenToEvents = function () {
        var _this = this;
        console.log("gooo3");
        setInterval(function () {
            if (_this.QueueOrders.length) {
                if (_this.OvenWorker.isAvailble && _this.OvenWorker.Order == undefined) {
                    _this.OvenWorker.isAvailble = false;
                    var order = _this.QueueOrders.shift();
                    if (order) {
                        _this.MakeDought(order);
                    }
                }
            }
        }, 1000);
    };
    Oven.prototype.MakeDought = function (order) {
        var _this = this;
        setTimeout(function () {
            console.log(order);
            _this.servingChef.QueueOrders.push(order);
            _this.OvenWorker.isAvailble = true;
        }, this.ExecutionTime);
    };
    return Oven;
}());
exports.default = Oven;
