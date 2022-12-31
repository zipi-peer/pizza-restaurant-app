"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Start = void 0;
var dough_chef_1 = __importDefault(require("./models/dough_chef"));
var order_1 = __importDefault(require("./models/order"));
var worker_1 = __importDefault(require("./models/worker"));
function Start() {
    var doughChef = new dough_chef_1.default([new order_1.default(1, ["cheese", "olives"]), new order_1.default(2, ["cheese", "olives", "Onion"])], [new worker_1.default(), new worker_1.default()]);
    return;
}
exports.Start = Start;
Start();
