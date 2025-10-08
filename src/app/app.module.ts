import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NG-ZORRO Modules
import { NzButtonModule } from 'ng-zorro-antd/button'; 
import { NzGridModule } from 'ng-zorro-antd/grid';   
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';




// NG-ZORRO i18n and locale data
import { NzI18nModule, en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline } from '@ant-design/icons-angular/icons';

export const icons: IconDefinition[] = [UserOutline];



import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './portfolio/header/header.component';
import { AboutComponent } from './portfolio/about/about.component';
import { EducationComponent } from './portfolio/education/education.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { ChatbotComponent } from './portfolio/chatbot/chatbot.component';





// Register English locale data
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ExperienceComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule, 
    NzGridModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzI18nModule, // Import Ng-Zorro i18n module
    NzDropDownModule,
    NzNotificationModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    NzRadioModule,
    RouterModule,
    AppRoutingModule,
    NzCollapseModule,
    NzDescriptionsModule,
    NzTimelineModule,
    NzListModule,
    NzCardModule,
    NzTagModule,
    HttpClientModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [
    NzMessageService,
    { provide: NZ_I18N, useValue: en_US } // Set default locale to en_US
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
