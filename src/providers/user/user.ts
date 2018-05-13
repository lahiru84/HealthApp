import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Reference} from '@firebase/database-types';
import {User} from '@firebase/auth-types';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  user:Reference;
  currentUser:User;
  userid:any;

  constructor() {
    console.log('Hello UserProvider Provider');

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.currentUser=user;
        //this.user=firebase.database().ref('/user/${user.uid}');
        this.userid=firebase.auth().currentUser.uid;
    this.user=firebase.database().ref('user/'+this.userid)
      }
    })
  }
getUserProfile():Reference{
  return this.user;

}

}
