import { Component, Input, OnInit } from '@angular/core';
// import { MidellCard } from 'src/app/model/midellCard.model';
import { SavejopsService } from './../../_services/savejops.service';
import { JopsService } from './../../_services/jops.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { MidellCard } from './../../model/midellCard.model';

@Component({
  selector: 'app-middel-card',
  templateUrl: './middel-card.component.html',
  styleUrls: ['./middel-card.component.scss'],
})
export class MiddelCardComponent implements OnInit {
  @Input() midellcard!: MidellCard;
  flag: boolean = false;
  duration = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private JobSe: JopsService, private _snackBar: MatSnackBar) {}
  ngOnInit(): void {}

  SaveJob() {
    this.JobSe.create(this.midellcard).then(() => {
      this.flag = true;

      // this._snackBar.open('saved', 'Done'),
      //   {
      //     horizontalPosition: this.horizontalPosition,
      //     verticalPosition: this.verticalPosition,
      //   };
      this._snackBar.open('Saved!!'),
        {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        };
      setTimeout(() => {
        this._snackBar.dismiss();
      }, 2000);
    });
  }
}
