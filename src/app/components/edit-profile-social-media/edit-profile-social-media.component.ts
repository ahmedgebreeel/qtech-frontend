import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-edit-profile-social-media',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './edit-profile-social-media.component.html',
  styleUrl: './edit-profile-social-media.component.css'
})
export class EditProfileSocialMediaComponent implements OnInit {
  currentPage: string = 'personal'; // Default to personal page
  userInfo: any = {
    name: '',
    email: '',
    twitter: '',
    facebook: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
