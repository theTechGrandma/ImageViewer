import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlimagesComponent } from './sqlimages.component';

describe('SqlimagesComponent', () => {
  let component: SqlimagesComponent;
  let fixture: ComponentFixture<SqlimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
