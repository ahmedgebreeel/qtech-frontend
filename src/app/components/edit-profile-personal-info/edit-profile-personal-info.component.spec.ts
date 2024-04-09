import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePersonalInfoComponent } from './edit-profile-personal-info.component';

describe('EditProfilePersonalInfoComponent', () => {
  let component: EditProfilePersonalInfoComponent;
  let fixture: ComponentFixture<EditProfilePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfilePersonalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfilePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
