import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {Seasons} from '../../models/Seasons';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})

export class SeasonsComponent implements OnInit {
  id: string;
  seasons: Seasons[];
  // show: Show;
  constructor(private dataService: DataService, private route: ActivatedRoute ) {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.dataService.getShows(this.id);
    this.dataService.getSeasons(this.id).subscribe(
      res => {
        this.seasons = [];
        res.map((item) => {
          this.seasons.push(new Seasons(item));
        });
      }
    );
  }

  ngOnInit() {
  }

}
