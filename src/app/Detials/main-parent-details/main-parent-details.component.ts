import { Component, OnInit, Input } from '@angular/core';
import { JopsService } from 'src/app/_services/jops.service';
import { MidellCard } from 'src/app/model/midellCard.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-main-parent-details',
  templateUrl: './main-parent-details.component.html',
  styleUrls: ['./main-parent-details.component.scss'],
})
export class MainParentDetailsComponent implements OnInit {
  // cardArray: MidellCard[] = [];
  items!: any;
  // jobsObsrvabol: any = Subscriber;
  constructor() {}

  ngOnInit(): void {}
  addItem(newItem: any) {
    this.items = newItem;
    console.log(this.items);
  }
}
