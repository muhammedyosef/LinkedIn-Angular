import { MyjopCard } from './../../model/MyjopPage.model';
import { Component, OnInit, Input } from '@angular/core';
import { SavejopsService } from './../../_services/savejops.service';
import { MidellCard } from 'src/app/model/midellCard.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-myjops',
  templateUrl: './myjops.component.html',
  styleUrls: ['./myjops.component.scss'],
})
export class MyjopsComponent implements OnInit {
  cardArray: MidellCard[] = [];
  jobsObsrvabol: any = Subscriber;
  constructor(private jobsSaved: SavejopsService) {}

  ngOnInit(): void {
    this.jobsObsrvabol = this.jobsSaved
      .ReturnAllJobSaved()
      .subscribe((data: any) => {
        this.cardArray = data.map((jobs: any) => {
          return {
            idd: jobs.payload.doc.id,
            ...jobs.payload.doc.data(),
          };
        });
        // console.log(data);
      });
  }
}
