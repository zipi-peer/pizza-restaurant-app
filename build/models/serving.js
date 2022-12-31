"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serving = /** @class */ (function () {
    function Serving(ServingWorker) {
        this.ExecutionTime = 5000;
        this.QueueOrders = [];
        this.ServingWorker = ServingWorker;
        this.CountOrders = 0;
        this.ListenToEvents();
    }
    Serving.prototype.ListenToEvents = function () {
        var _this = this;
        console.log("gooo4");
        var clearIntervalIfOrdersQueueFinish = setInterval(function () {
            if (_this.QueueOrders.length) {
                for (var index = 0; index < _this.ServingWorker.length; index++) {
                    if (_this.ServingWorker[index].isAvailble && _this.ServingWorker[index].Order == undefined) {
                        _this.ServingWorker[index].isAvailble = false;
                        var order = _this.QueueOrders.shift();
                        _this.CountOrders++;
                        if (order) {
                            if (order.Id == 1) {
                                _this.StartBacking = order.StartDate;
                                _this.OrdersLength = order.OrderLength;
                            }
                            _this.MakeDought(order, index);
                        }
                        if (_this.OrdersLength == _this.CountOrders) {
                            console.log("comeee");
                            clearInterval(clearIntervalIfOrdersQueueFinish);
                        }
                    }
                }
            }
        }, 1000);
    };
    Serving.prototype.MakeDought = function (order, ServingIndex) {
        var _this = this;
        setTimeout(function () {
            console.log(order, ServingIndex);
            _this.ServingWorker[ServingIndex].isAvailble = true;
            console.log("Order " + order.Id + "start in- " + (order === null || order === void 0 ? void 0 : order.StartDate) + "end in" + new Date());
            if (_this.OrdersLength == _this.CountOrders)
                console.log("Finish All Orders ,start in" + _this.StartBacking + "end in" + new Date());
        }, this.ExecutionTime);
    };
    return Serving;
}());
exports.default = Serving;
