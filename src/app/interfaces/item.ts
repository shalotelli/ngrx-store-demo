export class Item {
  public createdOn: Date = new Date();
  public modifiedOn: Date = new Date();

  constructor(
    public name: string,
    public description?: string,
    public complete: boolean = false
  ) {}
}
