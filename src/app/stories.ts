//Success Stories from Students 
export class story {
  name: { firstname?: string, lastname: string };
  story: string;
  photo: string;
  image: string;
  visible: boolean;
  count: number;


  constructor(name: { firstname?: string, lastname: string }, story: string, photo: string, image: string, visible: boolean, count: number) { // 
    this.name = name;
    this.story = story;
    this.photo = "./assets/pics/students/" + photo; // 
    this.image = "./assets/pics/stories/" + image;
    this.visible = visible;
    this.count = count;
  }
}

export let stories = [
  new story({ firstname: "Thomas", lastname: "Netusil" }, "After my fist Job Interview and my Letter of recomendation from CodeFactory I got the Job as a Senior FullStack WebDeveloper", "Snoopy_Peanuts.png", "thomasN.jpg", true, 0),
];