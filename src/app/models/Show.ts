export class Show {
  id: number;
  name: string;
  status: string;
  premiered: string;
  image: string;
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.status = args.status;
    this.premiered = args.premiered;
    this.image = (args.image) ? args.image.medium : null;
    this.summary = args.summary;
  }

}
