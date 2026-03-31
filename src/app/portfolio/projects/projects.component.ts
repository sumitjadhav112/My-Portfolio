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
    name: 'Skills Assessment & Interview Preparation Platform',
    type: 'Full Stack Web Application',
    description:
      'A full-stack platform to evaluate technical skills with dynamic exam creation, role-based authentication, and performance analytics dashboard.',
    technologies: [
      { name: 'Java', color: '' },
      { name: 'Spring Boot', color: '' },
      { name: 'Angular', color: '' },
      { name: 'MySQL', color: '' },
      { name: 'JWT', color: '' },
      { name: 'AWS', color: '' },
    ],
    githubLink: '',
    demoLink: '',
    tagColor: 'blue',
    duration: 'Aug 2025 - Present',
    role: 'Full Stack Developer',
    challenges: [
      'Implementing secure exam features like tab-switch detection',
      'Designing dynamic question selection and exam flow',
      'Handling role-based authentication using JWT'
    ],
    achievements: [
      'Built complete exam lifecycle from creation to submission',
      'Improved system security and user experience',
      'Developed analytics dashboard for performance tracking'
    ],
    loading: false
  },
  {
    name: 'Wealth Vision Pro',
    type: 'Full Stack Web Application',
    description:
      'Financial dashboard providing real-time insights into user portfolios by integrating data from multiple sources with interactive visualizations.',
    technologies: [
      { name: 'Java', color: '' },
      { name: 'Spring Boot', color: '' },
      { name: 'Angular', color: '' },
      { name: 'MySQL', color: '' },
      { name: 'AWS', color: '' },
    ],
    githubLink: '',
    demoLink: '',
    tagColor: 'green',
    duration: 'Mar 2023 - Feb 2024',
    role: 'Full Stack Developer',
    challenges: [
      'Integrating data from multiple financial sources',
      'Handling real-time data updates efficiently',
      'Designing interactive charts and dashboards'
    ],
    achievements: [
      'Delivered real-time financial insights to users',
      'Improved data visualization using Angular charts',
      'Built scalable backend using Spring Boot'
    ],
    loading: false
  }
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