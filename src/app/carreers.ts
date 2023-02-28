export class carreer {
  title: string;
  type: string; // Article, Job, Course, Video //
  image: string;
  content: string;
  info: string;
  active: boolean;

  constructor(title: string, type: string, image: string, content: string, info: string, active: boolean) { // 
    this.title = title;
    this.type = type;
    this.image = "./assets/pics/carreer/" + image; // 
    this.content = content;
    this.info = info;
    this.active = active;
  }
}

export let carreers = [
  new carreer(
  "Christoph and Darko",
  "Video",
  "ChristophAndDarko.png",
  "Are you feeling lost in your career? Watch our video featuring Christoph and Darko, our Full Stack Web Developer graduates, and get inspired to pursue your dreams. Because let's be honest, life is too short to be stuck in a job you hate!",
  "https://www.linkedin.com/company/codefactory-vienna/videos/",
  true),
  new carreer(
  "Junior Backend Developer:in - New Technologies",
  "Job",
  "strabag_mit_weissraum_wop_rgb_200mm_r12wop.companysquare.jpg",
  "Are you a tech enthusiast? Do you like to work on cutting-edge projects? Join our team of 100 developers and let's create the future together. Plus, you'll get a salary that will make your mom proud. Trust us, she'll finally stop asking when you'll get a 'real job'.",
  "https://www.karriere.at/jobs/junior-developer/wien#6634433",
  true),
  new carreer(
  "Welcome to CodeFactory",
  "Article",
  "1674809539157.jfif",
  "Our students are already building amazing websites after just two weeks of our Full Stack & Frontend course. So if you think you can't learn to code, think again! We'll help you discover your inner nerd and become a coding wizard. Just don't forget to take breaks to stretch and drink water, we don't want any dehydrated developers on our hands.",
  "https://www.linkedin.com/feed/update/urn:li:activity:7024660355465240577/",
  true),
  new carreer(
  "Fullstack Web Developer - Werde Junior Web Developer",
  "Course",
  "GER_Fullstack_Kurs.png",
  "Want to become a Full Stack Web Developer and earn some serious cash? Join our Fullstack Web Developer course and learn everything from HTML to PHP to project management. You'll be so knowledgeable, your friends will start calling you 'The Code Whisperer'. And who knows, maybe one day you'll build the next big thing and become the next Elon Musk. We believe in you!",
  "https://codefactory.wien/de/full-stack-web-developer-de/",
  true),
  new carreer(
  "Job @ SIEMENS",
  "Job",
  "em-community.jpg",
  "Do you want to work for a high-tech company like Siemens? Sorry, we can't help you there. But we can offer you some encouragement and tell you that rejection is just redirection. Who knows, maybe you'll end up building a better version of Siemens one day. Or at least a cooler one. Keep dreaming big!",
  "Got connections on the inside? No? Forget it!",
  true),
  new carreer(
  "Professional Cat Wrangler",
  "Job",
  "cat-wrangler.jpg",
  "Do you have a passion for cats? Are you able to herd them like a pro? We're looking for a professional cat wrangler to help us with our feline coding team. You'll be responsible for keeping our cats happy and entertained while we build amazing websites. Bonus points if you can teach them how to code (we've heard they're great at debugging). Apply now and join our team of meow-nificent developers!",
  "https://www.linkedin.com/jobs/view/2687530242/",
  true),
  new carreer("UX/UI Designer - Learn Design Thinking",
  "Course",
  "design_thinking.jpg",
  "Are you interested in design and want to learn more about user experience (UX) and user interface (UI) design? Join our UX/UI Designer course and learn about design thinking, wireframing, prototyping, and more. You'll be able to create beautiful and functional designs that will impress your friends and colleagues. Plus, you'll get to work on real-world projects and build a portfolio that will help you land your dream job.",
  "https://codefactory.wien/de/ux-ui-designer-de/",
  true)
  ];