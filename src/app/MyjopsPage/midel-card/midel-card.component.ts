import { Component, Input, OnInit } from '@angular/core';
import { MyjopCard } from 'src/app/model/MyjopPage.model';
import { MidellCard } from 'src/app/model/midellCard.model';
import { JopsService } from 'src/app/_services/jops.service';
import { SavejopsService } from './../../_services/savejops.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-midel-card',
  templateUrl: './midel-card.component.html',
  styleUrls: ['./midel-card.component.scss'],
})
export class MidelCardComponent implements OnInit {
  @Input() mymidellcard!: any;
  flag: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private jobssave: SavejopsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  Delete(id: any) {
    this.jobssave.delete(id);
    console.log('id:' + id);
    this.flag = true;
    // this._snackBar.open('saved', 'Done'),
    //   {
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   };
    this._snackBar.open('Deleted!!'),
      {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      };
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }
}
