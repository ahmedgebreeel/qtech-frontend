import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile-social-media',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, ReactiveFormsModule, HttpClientModule],
  providers:[UserService],
  templateUrl: './edit-profile-social-media.component.html',
  styleUrl: './edit-profile-social-media.component.css'
})
export class EditProfileSocialMediaComponent  {
 
  constructor(private userService: UserService ) { }

  socialForm = new FormGroup({
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    linkedin: new FormControl(''),
    instagram: new FormControl(''),
    github: new FormControl(''),
  });


  save(){
    this.userService.editSocialMedia(this.socialForm.value).subscribe({
      next: (respond)=>{
        console.log(respond);
        alert("social media link updated successfully");
        
      },
      error: (err)=>{
        console.log(err);
        alert("error saving your social media link please try again later");
        
      }
    })

}
}