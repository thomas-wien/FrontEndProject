export class carrer {
  carreerTitle: string;
  carreerType: string; // Article, Job, Course, Video //
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
    "Christoph and Darko", 
    "Video", 
    "ChristophAndDarko.png", 
    "You think you can't get into IT? Listen to what our Full Stack Web Developer Graduates Christoph and Darko have to say about that. YOU CAN DO IT.", 
    "https://www.linkedin.com/company/codefactory-vienna/videos/", 
    true),
  new carrer(
    "Junior Backend Developer:in - New Technologies", 
    "Job", 
    "strabag_mit_weissraum_wop_rgb_200mm_r12wop.companysquare.jpg", 
    "Wir bieten Ihnen die Möglichkeit, sich in neue Technologien einzuarbeiten und bis zum Schluss zu durchdenken, bis die ideale Lösung gefunden ist. Unser kollegiales, kompetentes Team von 100 Entwickler:innen freut sich auf Verstärkung. Für diese Position ist ein Jahresbruttobezug ab 36.232 EUR vorgesehen, darüber hinaus bieten wir eine marktkonforme Überzahlung abhängig von Qualifikation und Erfahrung.", 
    "https://www.karriere.at/jobs/junior-developer/wien#6634433", 
    true),
  new carrer(
    "Welcome to CodeFactory", 
    "Article", 
    "1674809539157.jfif", 
    "The second week of the Full Stack & Frontend course is almost over, and our students are already using HTML, CSS and Bootstrap to code and build their amazing websites. Very impressive! We can't wait to see their future achievements!", 
    "https://www.linkedin.com/feed/update/urn:li:activity:7024660355465240577/", 
    true),
  new carrer(
    "Fullstack Web Developer - Werde Junior Web Developer", 
    "Course", 
    "GER_Fullstack_Kurs.png", 
    "Der CodeFactory Fullstack Web-Developer Lehrgang bereitet dich auf deinen vielfältigen Einsatz als Junior Web-Developer vor. Du lernst von Backend über Frontend Anwendungen die gängigsten Programmiersprachen und Frameworks kennen und einsetzen, von HTML, CSS, JavaScript und seinem Angular-Framework bis hin zu Datenbanken, PHP und Symfony. Nebenbei lernst du auch noch wichtige Skills wie Testing und Projektmanagement. Als Fullstack Web-Developer verfügst du über umfassende Kenntnisse im Bereich Softwareentwicklung und beherrschst aktuell relevante Programmiersprachen. Dadurch kannst du in der Web- aber auch in der Softwareentwicklung tätig sein. Als Generalist kannst du mit deinen Coding-Fähigkeiten fast jede Aufgabe lösen und arbeitest oft eng mit Projektleitungen zusammen, indem du dich um Anforderungsmanagement, Software- und Test-Planung sowie um Programmiertätigkeiten kümmerst.", 
    "https://codefactory.wien/de/full-stack-web-developer-de/", 
    true),
  new carrer(
    "Job @ SIEMENS", 
    "Job", 
    "em-community.jpg", 
    "Werden Sie jetzt Teil des #TeamSiemens! <br><br>Entdecken Sie spannende Jobs in einem internationalen Hitech-Unternehmen und helfen Sie uns, Lösungen zu entwickeln, mit denen wir uns den Herausforderungen der Zukunft stellen.", 
    "Got connections on the inside? No? Forget it!", 
    true),
];