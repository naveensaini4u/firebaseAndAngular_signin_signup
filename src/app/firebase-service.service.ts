import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  
  ref = firebase.firestore().collection('users');
  constructor() { }
  registerUser(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(data.email).set(data).then((doc) => {
        observer.next({
          data:true
        });
      });
    });
  }

  getUser(data):Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(data.email).get().then((doc) => {
        console.log(doc)
        if(doc.exists){
          if(data.password === doc.data().password){
            observer.next({
              data:{
                msg:"success",
                login:true
              }
            });
          } else {
            observer.next({
              data:{
                msg:"fail",
                login:false
              }
            });
          }
        } else{
          observer.next({
            data:{
              msg:"invalid",
              login:false
            }
          });
        }
        
      });
    });
  }
}
