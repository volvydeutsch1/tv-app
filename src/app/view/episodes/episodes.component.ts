import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../models/data.service';
import {ActivatedRoute} from '@angular/router';
import {Episodes} from '../../models/Episodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})

export class EpisodesComponent implements OnInit {
  // getting the id from the parent
  @Input() id: number;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  episodes: Episodes[];
  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    // getting the episodes with the id from the dataService with a api call and pushing it in an array
    this.dataService.getEpisodes(this.id).subscribe(
      res => {
        this.episodes = [];
        res.map((item) => {
          this.episodes.push(new Episodes(item));
        });
      }
    );
  }

}
