import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDialogConfirmComponent } from './simple-dialog-confirm.component';

describe('SimpleDialogConfirmComponent', () => {
  let component: SimpleDialogConfirmComponent;
  let fixture: ComponentFixture<SimpleDialogConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDialogConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleDialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
