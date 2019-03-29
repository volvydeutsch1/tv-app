import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {Episodes} from '../../models/Episodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})

export class EpisodesComponent implements OnInit {
  @Input() id: number;

  episodes: Episodes[];
  constructor(private dataService: DataService, private route: ActivatedRoute) {

  }
  ngOnInit() {
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
