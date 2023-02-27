export class carrer {
  carreerTitle: string;
  carreerType: string; // article, jobOffer, course //
  carreerImage: string;
  carreerContent: string;
  carreerInfo: string;
  carreerActive: boolean;

  constructor(title: string, type: string, image: string, content: string, info: string, active: boolean) { // 
    this.carreerTitle = title;
    this.carreerType = type;
    this.carreerImage = "../../assets/images/carreer/" + image; // 
    this.carreerContent = content;
    this.carreerInfo = info;
    this.carreerActive = active;
  }
}

export let carrers = [
  new carrer(
    "Title", 
    "Type", 
    "Image", 
    "Content", 
    "Info", 
    true),
  new carrer(
    "Title", 
    "Type", 
    "Image", 
    "Content", 
    "Info", 
    true),
  new carrer(
    "Title", 
    "Type", 
    "Image", 
    "Content", 
    "Info", 
    true),
  new carrer(
    "Title", 
    "Type", 
    "Image", 
    "Content", 
    "Info", 
    true),
  new carrer(
    "Title", 
    "Type", 
    "Image", 
    "Content", 
    "Info", 
    true),
];