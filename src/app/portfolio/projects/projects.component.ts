import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

interface Project {
  name: string;
  type: string;
  description: string;
  technologies: { name: string; color: string }[]; // Updated type to include color
  githubLink?: string;
  demoLink?: string;
  tagColor: string;
  duration: string;
  role: string;
  challenges: string[];
  achievements: string[];
  loading?: boolean; // Added loading property

}

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'E-Learning Platform',
      type: 'Full Stack',
      description:
        'Comprehensive e-learning management system with student, instructor, and admin dashboards. Implemented role-based access control and real-time features.',
      technologies: [
        { name: 'Java', color: '' },
        { name: 'Angular', color: '' },
        { name: 'Spring Boot', color: '' },
        { name: 'MySQL', color: '' },
      ],
      githubLink: 'https://github.com/sumitjadhav/e-learning-platform',
      demoLink: '',
      tagColor: 'blue',
      duration: '6 months',
      role: 'Full Stack Developer',
      challenges: ['Real-time data sync', 'Role-based access control'],
      achievements: ['Completed ahead of schedule', '100% client satisfaction'],
      loading: false

    },
    {
      name: 'Complaint Management System',
      type: 'Web Application',
      description:
        'Real-time complaint tracking system allowing users to submit and track complaints with admin action tracking and resolution workflow.',
      technologies: [
        { name: 'Java', color: '' },
        { name: 'Angular', color: '' },
        { name: 'Spring Boot', color: '' },
        { name: 'PostgreSQL', color: '' },
      ],
      githubLink: 'https://github.com/sumitjadhav/complaint-management',
      demoLink: '',
      tagColor: 'green',
      duration: '4 months',
      role: 'Backend Developer',
      challenges: ['Efficient database design', 'Real-time notifications'],
      achievements: ['Improved complaint resolution efficiency by 30%'],
      loading: false

    },
    {
      name: 'Service Booking Mobile App',
      type: 'Mobile Application',
      description:
        'Service booking platform developed at Genius Infotech with comprehensive user and service provider interfaces.',
      technologies: [
        { name: 'Java', color: '' },
        { name: 'Angular Ionics', color: '' },
        { name: 'MySQL', color: '' },
        { name: 'RESTful API', color: '' },
      ],
      githubLink: '',
      demoLink: '',
      tagColor: 'purple',
      duration: '3 months',
      role: 'Android Developer',
      challenges: ['User-friendly interface', 'Secure API integration'],
      achievements: ['Achieved 10,000+ downloads in 3 months'],
      loading: false

    },
    {
      name: 'Employee Management System',
      type: 'Enterprise Solution',
      description:
        'Comprehensive HR management system with employee tracking, payroll, and performance management modules.',
      technologies: [
        { name: 'Spring Boot', color: '' },
        { name: 'Angular', color: '' },
        { name: 'MySQL', color: '' },
        { name: 'JWT Authentication', color: '' },
      ],
      githubLink: '',
      demoLink: '',
      tagColor: 'orange',
      duration: '5 months',
      role: 'Full Stack Developer',
      challenges: ['Authentication and authorization', 'Scalability'],
      achievements: ['Enhanced employee efficiency by 25%'],
      loading: false

    },
  ];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadProjects();
  }

  async loadProjects() {
    try {
      // Set loading state for all projects
      this.projects = this.projects.map(project => ({
        ...project,
        loading: true
      }));

      // Assign colors to technologies
      await this.assignColorsToTechnologies();

      // Remove loading state
      this.projects = this.projects.map(project => ({
        ...project,
        loading: false
      }));
    } catch (error) {
      console.error('Error loading projects:', error);
      // Handle error state if needed
    }
  }

  assignColorsToTechnologies() {
    const colors = [
      'magenta',
      'red',
      'volcano',
      'orange',
      'gold',
      'lime',
      'green',
      'cyan',
      'blue',
      'geekblue',
      'purple',
    ];

    return new Promise<void>((resolve) => {
      this.projects = this.projects.map((project) => ({
        ...project,
        technologies: project.technologies.map((tech) => ({
          ...tech,
          color: colors[Math.floor(Math.random() * colors.length)],
        })),
      }));
      resolve();
    });
  }
}