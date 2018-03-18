import { OnDestroy, ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private readonly async: AsyncPipe;

  private isDestroyed = false;
  private value: Date;
  private timer: Observable<string>;


  transform(obj: any, args?: any[]): any {


  private elapsed():string {
    let now = this.now().getTime();

    let delta = (now - this.value.getTime())/1000;

    if(delta < 60) {
      return `${Math.floor(delta)}s ago` ;
    } else if (delta < 3600) {
      return `${Math.floor(delta/60)}m ago`;
    } else if (delta < 86400) {
      return `${Math.floor(delta/3600)}h ago`;
    } else {
      return `${Math.floor(delta/ 86400)}d ago`;
    }
  }
}
