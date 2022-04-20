import { Injectable } from '@angular/core';
import {
  AngularFireList,
  AngularFireDatabase,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  imageDetailList!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {}

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('Pdf');
  }

  insertImageDetails(imageDetails: any) {
    this.imageDetailList.push(imageDetails);
  }
}
