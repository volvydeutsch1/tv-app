import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../models/data.service';
import { Show } from '../../models/Show';
import {Episodes} from '../../models/Episodes';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  search: string;
  shows: Show[];
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    // getting the show name by a snapshot of the route
   // this.search = this.route.snapshot.paramMap.get('search');

    this.route.paramMap.subscribe((params) => {
      this.search = params.get('search');
      // getting all the shows with api call in the dataService and pushing it in to the array
      this.dataService.getShows(this.search).subscribe(
        res => {
          this.shows = [];
          res.map((item) => {
            this.shows.push(new Show(item.show));
          });
          this.getRelatedEpisodes();
        }
      );
    });
  }
  ngOnInit() {}

  getRelatedEpisodes() {
    this.shows.map(
      show => {
        if (show.prevEpUrl) {
          // get that episode
          this.dataService.getData(show.prevEpUrl).subscribe(result => {
            const temp = new Episodes(result);
            show.setprevEp(temp);
          }
        );
        }
        if (show.nextEpUrl) {
          // get that episode
          this.dataService.getData(show.nextEpUrl).subscribe(result => {
            const temp = new Episodes(result);
            show.setprevEp(temp);
          });
        }
      }
    );
  }

}
