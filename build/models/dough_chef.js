"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var topping_chef_1 = __importDefault(require("./topping_chef"));
var worker_1 = __importDefault(require("./worker"));
var DoughChef = /** @class */ (function () {
    function DoughChef(queueOrders, DoughChefWorker) {
        this.ExecutionTime = 7000;
        this.toppingChef = new topping_chef_1.default([new worker_1.default(), new worker_1.default(), new worker_1.default()]);
        this.QueueOrders = queueOrders;
        this.DoughChefWorker = DoughChefWorker;
        this.ListenToEvents();
    }
    DoughChef.prototype.ListenToEvents = function () {
        var _this = this;
        console.log("gooo1");
        var clearIntervalIfOrdersQueueFinish = setInterval(function () {
            if (_this.QueueOrders.length) {
                for (var index = 0; index < _this.DoughChefWorker.length; index++) {
                    if (_this.DoughChefWorker[index].isAvailble && _this.DoughChefWorker[index].Order == undefined) {
                        _this.DoughChefWorker[index].isAvailble = false;
                        var order = _this.QueueOrders.shift();
                        if ((order === null || order === void 0 ? void 0 : order.Id) == 1) {
                            order ? order.OrderLength = _this.QueueOrders.length : 0;
                        }
                        if (order) {
                            order.StartDate = new Date();
                            _this.MakeDought(order, index);
                        }
                    }
                }
            }
            else {
                clearInterval(clearIntervalIfOrdersQueueFinish);
            }
        }, 1000);
    };
    DoughChef.prototype.MakeDought = function (order, DoughChefIndex) {
        var _this = this;
        setTimeout(function () {
            console.log(order, DoughChefIndex);
            _this.toppingChef.QueueOrders.push(order);
            _this.DoughChefWorker[DoughChefIndex].isAvailble = true;
        }, this.ExecutionTime);
    };
    return DoughChef;
}());
exports.default = DoughChef;
