import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

interface EducationDetail {
  degree: string;
  institution: string;
  university?: string;
  year: string;
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

    // ✅ Added MCA (Current)
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Siddhant Institute of Computer Application, Sudumbare, Pune',
      university: 'Savitribai Phule Pune University',
      year: '2025 - Present',
      performance: 'Pursuing',
      color: 'purple',
      stream: 'Computer Applications',
      highlights: [
        'Advanced Concepts in Software Development',
        'Focus on Full Stack and Modern Technologies',
        'Enhancing Problem Solving and System Design Skills'
      ]
    },

    {
      degree: 'Bachelor of Computer Science (B.C.S)',
      institution: "MGM College of CS & IT, Nanded",
      university: 'Swami Ramanand Tirth Marathwada University',
      year: '2022',
      performance: '7.9 CGPA',
      color: 'blue',
      stream: 'Computer Science',
      highlights: [
        'Strong foundation in programming and data structures',
        'Worked on academic projects in web technologies',
        'Learned core software engineering principles'
      ]
    },

    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Saraswati College, Parbhani',
      year: '2019',
      performance: '60%',
      color: 'green',
      stream: 'Science',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Studied Physics and basic Computer Science',
        'Participated in academic activities'
      ]
    },

    {
      degree: 'Secondary Education (10th)',
      institution: 'Basweshwar High School, Kamtha, Nanded',
      year: '2017',
      performance: 'Completed',
      color: 'red',
      highlights: [
        'Built strong academic base',
        'Active participation in school activities',
        'Consistent performance'
      ]
    }
  ];

  achievements: AcademicAchievement[] = [
    {
      title: 'Technical Skills Mastery',
      description: 'Strong hands-on experience in Java Full Stack development',
      icon: 'code',
      category: 'Technical'
    },
    {
      title: 'Problem Solving',
      description: 'Ability to design and implement scalable solutions in real projects',
      icon: 'lightbulb',
      category: 'Innovation'
    },
    {
      title: 'Continuous Learning',
      description: 'Actively learning new technologies and improving development skills',
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