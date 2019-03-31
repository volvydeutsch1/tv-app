import {Episodes} from './Episodes';

export class Show {
  id: number;
  name: string;
  status: string;
  premiered: string;
  image: string;
  summary: string;
  prevEpUrl: string;
  nextEpUrl: string;
  prevEp: Episodes;
  nextEp: Episodes;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.status = args.status;
    this.premiered = args.premiered;
    this.image = (args.image) ? args.image.medium : null;
    this.summary = args.summary;
    this.prevEpUrl = (args._links.previousepisode) ? args._links.previousepisode.href : null;
    this.nextEpUrl = (args._links.nextepisode) ? args._links.nextepisode.href : null;
  }
  setprevEp(Ep) {
    this.prevEp = Ep;
  }
  setnextEp(Ep) {
    this.nextEp = Ep;
  }

}
