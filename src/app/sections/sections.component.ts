import { Component, OnInit, Input } from '@angular/core';
import { userMenu, adminMenu } from './sidebar/sidebar';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: []
})

export class SectionsComponent implements OnInit {
  // userMenuNavItems = userMenu;
  adminMenuNavItems = adminMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
