import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
    constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

    itemTapped(event, item) {
      if(item == 1){
        this.navCtrl.push(HomePage, {
          item: {
            title: item,
            data: '我是数据'
          }
        });
      }else{
        this.navCtrl.push(ItemDetailsPage, {
          item: {
            title: item,
            data: '我是数据'
          }
        });
      }

  }

}
