import { Component, OnInit } from '@angular/core';
import { WeekService } from '../../services/weeks.service';
import { Week } from '../../interfaces/week';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  weeks: Week[] = [];

  constructor(
    private weekSrv: WeekService
  ) {}

  ngOnInit(): void {
    this.weekSrv.getAll().subscribe((res) => {
      this.weeks = [];
      res.forEach((doc) => {
        console.log(doc.payload.doc.data());
      })
    })
  }
}
