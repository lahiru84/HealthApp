
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {  Platform } from 'ionic-angular';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// @IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html', 
})
export class MapPage {


  createMarker(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams)
   {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });
  
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['store']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    var myplace = {lat: -33.8665, lng: 151.1956};
  }

  
}
