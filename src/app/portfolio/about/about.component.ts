import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface ProfessionalHighlight {
  icon: string;
  title: string;
  description: string;
  skills: string[];
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
  export class AboutComponent implements OnInit {
    profileState = 'initial';
    
    highlights: ProfessionalHighlight[] = [
      {
        icon: 'code',
        title: 'Full Stack Development Mastery',
        description: 'Comprehensive expertise in creating end-to-end web solutions with cutting-edge technologies',
        skills: ['Java', 'Angular', 'Spring Boot', 'TypeScript', 'Microservices'],
        color: '#3498db'
      },
      {
        icon: 'cloud',
        title: 'Cloud & DevOps Innovation',
        description: 'Advanced deployment and infrastructure management using modern cloud platforms',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
        color: '#2ecc71'
      },
      {
        icon: 'database',
        title: 'Database & Performance Optimization',
        description: 'Skilled in designing efficient database architectures and performance tuning',
        skills: ['MySQL', 'PostgreSQL', 'Redis', 'Database Optimization'],
        color: '#e74c3c'
      }
    ];
  
    educationTimeline = [
      {
        degree: 'B.Sc. Computer Science',
        institution: "MGM's College of CS & IT, Nanded",
        year: 2022,
        percentage: 6.9,
        color: 'blue',
        details: 'Specialized in Software Development and Advanced Computing Techniques'
      },
      {
        degree: '12th Science',
        institution: 'Saraswati College, Parbhani',
        year: 2018,
        percentage: 60,
        color: 'green',
        details: 'Strong foundation in Mathematics and Computer Science'
      }
    ];
  
    onMouseEnter() {
      this.profileState = 'hover';
    }
  
    onMouseLeave() {
      this.profileState = 'initial';
    }
  
    ngOnInit() {}
  }