import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { MidellCard } from '../model/midellCard.model';
import { Observable } from 'rxjs';
import { MiddelCardComponent } from './../MainPageJpos/middel-card/middel-card.component';

@Injectable({
  providedIn: 'root',
})
export class SavejopsService {
  // successMsg = 'Data successfully saved.';
  jobsCollections: AngularFirestoreCollection<MidellCard> | undefined;
  // jobs: Observable<MidellCard[]> | undefined;

  constructor(private storSavejop: AngularFirestore) {
    this.jobsCollections = storSavejop.collection('savsjobs');
  }
  ReturnAllJobSaved() {
    return this.storSavejop.collection('savsjobs').snapshotChanges();
  }

  delete(body: any) {
    console.log('serv', body);
    return this.storSavejop.collection('savsjobs').doc(body).delete();
  }
}
