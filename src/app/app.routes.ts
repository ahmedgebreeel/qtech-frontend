import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfilePersonalInfoComponent } from './components/edit-profile-personal-info/edit-profile-personal-info.component';
import { EditProfileSocialMediaComponent } from './components/edit-profile-social-media/edit-profile-social-media.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: "", redirectTo: "register", pathMatch: "full"},
    {path: "register", component:RegisterComponent },
    {path: "login", component:LoginComponent },
    {path: "edit/personal", component:EditProfilePersonalInfoComponent, canActivate:[authGuard] },
    {path: "edit/social", component:EditProfileSocialMediaComponent, canActivate:[authGuard] }
];
