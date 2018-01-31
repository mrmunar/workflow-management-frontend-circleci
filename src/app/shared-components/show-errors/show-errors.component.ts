import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  template: `
    <div *ngIf="shouldShowErrors()">
      <div class="text-danger" *ngFor="let error of listOfErrors()">{{error}}</div>
    </div>
  `,
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'email' : () => 'This must be a valid email address'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
