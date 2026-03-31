// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { trigger, style, animate, transition } from '@angular/animations';

// interface Message {
//   id: string;
//   sender: 'user' | 'bot';
//   text: string;
//   timestamp: Date;
//   status: 'sending' | 'sent' | 'error';
// }

// @Component({
//   selector: 'app-chatbot',
//   standalone: false,
//   templateUrl: './chatbot.component.html',
//   styleUrl: './chatbot.component.css',
//   animations: [
//     trigger('slideInOut', [
//       transition(':enter', [
//         style({ transform: 'translateY(100%)' }),
//         animate('200ms ease-out', style({ transform: 'translateY(0)' }))
//       ]),
//       transition(':leave', [
//         animate('200ms ease-in', style({ transform: 'translateY(100%)' }))
//       ])
//     ]),
//     trigger('fadeIn', [
//       transition(':enter', [
//         style({ opacity: 0 }),
//         animate('200ms ease-out', style({ opacity: 1 }))
//       ])
//     ])
//   ]
// })
// export class ChatbotComponent implements OnInit {
//   isChatOpen = false;
//   messages: Message[] = [];
//   userInput = '';
//   isLoading = false;
//   private readonly apiKey = 'AIzaSyBn71DJ7QBw7Wr1cq3zEtPjrKzEJSMDTYk';
//   unreadCount = 0;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.addMessage({
//       id: this.generateId(),
//       sender: 'bot',
//       text: 'Hi! How can I help you today?',
//       timestamp: new Date(),
//       status: 'sent'
//     });
//   }

//   toggleChat() {
//     this.isChatOpen = !this.isChatOpen;
//     if (this.isChatOpen) {
//       this.unreadCount = 0;
//     }
//   }

//   async sendMessage() {
//     if (!this.userInput.trim() || this.isLoading) return;

//     const userMessage: Message = {
//       id: this.generateId(),
//       sender: 'user',
//       text: this.userInput,
//       timestamp: new Date(),
//       status: 'sending'
//     };

//     this.addMessage(userMessage);
//     const userText = this.userInput;
//     this.userInput = '';
//     this.isLoading = true;

//     try {
//       const requestBody = {
//         contents: [{ parts: [{ text: userText }] }]
//       };

//       const response: any = await this.http
//         .post(
//           `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${this.apiKey}`,
//           requestBody,
//           { headers: { 'Content-Type': 'application/json' } }
//         )
//         .toPromise();

//       userMessage.status = 'sent';
      
//       const botReply = response.candidates[0].content.parts[0].text;
//       this.addMessage({
//         id: this.generateId(),
//         sender: 'bot',
//         text: botReply,
//         timestamp: new Date(),
//         status: 'sent'
//       });

//     } catch (error) {
//       console.error('Error:', error);
//       userMessage.status = 'error';
//       this.addMessage({
//         id: this.generateId(),
//         sender: 'bot',
//         text: 'I apologize, but I encountered an error. Check Your Internet connection or Please try again Letter.',
//         timestamp: new Date(),
//         status: 'error'
//       });
//     }

//     this.isLoading = false;
//   }

//   private addMessage(message: Message) {
//     this.messages.push(message);
//     if (!this.isChatOpen) {
//       this.unreadCount++;
//     }
//   }

//   private generateId(): string {
//     return Math.random().toString(36).substr(2, 9);
//   }

//   formatTimestamp(date: Date): string {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'error';
  isRichContent?: boolean;
}

