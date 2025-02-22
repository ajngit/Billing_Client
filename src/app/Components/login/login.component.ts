import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Services/UserService/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private UserService : UserService) {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Role:[0]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.UserService.Authenticate(loginData).subscribe({
        next: (resp) => {
          console.log('Response:', resp);
          // Handle the successful response here, e.g., redirect or store token
        },
        error: (error) => {
          console.error('Error:', error);
          // Handle the error here, e.g., show a message to the user
          //this.handleError(error);
        }
      });
    }
  }
}
