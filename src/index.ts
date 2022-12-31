import DoughChef from "./models/dough_chef";
import Order from "./models/order";
import Worker from "./models/worker";

export function Start() {
    console.log("hereeeee");
    
    var doughChef = new DoughChef([new Order(1, ["zit", "batzal"]), new Order(2, ["ss", "gg"])], [new Worker(), new Worker()])
    return;
}

Start()
