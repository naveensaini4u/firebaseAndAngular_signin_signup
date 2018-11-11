import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
const settings = {timestampsInSnapshots: true};
/* const config = {
  apiKey: "AIzaSyDOeWhuQQCuSV4Cxwgm__iS3tGv5OBxM5E",
  authDomain: "devbhoomi-5499e.firebaseapp.com",
  databaseURL: "https://devbhoomi-5499e.firebaseio.com",
  projectId: "devbhoomi-5499e",
  storageBucket: "devbhoomi-5499e.appspot.com"
}; */
var config = {
  apiKey: "AIzaSyDOeWhuQQCuSV4Cxwgm__iS3tGv5OBxM5E",
  authDomain: "devbhoomi-5499e.firebaseapp.com",
  databaseURL: "https://devbhoomi-5499e.firebaseio.com",
  projectId: "devbhoomi-5499e",
  storageBucket: "devbhoomi-5499e.appspot.com",
  messagingSenderId: "782077967299"
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'innoStack';
  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
