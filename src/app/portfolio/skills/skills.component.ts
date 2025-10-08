import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon?: string;
}

interface Technology {
  name: string;
  color: string;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  standalone: false,
  
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  programmingSkills: Skill[] = [
    { name: 'Java', level: 95, color: '#f04134', icon: 'java' },
    { name: 'Angular', level: 90, color: '#00a854', icon: 'angular' },
    { name: 'Spring Boot', level: 88, color: '#1890ff', icon: 'spring' },
    { name: 'TypeScript', level: 80, color: '#ffbf00', icon: 'typescript' },
    { name: 'JavaScript', level: 65, color: '#7265e6', icon: 'javascript' }
  ];

  technologies: Technology[] = [
    { name: 'HTML5', color: 'orange', icon: 'html5' },
    { name: 'CSS3', color: 'blue', icon: 'css3' },
    { name: 'SVN', color: 'green', icon: 'svn' },
    { name: 'Git', color: 'red', icon: 'git' },
    { name: 'Maven', color: 'purple', icon: 'maven' }
  ];

  databases = [
    {
      name: 'MySQL',
      description: 'Relational Database Management',
      icon: 'database',
      color: '#1890ff'
    },
    
    {
      name: 'PostgreSQL',
      description: 'Advanced Open-Source Database',
      icon: 'folder',
      color: '#52c41a'
    }
  ];

  cloudPlatforms = [
    { name: 'AWS', color: 'orange' },
    { name: 'Azure', color: 'blue' },
    { name: 'Hostinger', color: 'green' }
  ];

  constructor() {}

  ngOnInit(): void {}
}