import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ShowErrorsComponent],
  exports: [ShowErrorsComponent]
})
export class SharedComponentsModule { }
