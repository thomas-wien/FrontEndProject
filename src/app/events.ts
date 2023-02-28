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
  new event("Change your career!", "05.03.2023&06.03.2023", "Meet us at Bestmesse Wieaner Stadthalle Vienna", "mese.png", 0, true, 0),
  new event("Basic HTML/CSS course", "11.04.2023&12.04.2023", "Small changes can change your life", "htmlkurs.png", 299, true, 0),
  new event("Basic Python Programming course", "17.04.2023", "Change your Job!", "python.png", 590, true, 0),
  new event("Backend Developer", "13.04.2023&27.04.2023", "Start new career with us", "backend.png", 2990, true, 0),
  new event("Party at Code Factory", "27.04.2023 Start: 17:00", "Meet and Drink", "wallstreet-580.webp", 0, true, 0),
  new event("Frontend Developer", "15.05.2023&06.07.2023", "Learn coding in 2 months", "frontend.png", 2990, true, 0)
];