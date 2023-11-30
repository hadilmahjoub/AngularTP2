export class Cv {
  [x: string]: any;
  constructor(
    public id = 0,
    public name = '',
    public firstname = '',
    public path = '',
    public job?: string,
    public cin?: number,
    public age?: number
  ) {}
}
