export class carrer {
  name: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
  count: number;


  constructor(name: string, description: string, image: string, price: number, available: boolean, count: number) { // 
    this.name = name;
    this.description = description;
    this.image = "../../assets/images/" + image; // 
    this.price = price;
    this.available = available;
    this.count = count;
  }
}

export let carrers = [
  new carrer("dummy", "dummy", "dummy.jpg", 0, true, 0),
];