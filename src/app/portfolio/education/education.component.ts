import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
interface EducationDetail {
  degree: string;
  institution: string;
  university?: string;
  year: number;
  performance: string;
  color: string;
  stream?: string;
  highlights: string[];
}
interface AcademicAchievement {
  title: string;
  description: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-education',
  standalone: false,
  
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationState = 'initial';
  
  educationDetails: EducationDetail[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: "MGM's College of CS & IT, Nanded",
      university: 'Swami Ramanand Tirth Marathwada University',
      year: 2022,
      performance: '6.9 CGPA',
      color: 'blue',
      stream: 'Computer Science',
      highlights: [
        'Full-stack Development Specialization',
        'Academic Projects in Web Technologies',
        'Comprehensive Software Engineering Curriculum'
      ]
    },
    {
      degree: 'Higher Secondary Education (12th Standard)',
      institution: 'Saraswati College, Parbhani',
      year: 2019,
      performance: '60%',
      color: 'green',
      stream: 'Science',
      highlights: [
        'Strong Foundation in Mathematics',
        'Advanced Physics and Computer Science',
        'Participated in State-level Science Exhibitions'
      ]
    },
    {
      degree: 'Secondary Education (10th Standard)',
      institution: 'Basweshwar High School, Kamtha, Nanded',
      year: 2017,
      performance: 'Successfully Completed',
      color: 'red',
      highlights: [
        'Consistent Academic Performance',
        'Active Participation in School Activities',
        'Strong Academic Foundation'
      ]
    }
  ];

  achievements: AcademicAchievement[] = [
    {
      title: 'Technical Skills Mastery',
      description: 'Comprehensive Full-stack Development Certification with advanced technologies',
      icon: 'code',
      category: 'Technical'
    },
    {
      title: 'Innovation & Problem Solving',
      description: 'Award-winning academic projects demonstrating creative technological solutions',
      icon: 'lightbulb',
      category: 'Innovation'
    },
    {
      title: 'Continuous Learning Commitment',
      description: 'Proactive approach to emerging technologies and software development trends',
      icon: 'rocket',
      category: 'Professional Development'
    }
  ];

  onMouseEnter() {
    this.educationState = 'hover';
  }

  onMouseLeave() {
    this.educationState = 'initial';
  }

  ngOnInit() {}
}