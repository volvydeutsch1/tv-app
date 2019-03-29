export class Seasons {
  id: number;
  number: number;
  episodeOrder: number;
  premiereDate: string;
  image: string;

  constructor(args?){
    this.id = args.id;
    this.number = args.number;
    this.episodeOrder = args.episodeOrder;
    this.premiereDate = args.premiereDate;
    this.image = (args.image) ? args.image.medium : null;
  }

}
