export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public author: string, public completeDate: Date, public submittedBy: string, public upVotes: number, public downVotes: number) {
    this.showDescription = false
  }
}
