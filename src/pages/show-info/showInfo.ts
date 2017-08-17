import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';

@Component({
  selector: 'show-info',
  templateUrl: 'showInfo.html'
})
export class ShowInfo {
  icons: string[];
  info: any = {
    status: '前往中',
    time: '20 : 30',
    data: [
      {
        title: '姓名',
        body: '章程'
      },
      {
        title: '车牌号',
        body: '64378579'
      },
      {
        title: '车辆类型',
        body: '雷克萨斯'
      },
      {
        title: '等待时间',
        body: '20 : 30'
      },
      {
        title: '现场描述',
        body: '北京到天津方向,沙河100处第二车道发生碰撞'
      }
    ],
    img: [
      {url: '../assets/icon/icon_1.png'},
      {url: '../assets/icon/icon_2.png'},
      {url: '../assets/icon/icon_3.png'},
      {url: '../assets/icon/icon_4.png'},
      {url: '../assets/icon/icon_5.png'},
    ]
  }

  constructor() {

  }


}
