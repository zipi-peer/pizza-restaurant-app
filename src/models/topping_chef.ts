
import Order from './order'
import Oven from './oven';
import Worker from './worker';

export default class ToppingChef {
  public ToppingChefWorker: Worker[];
  public QueueOrders: Order[];
  public oven = new Oven(new Worker())

  constructor(ToppingChefWorker: Worker[]) {
    this.QueueOrders = [];
    this.ToppingChefWorker = ToppingChefWorker;
    this.ListenToEvents()
  }

  ListenToEvents() {
    console.log("gooo2");

    var clearIntervalIfOrdersQueueFinish = setInterval(() => {
      if (this.QueueOrders.length) {
        for (let index = 0; index < this.ToppingChefWorker.length; index++) {
          if (this.ToppingChefWorker[index].isAvailble && this.ToppingChefWorker[index].Order == undefined) {
            this.ToppingChefWorker[index].isAvailble = false;
            var order = this.QueueOrders.shift();
            if (order) {
              this.MakeTopping(order, index)
            }
          }
        }
      }
    }, 1000);
  }

  MakeTopping(order: Order, ToppingChefIndex: number) {
    setTimeout(() => {
      console.log(order, ToppingChefIndex);
      this.oven.QueueOrders.push(order)
      this.ToppingChefWorker[ToppingChefIndex ? ToppingChefIndex : 0].isAvailble = true;
    },   (order.Topping.length / 2 == 0 ? (order.Topping.length / 2) * 4000 : ((order.Topping.length / 2) * 4000) + 2000) );
  }
}