import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private skillFire: AngularFirestore) {}

  returnAllSkills() {
    return this.skillFire.collection('skills').snapshotChanges();
  }
}
