import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servererror',
  template: '<div class="alert alert-danger">Server connection error.</div>'
})
export class ServererrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
