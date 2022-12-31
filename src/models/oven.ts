
import Order from './order'
import Serving from './serving';
import Worker from './worker';


export default class Oven {
    public OvenWorker: Worker;
    public ExecutionTime: number = 10000;
    public QueueOrders: Order[];
    public servingChef = new Serving([new Worker(), new Worker()])


    constructor(OvenWorker: Worker) {
        this.QueueOrders = [];
        this.OvenWorker = OvenWorker;
        this.ListenToEvents();
    }

    ListenToEvents() {
        console.log("gooo3");
        setInterval(() => {
            if (this.QueueOrders.length) {
                if (this.OvenWorker.isAvailble && this.OvenWorker.Order == undefined) {
                    this.OvenWorker.isAvailble = false;
                    var order = this.QueueOrders.shift();
                    if(order){
                        this.MakeDought(order)
                    }
                }
            }
        }, 1000);
    }

    MakeDought(order: Order) {
        setTimeout(() => {
            console.log(order);
             this.servingChef.QueueOrders.push(order)
            this.OvenWorker.isAvailble = true;
        }, this.ExecutionTime);
    }
}