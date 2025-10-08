import { Component, OnInit } from '@angular/core';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-19';

  ngOnInit() {
    AOS.init();
  }

}