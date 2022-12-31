
import Order from './order'
import ToppingChef from './topping_chef';
import Worker from './worker';

export default class DoughChef {
  public DoughChefWorker: Worker[];
  public ExecutionTime: number = 7000;
  public QueueOrders: Order[];
  public static startBacking?: number;
  public toppingChef = new ToppingChef([new Worker(), new Worker(), new Worker()])

  constructor(queueOrders: Order[], DoughChefWorker: Worker[]) {
    this.QueueOrders = queueOrders;
    this.DoughChefWorker = DoughChefWorker;
    this.ListenToEvents()
  }

  ListenToEvents() {
    console.log("gooo1");
    
    let clearIntervalIfOrdersQueueFinish = setInterval(() => {
      if (this.QueueOrders.length) {
        for (let index = 0; index < this.DoughChefWorker.length; index++) {
          if (this.DoughChefWorker[index].isAvailble && this.DoughChefWorker[index].Order == undefined) {
            this.DoughChefWorker[index].isAvailble = false;
            let order = this.QueueOrders.shift();
            if (order?.Id == 1) {
              order ? order.OrderLength = this.QueueOrders.length : 0;
            }
            if (order) {
              order.StartDate = new Date();
              this.MakeDought(order, index)
            }

          }
        }
      }
      else {
        clearInterval(clearIntervalIfOrdersQueueFinish)
      }
    }, 1000);
  }

  MakeDought(order: Order, DoughChefIndex: number) {
    setTimeout(() => {
      console.log(order, DoughChefIndex);
      this.toppingChef.QueueOrders.push(order)
      this.DoughChefWorker[DoughChefIndex].isAvailble = true;
    }, this.ExecutionTime);
  }
}