interface ProfileInfo {
  name: string;
  dob: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    technologies: string[];
    achievements: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    university?: string;
    year: string;
    performance?: string;
    stream?: string;
    highlights: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    highlights: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
  languages: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    facebook: string;
    instagram: string;
    location: string;
  };
}

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('200ms ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ChatbotComponent implements OnInit {
  isChatOpen = false;
  messages: Message[] = [];
  userInput = '';
  isLoading = false;
  unreadCount = 0;
  conversationContext: string[] = [];
  suggestedQuestions: string[] = [];

  // Your personal profile information
  private profileInfo: ProfileInfo = {
    name: "Sumit Bhagtrao Jadhav",
    dob: "2001-05-09",
    summary: "A passionate Full Stack Developer with a relentless drive for technological innovation. My journey is defined by creating scalable, efficient, and user-centric solutions that push the boundaries of web application development.",
    // Updated experience section with current role
experience: [
  {
    title: "Web Developer",
    company: "Automonk Technologies Pvt. Ltd.",
    duration: "April 2025 - Present",
    location: "Pune, Bhumkar Chowk, Maharashtra, India",
    description: "Working as an Angular developer, focusing on building responsive and dynamic web applications. Responsible for implementing component-based architecture, state management solutions, and creating user-friendly interfaces using Angular Material. Collaborating with cross-functional teams to deliver high-quality web solutions while following best practices for performance optimization and code maintainability.",
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "RxJS", "Angular Material", "RESTful APIs", "Git"],
    achievements: [
      "Developing responsive user interfaces using Angular framework",
      "Implementing state management solutions for complex application needs",
      "Collaborating with design and backend teams for seamless integration",
      "Following best practices for performance optimization",
      "Contributing to code reviews and technical documentation"
    ]
  },
],
    skills: [
      {
        category: "Backend",
        items: ["Core Java", "Advanced Java", "Spring Boot", "MySQL", "PostgreSQL"]
      },
      {
        category: "Frontend",
        items: ["Angular", "TypeScript", "HTML5", "CSS3", "Ionic"]
      },
      {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "CI/CD", "Jenkins", "Azure", "Hostinger"]
      },
      {
        category: "Methodologies",
        items: ["Agile", "Scrum", "TDD", "Microservices"]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "MGM's College of CS & IT, Nanded",
        university: "Swami Ramanand Tirth Marathwada University",
        year: "2022",
        performance: "6.9 CGPA",
        stream: "Computer Science",
        highlights: [
          "Full-stack Development Specialization",
          "Academic Projects in Web Technologies",
          "Comprehensive Software Engineering Curriculum"
        ]
      },
      {
        degree: "Higher Secondary Education (12th Standard)",
        institution: "Saraswati College, Parbhani",
        year: "2019",
        performance: "60%",
        stream: "Science",
        highlights: [
          "Strong Foundation in Mathematics",
          "Advanced Physics and Computer Science",
          "Participated in State-level Science Exhibitions"
        ]
      },
      {
        degree: "Secondary Education (10th Standard)",
        institution: "Basweshwar High School, Kamtha, Nanded",
        year: "2017",
        performance: "Successfully Completed",
        highlights: [
          "Consistent Academic Performance",
          "Active Participation in School Activities",
          "Strong Academic Foundation"
        ]
      }
    ],
    projects: [
      {
        name: "Service Booking Mobile App",
        description: "Developed a comprehensive mobile application using Ionic and Angular for seamless service booking, enabling users to schedule and manage various service appointments.",
        technologies: ["Ionic", "Angular", "TypeScript", "RESTful APIs"],
        highlights: [
          "Implemented real-time appointment tracking",
          "Integrated secure payment gateways",
          "Designed responsive UI for optimal mobile experience",
          "Created notification system for appointment reminders"
        ]
      },
      {
        name: "Abacus Learning Platform",
        description: "Built an educational platform focused on Abacus learning with a robust admin panel for content and user management.",
        technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
        highlights: [
          "Designed comprehensive admin dashboard for content management",
          "Implemented interactive learning modules for students",
          "Created progress tracking and reporting features",
          "Integrated user authentication and authorization system"
        ]
      }
    ],
    certifications: [
      {
        name: "Java Full-stack Developer",
        issuer: "Hefshine Software",
        year: "2023"
      }
    ],
    languages: ["English (Fluent)", "Hindi (Native)", "Marathi (Native)"],
    contact: {
      email: "sumitjadhav0677@gmail.com",
      linkedin: "https://www.linkedin.com/in/sumitjadhav1/",
      github: "https://github.com/sumitjadhav112",
      facebook: "https://www.facebook.com/profile.php?id=100015492045036",
      instagram: "https://www.instagram.com/sumitjadhav.93/",
      location: "Pune, Maharashtra"
    }
  };

  // Knowledge base for technical questions
  private knowledgeBase = {
    java: {
      description: "Java is my primary programming language. I have expertise in both Core and Advanced Java concepts.",
      expertise: [
        "Object-Oriented Programming principles",
        "Java 8+ features (Streams, Lambda expressions, Optional)",
        "Multithreading and concurrency",
        "Design patterns implementation",
        "JVM optimization",
        "Memory management"
      ],
      projects: "I've used Java extensively in my projects, particularly for backend development in the Abacus Learning Platform."
    },
    angular: {
      description: "Angular is my primary frontend framework for building dynamic web applications.",
      expertise: [
        "Component-based architecture",
        "State management",
        "Lazy loading for performance optimization",
        "Angular Material for UI components",
        "RxJS for reactive programming",
        "Unit testing"
      ],
      projects: "I've developed responsive, user-friendly interfaces using Angular for the Service Booking App and Abacus Learning Platform."
    },
    ionic: {
      description: "I have hands-on experience with Ionic for cross-platform mobile app development.",
      expertise: [
        "Cross-platform mobile development",
        "Native device functionality integration",
        "UI component customization",
        "Hybrid app optimization",
        "Progressive Web App (PWA) capabilities"
      ],
      projects: "I developed the Service Booking Mobile App using Ionic framework, enabling seamless user experience across iOS and Android platforms."
    },
    aws: {
      description: "I have experience with AWS cloud services for deploying and managing applications.",
      expertise: [
        "EC2 for hosting applications",
        "S3 for storage",
        "RDS for databases",
        "Lambda for serverless functions",
        "CloudFormation for infrastructure as code",
        "API Gateway for API management"
      ],
      projects: "I've deployed applications on AWS and implemented cloud-based solutions for scalability and reliability."
    }
  };

  // Common questions and answers
  private commonQuestions = {
    "What are your strengths?": "My key strengths include problem-solving, adaptability, and continuous learning. I excel at understanding complex requirements and translating them into efficient technical solutions. I'm also a strong team player who communicates effectively with both technical and non-technical stakeholders.",
    
    "What is your approach to problem-solving?": "I approach problems methodically, starting with a thorough understanding of requirements. I break down complex problems into manageable parts, research potential solutions, evaluate trade-offs, and implement the best approach. I value clean, maintainable code and always consider performance implications.",
    
    "How do you stay updated with technology?": "I regularly follow tech blogs, participate in online communities, attend webinars, and work on side projects to experiment with new technologies. I dedicate time each week to learning and improving my skills through online courses and hands-on practice.",
    
    "What is your development workflow?": "My typical workflow includes understanding requirements, planning the architecture, implementing features with TDD approach, conducting code reviews, and ensuring thorough testing. I use Git for version control with a branching strategy aligned with agile development practices.",
    
    "How do you handle tight deadlines?": "I prioritize tasks based on business value and technical dependencies, communicate proactively about progress and challenges, and focus on delivering core functionality first. When necessary, I work extra hours while maintaining code quality and documentation.",
    
    "How do you approach learning new technologies?": "I start with the official documentation to understand core concepts, follow tutorials for hands-on experience, build small projects to apply what I've learned, and gradually tackle more complex implementations. I also leverage community resources and open-source projects."
  };

  constructor() {}

  ngOnInit() {
    this.addMessage({
      id: this.generateId(),
      sender: 'bot',
      text: `Hi! I'm ${this.profileInfo.name}'s AI assistant. I can tell you about their experience, skills, projects, and more. How can I help you today?`,
      timestamp: new Date(),
      status: 'sent'
    });
    
    this.generateSuggestedQuestions();
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      this.unreadCount = 0;
    }
  }

  async sendMessage() {
    if (!this.userInput.trim() || this.isLoading) return;

    const userMessage: Message = {
      id: this.generateId(),
      sender: 'user',
      text: this.userInput,
      timestamp: new Date(),
      status: 'sending'
    };

    this.addMessage(userMessage);
    const userText = this.userInput;
    this.userInput = '';
    this.isLoading = true;
    
    // Track conversation context
    this.conversationContext.push(userText);
    if (this.conversationContext.length > 5) {
      this.conversationContext.shift();
    }

    // Simulate network delay
    setTimeout(() => {
      userMessage.status = 'sent';
      
      const botReply = this.generateResponse(userText);
      this.addMessage({
        id: this.generateId(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date(),
        status: 'sent',
        isRichContent: botReply.includes("<div") || botReply.includes("<table")
      });
      
      this.generateSuggestedQuestions();
      this.isLoading = false;
    }, 800);
  }

  private generateResponse(userInput: string): string {
    const input = userInput.toLowerCase();
    
    // Check if the query matches any common questions
    for (const [question, answer] of Object.entries(this.commonQuestions)) {
      if (this.calculateSimilarity(input, question.toLowerCase()) > 0.7) {
        return answer;
      }
    }
    
    // Check for detailed knowledge base queries
    for (const [topic, details] of Object.entries(this.knowledgeBase)) {
      if (input.includes(topic)) {
        return this.generateTechnicalResponse(topic, details);
      }
    }
    
    // Check for general inquiries about the person
    if (this.includesAny(input, ['who are you', 'about you', 'tell me about', 'introduction', 'yourself'])) {
      return this.generateProfileSummary();
    }
    
    // Check for portfolio inquiries
    if (this.includesAny(input, ['portfolio', 'showcase', 'work samples', 'projects'])) {
      return this.generateProjectsResponse();
    }
    
    // Check for resume inquiries
    if (this.includesAny(input, ['resume', 'cv', 'curriculum vitae'])) {
      return `You can download ${this.profileInfo.name}'s complete resume from their LinkedIn profile: ${this.profileInfo.contact.linkedin}`;
    }
    
    // Check for name inquiries
    if (this.includesAny(input, ['name', 'who'])) {
      return `My name is ${this.profileInfo.name}. I'm a ${this.profileInfo.experience[0].title} with ${this.profileInfo.experience[0].duration} of experience.`;
    }
    
    // Check for experience inquiries
    if (this.includesAny(input, ['experience', 'work', 'job', 'career'])) {
      return this.generateExperienceResponse();
    }
    
    // Check for skills inquiries
    if (this.includesAny(input, ['skill', 'technology', 'tech stack', 'programming'])) {
      return this.generateSkillsResponse();
    }
    
    // Check for education inquiries
    if (this.includesAny(input, ['education', 'degree', 'university', 'college', 'study'])) {
      return this.generateEducationResponse();
    }
    
    // Check for certification inquiries
    if (this.includesAny(input, ['certification', 'certificate', 'qualified'])) {
      return this.generateCertificationsResponse();
    }
    
    // Check for contact inquiries
    if (this.includesAny(input, ['contact', 'email', 'phone', 'reach'])) {
      return this.generateContactResponse();
    }
    
    // Check for location inquiries
    if (this.includesAny(input, ['where', 'location', 'city'])) {
      return `${this.profileInfo.name} is currently based in ${this.profileInfo.contact.location}.`;
    }
    
    // Check for salary or compensation inquiries
    if (this.includesAny(input, ['salary', 'compensation', 'pay', 'earning'])) {
      return `${this.profileInfo.name} prefers to discuss compensation details directly during the interview process based on the specific role and responsibilities.`;
    }
    
    // Check for availability inquiries
    if (this.includesAny(input, ['available', 'when can you start', 'notice period', 'start date'])) {
      return `${this.profileInfo.name} is currently available for new opportunities and can typically start within 2-4 weeks after accepting an offer.`;
    }
    
    // Check for personality inquiries
    if (this.includesAny(input, ['personality', 'work style', 'communication', 'team player'])) {
      return `${this.profileInfo.name} is a collaborative team player who values clear communication and creative problem-solving. They thrive in environments that encourage innovation and continuous learning, and they're known for their adaptability and positive attitude when facing challenges.`;
    }
    
    // Check for language inquiries
    if (this.includesAny(input, ['language', 'speak', 'communication'])) {
      return `${this.profileInfo.name} is fluent in ${this.profileInfo.languages.join(' and ')}.`;
    }
    
    // Default response with suggestions
    return `I'm ${this.profileInfo.name}'s AI assistant, and I'm here to help answer your questions. You can ask me about:
    
    • Professional experience
    • Technical skills
    • Education and certifications
    • Projects and portfolio
    • Work approach and methodology
    • Availability and contact information
    
    What would you like to know more about?`;
  }
  
  private generateTechnicalResponse(topic: string, details: any): string {
    return `<div class="technical-response">
      <h3>${topic.toUpperCase()}</h3>
      <p>${details.description}</p>
      <h4>Areas of Expertise:</h4>
      <ul>
        ${details.expertise.map((item: string) => `<li>${item}</li>`).join('')}
      </ul>
      <p>${details.projects}</p>
    </div>`;
  }
  
  private generateProfileSummary(): string {
    return `<div class="profile-summary">
      <h3>About ${this.profileInfo.name}</h3>
      <p>${this.profileInfo.summary}</p>
      <p>Currently working as a ${this.profileInfo.experience[0].title} at ${this.profileInfo.experience[0].company} in ${this.profileInfo.experience[0].location} with ${this.profileInfo.experience[0].duration} of professional experience.</p>
      <p>Specialized in ${this.profileInfo.skills[0].items.slice(0, 3).join(', ')} and ${this.profileInfo.skills[1].items.slice(0, 2).join(', ')}.</p>
    </div>`;
  }
  
  private generateExperienceResponse(): string {
    let response = `<div class="experience-response">
      <h3>Professional Experience</h3>`;
    
    this.profileInfo.experience.forEach(exp => {
      response += `
        <div class="experience-item">
          <h4>${exp.title} at ${exp.company}</h4>
          <p>${exp.location} | ${exp.duration}</p>
          <p>${exp.description}</p>
          <h5>Key Achievements:</h5>
          <ul>
            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
          <h5>Technologies Used:</h5>
          <p>${exp.technologies.join(', ')}</p>
        </div>`;
    });
    
    response += `</div>`;
    return response;
  }
  
  private generateSkillsResponse(): string {
    let response = `<div class="skills-response">
      <h3>Technical Skills</h3>`;
    
    this.profileInfo.skills.forEach(category => {
      response += `
        <div class="skill-category">
          <h4>${category.category}</h4>
          <p>${category.items.join(', ')}</p>
        </div>`;
    });
    
    response += `</div>`;
    return response;
  }
  
  private generateEducationResponse(): string {
    let response = `<div class="education-response">
      <h3>Education</h3>`;
    
    this.profileInfo.education.forEach(edu => {
      response += `
        <div class="education-item">
          <h4>${edu.degree}</h4>
          <p>${edu.institution}${edu.university ? ' - ' + edu.university : ''} | ${edu.year}</p>
          ${edu.performance ? `<p>Performance: ${edu.performance}</p>` : ''}
          ${edu.stream ? `<p>Stream: ${edu.stream}</p>` : ''}
          <h5>Highlights:</h5>
          <ul>
            ${edu.highlights.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>`;
    });
    
    response += `</div>`;
    return response;
  }
  
  private generateCertificationsResponse(): string {
    let response = `<div class="certifications-response">
      <h3>Professional Certifications</h3>
      <ul>`;
    
    this.profileInfo.certifications.forEach(cert => {
      response += `<li><strong>${cert.name}</strong> - ${cert.issuer} (${cert.year})</li>`;
    });
    
    response += `</ul></div>`;
    return response;
  }
  
  private generateProjectsResponse(): string {
    let response = `<div class="projects-response">
      <h3>Project Portfolio</h3>`;
    
    this.profileInfo.projects.forEach(project => {
      response += `
        <div class="project-item">
          <h4>${project.name}</h4>
          <p>${project.description}</p>
          <h5>Technologies:</h5>
          <p>${project.technologies.join(', ')}</p>
          <h5>Key Features:</h5>
          <ul>
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
          </ul>
        </div>`;
    });
    
    response += `</div>`;
    return response;
  }
  
  private generateContactResponse(): string {
    return `<div class="contact-response">
      <h3>Contact Information</h3>
      <p><i class="fas fa-envelope"></i> Email: ${this.profileInfo.contact.email}</p>
      <p><i class="fas fa-map-marker-alt"></i> Location: ${this.profileInfo.contact.location}</p>
      <p><i class="fab fa-linkedin"></i> LinkedIn: <a href="${this.profileInfo.contact.linkedin}" target="_blank">LinkedIn Profile</a></p>
      <p><i class="fab fa-github"></i> GitHub: <a href="${this.profileInfo.contact.github}" target="_blank">GitHub Profile</a></p>
      <p><i class="fab fa-facebook"></i> Facebook: <a href="${this.profileInfo.contact.facebook}" target="_blank">Facebook Profile</a></p>
      <p><i class="fab fa-instagram"></i> Instagram: <a href="${this.profileInfo.contact.instagram}" target="_blank">Instagram Profile</a></p>
    </div>`;
  }
  
  private includesAny(text: string, phrases: string[]): boolean {
    return phrases.some(phrase => text.includes(phrase));
  }
  
  private calculateSimilarity(text1: string, text2: string): number {
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    let intersection = 0;
    for (const word of set1) {
      if (set2.has(word)) {
        intersection++;
      }
    }
    
    const union = set1.size + set2.size - intersection;
    return intersection / union;
  }
  
  private generateSuggestedQuestions(): void {
    // Pool of questions to suggest
    const questionPool = [
      "What projects have you worked on?",
      "What are your key technical skills?",
      "Tell me about your experience with Java",
      "What is your approach to problem-solving?",
      "How do you stay updated with technology?",
      "Tell me about your work experience",
      "What certifications do you have?",
      "What is your development workflow?",
      "How can I contact you?",
      "What is your educational background?",
      "Tell me about your experience with Angular",
      "What is your experience with Ionic?",
      "How do you handle tight deadlines?",
      "What AWS services have you worked with?",
      "What is your availability for new opportunities?"
    ];
    
    // Select 3 random questions
    this.suggestedQuestions = [];
    while (this.suggestedQuestions.length < 3 && questionPool.length > 0) {
      const randomIndex = Math.floor(Math.random() * questionPool.length);
      this.suggestedQuestions.push(questionPool[randomIndex]);
      questionPool.splice(randomIndex, 1);
    }
  }
  
  useSuggestedQuestion(question: string): void {
    this.userInput = question;
    this.sendMessage();
  }

  private addMessage(message: Message) {
    this.messages.push(message);
    if (!this.isChatOpen) {
      this.unreadCount++;
    }
    
    // Scroll to bottom after message is added
    setTimeout(() => {
      const messageContainer = document.querySelector('.messages-container');
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    }, 100);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  formatTimestamp(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}