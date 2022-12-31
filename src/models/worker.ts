
import Order from './order'

export default class Worker {
    public isAvailble: boolean = true;
    public Order: Order[];
    constructor() {
        this.Order = []
    }
}