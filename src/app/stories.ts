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
  new story({firstname: "Aleksandar", lastname: "Stefanovski"}, "I decided to start new carrer, and i start learn 'Full Stack Web Developer'. After my gratitude i find my Job of my Dreems. Im very Thankfully to CodeFactory!", "imgme.png", "aleks.png", true, 0),
  new story({ firstname:"Benjamin", lastname: "Jehl"}, "Ben's first job after graduating at CodeFactory was as Junior Software Engineer. He now works as Software Engineer at the Bank OZK Innovations Labs. He also started the Vue.js Tampa Bay meetup group to share his love of technology with the community.", "benjamin.png", "benjamin2.png", true, 0),
  new story({firstname: "Anastasia", lastname:"Malissovas"},"'Since graduating, Anastasia has been working as a Software Engineer at Spectrio and is constantly learning and improving her skills.'So why does Anastasia love her new career?'The best part of coding is solving complex problems and building cool stuff that people use.'", "ana.png", "ana2.png", true, 0),
  new story({firstname: "Amanda", lastname:"Leaders"}, "Amanda was working part-time at a bookstore (which was amazing) while working full time in a lab (which was not so amazing) and decided to change careers after working on coding tutorials online. When going from an empty screen to a working game was the best part of her week, Amanda realized taking the leap was the right choice. Luckily, she found the immersive coding program at CodeFactory which was the perfect fit. Amanda is excited about the prospect of getting into the local tech community. She's also passionate about building on what she's learned at CodeFactory through her new job as a full-stack developer at Proforma.", "aman.png", "amand.png", true, 0),
  new story({firstname: "Christa", lastname:"Hegedus"}, "Post code school, Christa gets to enjoy working for Cigna as a Software Engineer and Full Stack Developer. Her job focuses on React/Redux and Java/SQL on the back-end. Her favorite thing about being a developer is having the ability to create beauty from the keyboard.", "christine.png", "chris.png", true, 0)
];