import {Component, OnInit} from '@angular/core';
import {DataService} from '../../models/data.service';
import {ActivatedRoute} from '@angular/router';
import {Seasons} from '../../models/Seasons';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})

export class SeasonsComponent implements OnInit {
  id: string;
  seasons: Seasons[];
  constructor(private dataService: DataService, private route: ActivatedRoute ) {
    // getting the seasons with a snapshot of the route
    this.id = this.route.snapshot.paramMap.get('id');
    // getting the seasons from the datService with an api call using the id and pushing it in a array
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
