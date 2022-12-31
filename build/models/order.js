"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(id, topping, OrderLength) {
        this.StartDate = new Date();
        this.EndDate = new Date();
        this.Id = id;
        this.Topping = topping;
        this.OrderLength = OrderLength;
    }
    return Order;
}());
exports.default = Order;
