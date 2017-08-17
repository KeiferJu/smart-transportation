import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import smartmapx  from 'smartmapx/smartmapx';

import {LoadingController} from 'ionic-angular';

import {Geolocation} from '@ionic-native/geolocation';
import 'com-badrit-macaddress/www/MacAddress.js'
import {Platform} from 'ionic-angular';
import { map } from "rxjs/operator/map";
import { ShowInfo } from '../show-info/showInfo'

// import { Camera } from '@ionic-native';
// import { Transfer } from '@ionic-native';
// import { FileUploadOptions } from '@ionic-native';

import { FileUploader } from 'ng2-file-upload'

declare let cordova: any;

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage implements OnInit {
  selectedItem: any;
  coords: any;
  map: any;
  currentPosition: any;
  student: any;
  students: any = [
    '拖车',
    '吊车',
    '轮胎抢修',
    '其它'
  ];

  // 信息
  uName: any;
  uDesc: any;
  uNum: any;
  public uploader: FileUploader = new FileUploader({ url: '图片上传地址'});
  selectedImgUrl: any[] = [];//存储已经选择的图片
  selectedImgLength = 0;

  // 构造
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, platform: Platform, geolocation: Geolocation) {
    this.selectedItem = navParams.get('item');


    platform.ready().then(() => {
      geolocation.getCurrentPosition().then((location) => {
        console.log(location)
        console.log(location.coords);
        this.coords = location.coords;
        this.currentPosition = '[' + location.coords.longitude + ',' + location.coords.latitude + ']处';

        this.map.on('load', ()=> {

          // 添加标注
          this.addMarker();
        });
      }).catch((error) => {

        console.log('Error getting location', error);

      });
    });
  }

  // 初始化
  ngOnInit() {

    this.map = new smartmapx.Map({
      container: 'map',
      style: 'http://59.110.157.48/map/style.json',
    });
  }


  setInfo(){
    console.log(this.student)
    console.log(this.uName)
    console.log(this.uNum)
    console.log(this.uDesc)
  }

  // 添加标注
  addMarker(){
    console.log(this.coords)
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(http://59.110.157.48/docs/static/map/images/default_marker.png)';
    el.style.width = '20px';
    el.style.height = '56px';
    new smartmapx.Marker(el, {offset: [-10, -28]})
    // .setLngLat([location.coords.longitude, location.coords.latitude])
      .setLngLat([this.coords.longitude, this.coords.latitude])
      .addTo(this.map);

    this.map.flyTo({
      center: [this.coords.longitude, this.coords.latitude]
    });
  }

  // 上传图片
  uploadPicture(){
    (<any>window).MacAddress.getMacAddress(
      function(macAddress) {alert(macAddress);},function(fail) {alert(fail);}
    );
  }

  //上传视频
  uploadVideo(){
    (<any>window).MacAddress.getMacAddress(
      function(macAddress) {alert(macAddress);},function(fail) {alert(fail);}
    );
  }
  // 上传
  presentLoading() {
    // 上传服务器
    let loader = this.loadingCtrl.create({
      content: "上报中,请稍后...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push(ShowInfo, {
      item: {
        title: {},
        data: '我是数据'
      }
    });

  }


}
