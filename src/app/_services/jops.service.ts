import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MidellCard } from 'src/app/model/midellCard.model';

@Injectable({
  providedIn: 'root',
})
export class JopsService {
  constructor(private firestorejop: AngularFirestore) {}

  returnAlljops() {
    return this.firestorejop.collection('jobs').snapshotChanges();
  }
  returnone(id: any) {
    return this.firestorejop.collection('jobs').doc(id).snapshotChanges();
  }

  create(md: MidellCard): any {
    return this.firestorejop.collection('savsjobs').add(md);
  }
}
