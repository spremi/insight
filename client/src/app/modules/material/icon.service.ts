//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AppIcons, MdiIcons } from './icon-list';
import { IconInfo, IconSet } from './icon-set';

@Injectable({
  providedIn: 'root',
})
export class IconService {

  constructor(private registry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  /**
   * Register all icons.
   */
  register() {
    this.registerSet(AppIcons);
    this.registerSet(MdiIcons);
  }

  /**
   * Register icons in specified set.
   */
  private registerSet(set: IconSet) {
    if (set.list.length === 0) {
      return;
    }

    set.list.forEach((arg: IconInfo) => {
      const iconPath = (set.path + '/' + arg.file).replace('//', '/');
      this.registry.addSvgIcon(
        arg.icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(iconPath));
    });
  }
}
