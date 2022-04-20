import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MidellCard } from '../model/midellCard.model';

@Injectable({
  providedIn: 'root',
})
export class DetialsService {
  midellCard!: MidellCard;
  constructor() {}
  SendData() {
    this.midellCard;
  }
}
