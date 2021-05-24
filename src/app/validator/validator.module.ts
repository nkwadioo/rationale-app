import { ValidatorComponent } from './validator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ValidatorComponent],
  exports: [ValidatorComponent],
  imports: [
    CommonModule
  ]
})
export class ValidatorModule { }
