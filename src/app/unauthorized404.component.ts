import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unathorized404',
  template: `<div class="content-fluid">
                <div class="alert alert-danger">Unauthorized access!</div>
              </div>`
})
export class Unauthorized404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
