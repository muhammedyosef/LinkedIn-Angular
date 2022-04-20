import { Component, Input, OnInit } from '@angular/core';
import { Qustions } from 'src/app/model/Questions.model';
import { SimperAcwer } from 'src/app/model/simperAcswer.model';

@Component({
  selector: 'app-inter-view-prop',
  templateUrl: './inter-view-prop.component.html',
  styleUrls: ['./inter-view-prop.component.scss'],
})
export class InterViewPropComponent implements OnInit {
  qustionsArray: Qustions[] = [];
  simpelsArray: SimperAcwer[] = [];
  constructor() {
    this.qustionsArray = [
      {
        id: 1,
        qustion: 'Tell Me About yourself?',
      },
      {
        id: 2,
        qustion: 'What is your greatest strenght?',
      },
      {
        id: 3,
        qustion: 'What is your greatest weaknes?',
      },
      {
        id: 4,
        qustion: 'why we shoud hair you?',
      },
      {
        id: 5,
        qustion: 'Why do you work here?',
      },
      {
        id: 6,
        qustion: 'Tell me about time you?',
      },
      {
        id: 7,
        qustion: 'what do you wont to leave?',
      },
      {
        id: 8,
        qustion: `Tell me aboutsometing you have `,
      },
      {
        id: 9,
        qustion: 'Can you explan your emplyument gap?',
      },
      {
        id: 10,
        qustion: 'where do you see yourself in 5 years?',
      },
      {
        id: 11,
        qustion: 'Describe your relationship style?',
      },
      {
        id: 12,
        qustion: 'ell me about atime you?',
      },
    ];
    this.simpelsArray = [
      {
        id: 1,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 2,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 3,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 4,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 5,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 6,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 7,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 8,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
      {
        id: 9,
        answer: 'Simpel answer',
        Views: '234,433 View',
        title1:
          'in my current role, i was in cahnge of loading a mojrcompany foe a new',
        title2:
          ' prodect lanching notional . the Project wae Challange bothbecouse of how large it',
        UnLock: 'UnLock',
      },
    ];
  }

  ngOnInit(): void {}
}
