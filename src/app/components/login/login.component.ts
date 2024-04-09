import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    rememberMe : new FormControl(false)
    
  });


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    // Submit your login logic here
    console.log('Form Submitted!', this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        
        if (this.loginForm.value.rememberMe){

          localStorage.setItem('token', res.token);
          localStorage.setItem('userID', res.user.id);
        }else{
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userID', res.user.id);
        }
        this.router.navigateByUrl('/edit/personal');

      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  redirectToRegister(){
    this.router.navigateByUrl('/register');
  }

}
