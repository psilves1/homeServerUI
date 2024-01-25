import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServerConnectionComponent } from './test-server-connection.component';

describe('TestServerConnectionComponent', () => {
  let component: TestServerConnectionComponent;
  let fixture: ComponentFixture<TestServerConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestServerConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestServerConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
