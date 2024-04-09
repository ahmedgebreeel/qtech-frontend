import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile-personal-info',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, ReactiveFormsModule, HttpClientModule],
  providers:[UserService],
  templateUrl: './edit-profile-personal-info.component.html',
  styleUrl: './edit-profile-personal-info.component.css'
})
export class EditProfilePersonalInfoComponent {
  personalForm = new FormGroup({
    firstName: new FormControl(''),
      lastName: new FormControl(''),
      fullNameEnglish: new FormControl(''),
      fullNameArabic: new FormControl(''),
      dateOfBirth: new FormControl(''),
      nationality: new FormControl(''),
      gender: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      fullAddress: new FormControl('')
  });
  

  constructor(private userService: UserService) { }

  
  save(){
    if (!this.personalForm.valid) {
      // for (const controlName in this.personalForm.controls) {
      //   if (this.personalForm.controls.hasOwnProperty(controlName)) {
      //     const control = this.personalForm.controls[controlName as keyof typeof this.personalForm.controls];
      //     if (control.invalid) {
      //       const errors = control.errors;
      //       if (errors) {
      //         for (const errorKey in errors) {
      //           if (errors.hasOwnProperty(errorKey)) {
      //             let errorMessage = '';
      //             switch (errorKey) {
      //               case 'required':
      //                 errorMessage = `${controlName} is required.`;
      //                 break;
      //               // Add more cases for different types of errors if needed
      //             }
      //             alert(errorMessage);
      //             // Exit the loop after alerting the first error message
      //             break;
      //           }
      //         }
      //       }
      //       // Exit the loop after alerting the first error message
      //       break;
      //     }
      //   }
      // }
      alert("please fill all the fields");
      return;
    }

    this.userService.editPersonalInfo(this.personalForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert("personal info updated successfully");
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    }
      
    )
   
    
}
}
