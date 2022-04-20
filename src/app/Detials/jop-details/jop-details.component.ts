import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MidellCard } from 'src/app/model/midellCard.model';
import { JopsService } from 'src/app/_services/jops.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-jop-details',
  templateUrl: './jop-details.component.html',
  styleUrls: ['./jop-details.component.scss'],
})
export class JopDetailsComponent implements OnInit {
  deti!: MidellCard | any;
  // @Output() newItemEvent = new EventEmitter<any>();
  cardArray: MidellCard[] = [];
  flag: boolean = false;
  jobsObsrvabol: any = Subscriber;
  constructor(private jobMidelCard: JopsService) {}
  ngOnInit(): void {
    this.jobsObsrvabol = this.jobMidelCard
      .returnAlljops()
      .subscribe((data: any) => {
        this.cardArray = data.map((jobs: any) => {
          return {
            id: jobs.payload.doc.id,
            ...jobs.payload.doc.data(),
          };
        });
        console.log(this.cardArray);
      });
  }
  addNewItem(item: any) {
    this.deti = item;
    this.flag = true;
    console.log(this.deti.joptitle);
  }
}
