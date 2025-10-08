import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitting = false;
  accessKey = '5fff0545-caa7-48d6-88f5-dfb8353eb5ad'; // Replace with your Web3Forms access key

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = new FormData();
      formData.append('access_key', this.accessKey);
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('message', this.contactForm.value.message);

      this.http.post('https://api.web3forms.com/submit', formData)
        .subscribe(
          (response) => {
            this.notification.create(
              'success',
              'Thank You for Reaching Out!',
              'Your message has been sent successfully. I will get back to you soon.',
              { nzDuration: 3000 }
            );
            this.contactForm.reset();
            this.isSubmitting = false;
          },
          (error) => {
            this.notification.create(
              'error',
              'Message Failed',
              'There was an issue sending your message. Please try again later.',
              { nzDuration: 3000 }
            );
            this.isSubmitting = false;
          }
        );
    } else {
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}