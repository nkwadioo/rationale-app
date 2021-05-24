import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  @Input() name: NgModel;
  @Input() label: string;
  @Input() type: string;
  @Input() min: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes) {
      // Object.entries(changes).map( (key, value) => {
      //   console.log(key, value)
      //   this[`${key[0]}`] = key[1]['currentValue']
      // });
    }
  }

  
}
