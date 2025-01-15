import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPipeComponent } from './json-pipe.component';

describe('JsonPipeComponent', () => {
  let component: JsonPipeComponent;
  let fixture: ComponentFixture<JsonPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonPipeComponent]
    });
    fixture = TestBed.createComponent(JsonPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
