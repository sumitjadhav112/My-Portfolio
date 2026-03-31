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
      company: 'Automonk Technologies Pvt. Ltd.',
      role: 'Software Engineer',
      duration: 'Sept 2022 - Present',
      location: 'Pune, Maharashtra, India',
      description: `As a Software Engineer at Automonk Technologies, I work as a Java Full Stack Developer, building scalable and high-performance web applications. 
      I am involved in both backend and frontend development using Spring Boot and Angular. 
      My role includes designing RESTful APIs, implementing secure authentication using Spring Security and JWT, 
      and developing responsive user interfaces. I focus on writing clean, maintainable code and optimizing application performance.`,

      responsibilities: [
        'Developing and maintaining RESTful APIs using Java and Spring Boot',
        'Implementing authentication and authorization using Spring Security and JWT',
        'Building responsive UI using Angular, HTML, CSS, and TypeScript',
        'Integrating frontend with backend services and third-party APIs',
        'Working with MySQL and PostgreSQL for efficient data handling',
        'Optimizing application performance and ensuring scalability'
      ],

      technologies: [
        'Java', 'Spring Boot', 'Microservices', 'Angular', 'TypeScript',
        'MySQL', 'PostgreSQL', 'REST APIs', 'Spring Security', 'JWT',
        'AWS', 'Git'
      ],

      projects: [
        {
          name: 'Skills Assessment & Interview Preparation Platform',
          description: 'Developed a full-stack platform with role-based authentication, dynamic exam creation, and analytics dashboard using Spring Boot and Angular.'
        },
        {
          name: 'Wealth Vision Pro',
          description: 'Built a financial dashboard to visualize user portfolios with real-time data integration and interactive UI.'
        }
      ]
    }
  ];

  ngOnInit() {}
}