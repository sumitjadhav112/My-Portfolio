import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Automonk Solutions Pvt Ltd',
      role: 'Software Developer',
      duration: 'April 2025 - Present',
      location: 'Bhumkar Chowk, Pune, Maharashtra, India',
      description: `As a Software Developer at Automonk Solutions Pvt Ltd, I focus on creating responsive and user-friendly web applications using Angular. 
      I collaborate with the development team to design, implement, and maintain front-end architecture for various client projects. 
      My responsibilities include translating UI/UX design wireframes into reusable components, optimizing applications for maximum speed and scalability, 
      and ensuring cross-platform compatibility and browser responsiveness. I apply industry best practices and design patterns to deliver high-quality code 
      while continuously evaluating and implementing new technologies to improve the development workflow.`,
      responsibilities: [
        'Developing responsive web applications using Angular framework',
        'Creating reusable components and services for improved code maintainability',
        'Implementing state management solutions for complex applications',
        'Collaborating with backend developers for API integration',
        'Ensuring cross-browser compatibility and responsive design implementation'
      ],
      technologies: [
        'Angular', 'TypeScript', 'RxJS', 'NgRx', 'HTML5', 'CSS3/SCSS',
        'RESTful APIs', 'Git', 'Jira', 'Agile/Scrum'
      ],
      projects: [
        {
          name: 'Enterprise Dashboard',
          description: 'Interactive analytics dashboard with real-time data visualization'
        },
        {
          name: 'Client Portal System',
          description: 'Secure client access portal with role-based permissions'
        }
      ]
    },
    {
      company: 'Genius Infotech',
      role: 'Full Stack Developer',
      duration: 'August 2023 - Feb 2025',
      location: 'BBC Complex, Bhugaon, Pune, Maharashtra, India',
      description: `As a Full Stack Developer at Genius Infotech, I specialized in building scalable and efficient web and mobile applications.
      With expertise in Angular for frontend development and Java for backend solutions, I actively contributed to designing, developing,
      and maintaining high-performance applications. My role involved collaborating with cross-functional teams, ensuring smooth
      integration of front-end and back-end functionalities, optimizing user experience, and implementing cloud-based deployment strategies.
      I had a strong focus on best practices, code reusability, and maintainability to deliver robust and efficient solutions for various projects.`,
      responsibilities: [
        'Developed and maintained service booking mobile application using Ionic and Angular',
        'Created Abacus learning platform with comprehensive admin panel for data management',
        'Implemented cloud deployment solutions using AWS, Hostinger, and Azure',
        'Collaborated with cross-functional teams to deliver scalable solutions',
        'Managed end-to-end development lifecycle from requirement gathering to deployment'
      ],
      technologies: [
        'Angular', 'Java', 'Ionic', 'TypeScript', 'HTML5', 'CSS3',
        'AWS', 'Azure', 'Hostinger', 'Git', 'RESTful APIs'
      ],
      projects: [
        {
          name: 'Service Booking Mobile App',
          description: 'Ionic/Angular-based mobile application for seamless service booking'
        },
        {
          name: 'Abacus Learning Platform',
          description: 'Educational platform with administrative capabilities for content management'
        }
      ]
    }
  ];

  ngOnInit() {
  }
}