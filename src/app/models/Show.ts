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
    if (this.image) {
      this.image = 'https' + this.image.substring(4);
    }
    this.summary = args.summary;
    this.prevEpUrl = (args._links.previousepisode) ? args._links.previousepisode.href : null;
    if (this.prevEpUrl) {
      this.prevEpUrl = 'https' + this.prevEpUrl.substring(4);
    }
    this.nextEpUrl = (args._links.nextepisode) ? args._links.nextepisode.href : null;
    if (this.nextEpUrl) {
      this.nextEpUrl = 'https' + this.nextEpUrl.substring(4);
    }
  }
  setprevEp(Ep) {
    this.prevEp = Ep;
  }
  setnextEp(Ep) {
    this.nextEp = Ep;
  }

}
