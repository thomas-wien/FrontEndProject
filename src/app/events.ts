export class event {
  name: string;
  dateTime: any = new Date();
  description: string;
  image: string;
  price: number;
  visible: boolean;
  count: number;


  constructor(name: string, dateTime: any = new Date(), description: string, image: string, price: number, visible: boolean, count: number) { // 
    this.name = name;
    this.dateTime = dateTime;
    this.description = description;
    this.image = "../../assets/pics/events/" + image; // 
    this.price = price;
    this.visible = visible;
    this.count = count;
  }
}

export let events = [
  new event("Party at Code Factory", "2023-04-27T17:00", "Meet and Drink", "wallstreet-580.webp", 0, true, 0),
];