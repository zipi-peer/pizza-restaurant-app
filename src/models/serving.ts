
import Order from './order'
import Worker from './worker';

export default class Serving {
    public ServingWorker: Worker[];
    public ExecutionTime: number = 5000;
    public QueueOrders: Order[];
    public StartBacking?: Date;
    public CountOrders: number;
    public OrdersLength?: number;
    constructor(ServingWorker: Worker[]) {
        this.QueueOrders = [];
        this.ServingWorker = ServingWorker;
        this.CountOrders = 0;
        this.ListenToEvents();
    }

    ListenToEvents() {
        console.log("gooo4");
        var clearIntervalIfOrdersQueueFinish = setInterval(() => {
            if (this.QueueOrders.length) {
                for (let index = 0; index < this.ServingWorker.length; index++) {
                    if (this.ServingWorker[index].isAvailble && this.ServingWorker[index].Order == undefined) {
                        this.ServingWorker[index].isAvailble = false;
                        var order = this.QueueOrders.shift();
                        this.CountOrders++;
                        if (order) {
                            if (order.Id == 1) {
                                this.StartBacking = order.StartDate;
                                this.OrdersLength = order.OrderLength;
                            }
                            this.MakeDought(order, index)
                        }
                        if (this.OrdersLength == this.CountOrders) {                            
                            clearInterval(clearIntervalIfOrdersQueueFinish)
                        }
                    }
                }
            }

        }, 1000);
    }

    MakeDought(order: Order, ServingIndex: number) {
        setTimeout(() => {
            console.log(order, ServingIndex);
            this.ServingWorker[ServingIndex].isAvailble = true;
            console.log("Order " + order.Id + "start in- " + order?.StartDate + "end in" + new Date());
            if (this.OrdersLength == this.CountOrders)
                console.log("Finish All Orders ,start in" + this.StartBacking + "end in" + new Date());
        }, this.ExecutionTime);
    }
}