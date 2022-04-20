import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private pdf: AngularFirestore) {}

  returnAllPdf() {
    return this.pdf.collection('settingpdf').snapshotChanges();
  }
}
