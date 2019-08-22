import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [SearchComponent],
          imports: [HttpClientTestingModule, FormsModule],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                data: {
                  subscribe: (fn: (value: Data) => void) => fn({
                    countryCode: '1234'
                  })
                }
              }
            }]
        })
          .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Search By Post Code');
      }));
});