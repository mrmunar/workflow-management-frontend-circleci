import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
              <div class="container-fluid">
                <router-outlet></router-outlet>
              </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Workflow Management';
}
