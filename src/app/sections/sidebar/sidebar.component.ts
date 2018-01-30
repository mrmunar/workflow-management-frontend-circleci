import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() navItems: NavItem;
  @Input() layer: number;
  paddingRight: number;
  isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
    if (!this.layer) {
      this.layer = 1;
    } else {
      this.paddingRight = this.layer * 15;
    }
  }

}
