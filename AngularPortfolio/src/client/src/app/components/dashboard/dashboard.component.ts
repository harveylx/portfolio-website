import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(primeNgConfig: PrimeNGConfig) {
    primeNgConfig.ripple = true;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Projects',
        icon: PrimeIcons.BOOK
      },
      {
        label: 'CV',
        icon: PrimeIcons.FILE_PDF
      },
      {
        label: 'Contact',
        icon: PrimeIcons.INBOX
      },
    ];
  }

  goGithub(): void {
    window.open('https://github.com/harveysingh1', '_blank');
  }

  goLinkedIn(): void {
    window.open('https://www.linkedin.com/in/harveysingh1/', '_blank');
  }

  goFacebook(): void {
    window.open('https://www.facebook.com/harveysingh8/', '_blank');
  }
}
