export class Episodes {
  id: number;
  name: string;
  number: number;
  airdate: string;
  summary: string;

  constructor(args?){
    this.id = args.id;
    this.name = args.name;
    this.number = args.number;
    this.airdate = args.airdate;
    this.summary = args.summary;
  }

}
