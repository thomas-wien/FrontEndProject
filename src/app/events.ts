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
    this.image = "./assets/pics/events/" + image; // 
    this.price = price;
    this.visible = visible;
    this.count = count;
  }
}

export let events = [
  new event("Change your career!", "02.03.2023 & 05.03.2023", "Meet us at Bestmesse Wiener Stadthalle Vienna to learn about exciting career opportunities in tech. Our experienced recruiters will be there to help you find your dream job.", "mese.png", 0, true, 0),
  // new event("Basic HTML/CSS course", "11.04.2023 & 12.04.2023", "Small changes can change your life. Join us for a comprehensive course on HTML and CSS and learn how to build stunning websites from scratch.", "htmlkurs.png", 299, true, 0),
  // new event("Basic Python Programming course", "17.04.2023", "Change your job and upskill with Python! Our course covers the basics of Python programming and provides a solid foundation for building more complex applications.", "python.png", 590, true, 0),
  // new event("Backend Developer", "13.04.2023 & 27.04.2023", "Start your new career as a Backend Developer with us! Our course provides hands-on training in popular backend technologies and frameworks, including Node.js, Express, and MongoDB.", "backend.png", 2990, true, 0),
  new event("Party at Code Factory", "27.04.2023 Start: 5pm", "Join us for a night of celebration at Code Factory! Network with fellow tech enthusiasts, enjoy some drinks and music, and have a great time.", "party.png", 0, true, 0),
  new event("Frontend Developer", "15.05.2023 & 06.07.2023", "Learn how to build amazing user interfaces and become a Frontend Developer with our comprehensive course! Our curriculum covers the latest frontend technologies and frameworks, including React, Redux, and Vue.js.", "frontend.png", 2990, true, 0),
  new event("Introduction to Data Science", "18.06.2023 & 25.06.2023", "Interested in Data Science? Join us for an introduction to the fundamentals of Data Science, including statistics, data analysis, and machine learning. Our experienced instructors will guide you through hands-on exercises and real-world examples.", "picid.png", 490, true, 0),
  new event("UX Design Workshop", "01.07.2023 & 08.07.2023", "Learn how to design user-centric digital products with our UX Design Workshop! Our course covers the latest UX design methodologies, including design thinking, prototyping, and user testing.", "ux.png", 790, true, 0),
  new event("Cybersecurity Essentials", "12.08.2023 & 19.08.2023", "Protect yourself and your business from cyber threats with our Cybersecurity Essentials course. Our expert instructors will teach you the fundamentals of cybersecurity, including threat detection and prevention, network security, and cryptography.", "cybersec.png", 890, true, 0),
  new event("Cloud Computing", "02.09.2023 & 09.09.2023", "Learn how to harness the power of the cloud with our Cloud Computing course. Our curriculum covers popular cloud platforms like AWS, Azure, and Google Cloud, as well as key concepts like scalability, elasticity, and virtualization.", "cloud.png", 1290, true, 0),
  new event("Full-Stack Web Development", "23.09.2023 & 30.09.2023", "Become a Full-Stack Web Developer with our intensive course! Our curriculum covers both frontend and backend development, as well as popular frameworks like React, Node.js, and Express.", "develop.png", 3990, true, 0),
  new event("Mobile App Development", "14.10.2023 & 21.10.2023", "Learn how to build native mobile apps for iOS and Android with our Mobile App Development course. Our curriculum covers popular app development frameworks like React Native and Flutter, as well as key concepts like UI design and app deployment.", "mobapp.png", 2490, true, 0),
  new event("Artificial Intelligence Fundamentals", "04.11.2023 & 11.11.2023", "Explore the exciting world of Artificial Intelligence with our fundamentals course. Our expert instructors will teach you the basics of AI, including machine learning, natural language processing, and computer vision.", "ai.png", 990, true, 0),
  new event("DevOps and Continuous Delivery", "25.11.2023 & 02.12.2023", "Learn how to streamline your software development lifecycle with our DevOps and Continuous Delivery course. Our curriculum covers popular DevOps tools and practices, including Docker, Kubernetes, and Jenkins.", "devops.png", 1890, true, 0),
  new event("Blockchain Fundamentals", "16.12.2023 & 23.12.2023", "Discover the potential of blockchain technology with our fundamentals course. Our expert instructors will teach you the basics of blockchain, including decentralized networks, smart contracts, and cryptocurrency.", "blockchain.png", 1090, true, 0),
  new event("Game Development with Unity", "06.01.2024 & 13.01.2024", "Learn how to build games with the popular Unity game engine. Our course covers the basics of game development, including physics, AI, and multiplayer networking.", "unity.png", 1790, true, 0),
  new event("Big Data Analytics", "27.01.2024 & 03.02.2024", "Learn how to extract insights from large datasets with our Big Data Analytics course. Our curriculum covers popular data processing frameworks like Hadoop and Spark, as well as data visualization tools like Tableau and Power BI.", "bigdata.png", 1490, true, 0)
];
