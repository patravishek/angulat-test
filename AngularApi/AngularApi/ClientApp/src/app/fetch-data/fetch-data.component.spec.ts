import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FetchDataComponent } from './fetch-data.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { InjectionToken } from '@angular/core';

describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FetchDataComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('List of Countries');
  }));

  it('should return a list of country on load', async(() => {
    const countElement = fixture.nativeElement.querySelector('em');
    expect(countElement.textContent).toEqual('Loading...');
  }));
  
});
