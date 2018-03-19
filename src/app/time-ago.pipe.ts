import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Timeago',

})

export class TimeAgoPipe {
  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';
}


//   transform(value:any): number{
//   let today:Date=new Date();
//   let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())
//   var dateDifference =Math.abs(value-todayWithNoTime )
//   const secondsInADay=86400;
//
//     var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds
//
//     var dateCounter = dateDifferenceSeconds/secondsInADay;
//
//     if (dateCounter >= 1 ){
//       return dateCounter;
//     }else{
//       return 0;
//     }
//   }
// }
