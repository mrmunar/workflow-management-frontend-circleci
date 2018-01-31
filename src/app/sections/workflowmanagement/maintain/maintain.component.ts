import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.css']
})
export class MaintainComponent implements OnInit {
  route_id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.route_id = params['id'];
   });
  }
}
