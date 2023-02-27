export class event {
  name: string;
  dateTime: any = new Date();
  description: string;
  image: string;
  price: number;
  visible: boolean;
  count: number;


  constructor(name: string, dateTime: any description: string, image: string, price: number, visible: boolean, count: number) { // 
    this.name = name;
    this.description = description;
    this.image = "../../assets/images/" + image; // 
    this.price = price;
    this.visible = visible;
    this.count = count;
  }
}

export let events = [
  new event("dummy", "dummy", "dummy.jpg", 0, true, 0),
];