//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'issuePriority',
})
export class IssuePriorityPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
