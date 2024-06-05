import { Component, OnInit } from '@angular/core';
import { WeekService } from '../../services/weeks.service';
import { Week } from '../../interfaces/week';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sidebarVisible: boolean = false;
  weeks: Week[] = [];

  constructor(
    private weekSrv: WeekService
  ) {}

  ngOnInit(): void {
    this.weekSrv.getAll().subscribe((res) => {
      this.weeks = [];
      res.forEach((doc) => {
        const data: any = doc.payload.doc.data();
        this.weeks.push({
          id: doc.payload.doc.id,
          no: data.no,
          start: data.start,
          end: data.end,
          year: data.year,
          matches: []
        })
        console.log(new Date(data.start))
      })
      this.weeks.sort(this.sortWeeks)
    })
  }

  sortWeeks(a:Week, b:Week) {
    if(a.no < b.no) return -1
    else if (a.no > b.no) return 1
    else return 0
  }
}
