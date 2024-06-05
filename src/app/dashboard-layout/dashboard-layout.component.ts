import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    AvatarModule,
    ToolbarModule,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  sidebarVisible: boolean = false;
}
