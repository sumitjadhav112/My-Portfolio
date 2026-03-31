import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('0.4s ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();
  email: string = 'sumitjadhav7387@gmail.com';
  phone: string = '9673999289';
  location: string = 'Pune, Maharashtra';

  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/sumitjadhav112', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/sumitjadhav1/', label: 'LinkedIn' },
    // { icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/sumitjadhav.93/e', label: 'Instagram' },
  ];

  quickLinks = [
    { path: '/home', fragment: 'home', label: 'Home' },
    { path: '/about', fragment: 'about', label: 'About Me' },
    { path: '/education', fragment: 'education', label: 'Education' },
    { path: '/skills', fragment: 'skills', label: 'Skills' },
    { path: '/projects', fragment: 'projects', label: 'Projects' },
    {path:'/experience',fragment:'experience', label:'experience'},
    { path: '/contact', fragment: 'contact', label: 'Contact' },
  ];

  constructor(private router: Router,private notification: NzNotificationService
  ) {}

  scrollToSection(path: string, fragment: string): void {
    this.router.navigate([path], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }

  copyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      this.notification.create('success', 'Copied to Clipboard', `${text} has been copied!`);
    } catch (err) {
      console.error('Fallback copy failed', err);
      this.notification.create('error', 'Clipboard Error', 'Could not copy text.');
    } finally {
      document.body.removeChild(textArea);
    }
  }

    // Handle form submission
    onSubmitNewsletterForm(emailInput: string): void {
      // Show notification
      this.notification.create(
        'success',
        'Thank You for Reaching Out!',
        `Dear visitor, thank you for contacting me. I’ve received your message and will get back to you as soon as possible. I’m excited to explore potential opportunities and collaborations. Have a great day!`
      );
      console.log(`Contact form submitted with email: ${emailInput}`);
    }
}