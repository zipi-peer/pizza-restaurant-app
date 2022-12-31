

export default class Order {
    public Id: number;
    public StartDate: Date = new Date();
    public EndDate: Date = new Date()
    public Topping: string[];
    public OrderLength?: number
    constructor(id: number, topping: string[], OrderLength?: number) {
        this.Id = id;
        this.Topping = topping;
        this.OrderLength = OrderLength;
    }
}