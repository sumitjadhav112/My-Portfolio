import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  registrationForm!: FormGroup;
  
  countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' }
  ];

  constructor(private fb: FormBuilder, private notification: NzNotificationService,private message: NzMessageService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [null, Validators.required],
      gender: [null, Validators.required],
      country: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      // Handle form submission
      console.log(this.registrationForm.value);
      
      // Show success toast
      this.showSuccessToast();
    }
  }

  showSuccessToast() {
    // Assuming you're using ng-zorro notification service
    this.notification.success(
      'Registration Successful', 
      'Your account has been created successfully!'
    );
  }

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];


  isVisible = false;
  isOkLoading = false;
  date = null;

  createMessage(type: string): void {
    this.message.create(type, `This is a message for you click on the button ${type}`);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onClick(action: string): void {
    console.log(`You selected: ${action}`);
    alert(`Action: ${action}`);
  }

}
