import {Injectable} from '@angular/core';
import {HeaderMenu} from '../models/headers/HeaderMenu';

@Injectable()
export class HeaderDataService {
  private menu: HeaderMenu;

  setMenu(menu) {
    this.menu = menu;
  }

  getMenu(): HeaderMenu {
    return this.menu;
  }
}
