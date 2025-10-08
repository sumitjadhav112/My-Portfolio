import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { AboutComponent } from './portfolio/about/about.component';
import { EducationComponent } from './portfolio/education/education.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';

const routes: Routes = [
  {path:'form', component:FormComponent},
  {path:'contact',component:ContactComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'education',component:EducationComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
