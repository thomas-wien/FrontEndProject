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
  visible: boolean;
  count: number;


  constructor(name: { firstname?: string, lastname: string }, dateOfBirth: any = new Date(), education: string, certificate: string, adress: string, email: string, languageSkills: string, computerSkills: string, description: string, photo: string, visible: boolean, count: number) { // 
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
    this.visible = visible;
    this.count = count;
  }
}

export let students = [
  new student({ firstname: "Thomas", lastname: "Netusil" }, "30.04.1967", "Volkschule", "FullStack WebDev", "Schloß Schönbrunn", "FullStackWebDev.at@gmail.com", "de, en, es", "ECDL Advanced", "the guy with the black Face Mask", "Snoopy_Peanuts.png", true, 0),
  new student({ firstname: "Aleksandar", lastname: "Stefanovski" }, "12.08.1985", "Hochschule", "FullStack Developer", "Straßgschwandtnerstraße", "addastefanovski@gmail.com", "en, de, mk, srb, bg, hr,es", "ECDL Advanced", "The guy with Kilimanjaro Backpack", "imgme.png", true, 0),
];