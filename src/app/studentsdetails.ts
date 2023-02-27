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
  available: boolean;
  count: number;


  constructor(name: { firstname?: string, lastname: string }, dateOfBirth: any = new Date(), education: string, certificate: string, adress: string, email: string, languageSkills: string, computerSkills: string, description: string, photo: string, available: boolean, count: number) { // 
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
    this.available = available;
    this.count = count;
  }
}

export let students = [
  new student({ firstname: "Thomas", lastname: "Netusil" }, "30.04.1967", "Volkschule", "FullStack WebDev", "Schloß Schönbrunn", "FullStackWebDev.at@gmail.com", "de, en, es", "ECDL Advanced", "the guy with the black Face Mask", "Snoopy_Peanuts.png", true, 0),
];