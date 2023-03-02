// the studentdetails are used for the directory and the students page
export class student {
  name: { firstname?: string, lastname: string };
  dateOfBirth: any = new Date();
  education: string;
  certificate: string;
  description: string;
  adress: string;
  email: string;
  languageSkills: string;
  computerSkills: string;
  photo: string;
  projectphoto: string;
  available: boolean;
  linkToProject: string;
  count: number;


  constructor(name: { firstname?: string, lastname: string }, dateOfBirth: any = new Date(), education: string, certificate: string, adress: string, email: string, languageSkills: string, computerSkills: string, description: string, photo: string, projectphoto: string, available: boolean, linkToProject: string, count: number) { // 
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.education = education;
    this.certificate = certificate;
    this.adress = adress;
    this.email = email;
    this.languageSkills = languageSkills,
      this.computerSkills = computerSkills,
      this.description = description;
    this.photo = "./assets/pics/students/" + photo; // 
    this.projectphoto = "./assets/pics/projects/" + projectphoto;
    this.available = available;
    this.linkToProject = linkToProject;
    this.count = count;
  }
}

export let students = [
  new student({ firstname: "Thomas", lastname: "Netusil" }, "30.04.1967", "finance and accounting assistant", "ISO 17024 certified Trainer, Diplom Coach, SAP, ECDL Core and Advenced Test Master, Frontend WebDev", "Vienna", "FullStackWebDev.at@gmail.com", "de, en, es", "ECDL Advanced, ", "the guy with the black Face Mask", "thomas.jpg", "thomas.png", true, "http://netusil.codefactory.live/", 0),
  new student({ firstname: "Marko", lastname: "Schoretits" }, "18.02.1974", "Magisterium Rechtswissenschaften Uni Wien", "FullStack WebDev", "Leopoldau City", "marko@schoretits.com", "hr, de, es, en, fr, it, pl", "1st level support", "\"... let me tell you a story ...\"", "MARKO SCHORETITS-Avatar.png", "", true, "http://netusil.codefactory.live/", 1),
  new student({ firstname: "Aleksandar", lastname: "Stefanovski" }, "12.08.1985", "Hochschule", "FullStack Developer", "Straßgschwandtnerstraße", "addastefanovski@gmail.com", "en, de, mk, srb, bg, hr,es", "ECDL Advanced", "The guy with Kilimanjaro Backpack", "imgme.png", "", true, "http://netusil.codefactory.live/", 2),
  new student({ firstname: "Viktor", lastname: "Beckes" }, "17.06.1997", "Hochshule", "FullStack Developer", "Buchengasse", "viktorb@gmail.com", "en, de, srb, mkd", "ECDL Advanced", "The guy with the crazy Cap", "vikt.jpg", "", true, "http://netusil.codefactory.live/", 3),
  new student({ firstname: "Eric", lastname: "de Avila" }, "14.05.1991", "Fachhochschule Wiener Neustadt", "Wöllersdorf", "kirchengasse 2", "ericmenavi@icloud.com", "es,en, de, pt", "CSPO Certified Scrum Product Owner", " ", "eric.jpg", "", true, "http://netusil.codefactory.live/", 4),
  new student({ firstname: "Dragan", lastname: "Stoyanovski" }, "27.05.2000", "Hochschule", "FullStack Developer", "Kendegasse", "draganstojanovski654@gmail.com", "en, de, mk, srb, bg, hr,es", "ECDL Advanced", "The guy from Macedonia", "dragan.png", "", true, "http://netusil.codefactory.live/", 5),
];