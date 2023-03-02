export interface IStudent {
  name: { firstname?: string, lastname: string };
  dateOfBirth: Date;
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
}
