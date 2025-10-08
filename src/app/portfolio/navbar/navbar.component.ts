import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit{
isMenuOpen = false;
isScrolled = false;
navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: 'home' },
  { label: 'About', href: '#about', icon: 'info' },
  { label: 'education', href: '#education', icon: 'settings' },
  { label: 'skills', href: '#skills', icon: 'briefcase' },
  { label: 'projects', href: '#projects', icon: 'briefcase' },
  {label:'experience',href:'#experience',icon:'briefcase'},
  { label: 'Contact', href: '#contact', icon: 'message-circle' }
];

constructor(
) {}

@HostListener('window:scroll')
handleScroll(): void {
  const scrollPosition = window.pageYOffset;
  this.isScrolled = scrollPosition > 50;
}

closeMenu(){
  this.isMenuOpen = false;
}

toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}

navigateTo(section: string): void {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    this.isMenuOpen = false;
  }
}
ngOnInit(): void {
  
}
}