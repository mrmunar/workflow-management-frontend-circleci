import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSignedIn: Boolean;
  public isCollapsed = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isSignedIn.subscribe( res => {
      this.isSignedIn = res;
    });
  }
}
