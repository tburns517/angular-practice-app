import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getStats().subscribe(
      data => this.stats$ = data
    )
  }

}
