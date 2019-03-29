import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  search: string;
  shows: Show[];

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.search = this.route.snapshot.paramMap.get('search');
    this.dataService.getShows(this.search).subscribe(
      res => {
        this.shows = [];
        res.map((item) => {
          this.shows.push(new Show(item.show));
        });
      }
    );
  }
  ngOnInit() {}

}
