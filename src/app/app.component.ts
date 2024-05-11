import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DasboardFooterComponent } from './dasboard-footer/dasboard-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    DashboardLayoutComponent,
    DasboardFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quinielas-brandeso';


}
