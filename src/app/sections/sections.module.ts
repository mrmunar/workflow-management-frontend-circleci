import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppBootstrapModule } from '../app-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule,
    AppBootstrapModule
  ],
  declarations: [SectionsComponent, SidebarComponent]
})
export class SectionsModule { }
