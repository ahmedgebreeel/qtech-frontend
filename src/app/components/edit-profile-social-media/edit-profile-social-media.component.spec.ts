import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSocialMediaComponent } from './edit-profile-social-media.component';

describe('EditProfileSocialMediaComponent', () => {
  let component: EditProfileSocialMediaComponent;
  let fixture: ComponentFixture<EditProfileSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfileSocialMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfileSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
