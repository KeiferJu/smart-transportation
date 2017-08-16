import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import smartmapx  from 'smartmapx/smartmapx';

import {LoadingController} from 'ionic-angular';

import {Geolocation} from '@ionic-native/geolocation';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage implements OnInit {
  selectedItem: any;
  coords: any;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, platform: Platform, geolocation: Geolocation) {
    this.selectedItem = navParams.get('item');

    platform.ready().then(() => {
      geolocation.getCurrentPosition().then((location) => {
        console.log(location)
        this.coords = location.coords;

      }).catch((error) => {

        console.log('Error getting location', error);

      });
    });
  }


  ngOnInit() {

    this.map = new smartmapx.Map({
      container: 'map',
      style: 'http://59.110.157.48/map/style.json',


    });

  }


  presentLoading() {
    // let loader = this.loadingCtrl.create({
    //   content: "上报中,请稍后...",
    //   duration: 3000
    // });
    // loader.present();

    let elCreature = document.createElement('div');
    elCreature.className = 'icon-creature';

    let markerCreature = new smartmapx.Marker(elCreature, {offset: [-20, -20]})
      .setLngLat([this.coords.longitude, this.coords.latitude])
      .addTo(this.map);



  }


}
