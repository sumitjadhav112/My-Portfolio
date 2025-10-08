import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileData: Profile = {
    name: 'Sumit Bhagtrao Jadhav',
    location: 'Pune, Maharashtra',
    email: 'sumit.jadhav@example.com',
    phone: '+91-9876543210',
    summary: 'Full-stack Developer with expertise in Java, Angular, and Spring Boot',
    skills: [
      'Java', 'Angular', 'Spring Boot', 'TypeScript', 
      'JavaScript', 'HTML5', 'CSS3', 
      'MySQL', 'PostgreSQL',
      'AWS', 'Azure', 'Hostinger'
    ],
    education: [
      {
        degree: 'B.Sc. Computer Science',
        institution: 'MGM\'s College of CS & IT, Nanded',
        year: 2022,
        cgpa: 6.9
      },
      {
        degree: '12th Science',
        institution: 'Saraswati College, Parbhani',
        year: 2018,
        cgpa: 60
      }
    ],
    workExperience: [
      {
        company: 'Genius Infotech',
        position: 'Full-stack Developer',
        duration: '2022-2023',
        responsibilities: [
          'Developed service booking mobile application',
          'Created e-commerce websites',
          'Implemented employee and client management systems'
        ]
      }
    ],
    projects: [
      {
        name: 'E-Learning Platform',
        technologies: ['Java', 'Angular', 'Spring Boot'],
        description: 'Comprehensive e-learning management system with student, instructor, and admin dashboards',
        githubLink: 'https://github.com/sumitjadhav/e-learning-platform'
      },
      {
        name: 'Complaint Management System',
        technologies: ['Java', 'Angular'],
        description: 'Real-time complaint tracking and management system',
        githubLink: 'https://github.com/sumitjadhav/complaint-management'
      }
    ]
  };

  getProfileData(): Profile {
    return this.profileData;
  }
}