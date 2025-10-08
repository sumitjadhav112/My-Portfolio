import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('profileAnimation', [
      state('initial', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('hover', style({
        transform: 'scale(1.05)',
        opacity: 0.9
      })),
      transition('initial <=> hover', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent {
  profileImage = 'assets/profile2.jpg';
  isAvailable = true;
  isVerified = true;
  // profileData: any;
  
  // constructor(private profileService: ProfileService) {}

  // ngOnInit() {
  //   this.profileData = this.profileService.getProfileData();
  // }

  // downloadResume() {
  //   const link = document.createElement('a');
  //   link.href = 'assets/sumit-jadhav-resume.pdf';
  //   link.download = 'Sumit_Jadhav_Resume.pdf';
  //   link.click();
  // }


  profileState = 'initial';
  skills = [
    'Angular', 'TypeScript', 'Java', 
    'Spring Boot', 'Aws', 'MySQL'
  ];

  downloadResume() {
    const pdfUrl = 'assets/sumit-jadhav.pdf'; // Ensure this path is correct
    window.open(pdfUrl, '_blank');
  }

  onMouseEnter() {
    this.profileState = 'hover';
  }

  onMouseLeave() {
    this.profileState = 'initial';
  }
  contactMe(): void {
    // Implement contact logic
    console.log('Opening contact form...');
  }

  ngOnInit() {
  }

}
