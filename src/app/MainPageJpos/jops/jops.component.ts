import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscriber } from 'rxjs';
import { MidellCard } from 'src/app/model/midellCard.model';
import { JopsService } from 'src/app/_services/jops.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Subscription } from 'rxjs';
import { SkillsService } from 'src/app/_services/skills.service';
import { Skills } from 'src/app/model/skills.model';
import { DetialsService } from 'src/app/_services/detials.service';

@Component({
  selector: 'app-jops',
  templateUrl: './jops.component.html',
  styleUrls: ['./jops.component.scss'],
})
export class JopsComponent implements OnInit, OnDestroy {
  @Input() requiredFileType?: string;
  cardArray: MidellCard[] = [];
  skillarray: Skills[] = [];
  skillObsrvabol: any = Subscriber;
  jobsObsrvabol: any = Subscriber;
  files?: boolean = false;
  fileName: any;
  uploadProgress?: number;
  uploadSub?: Subscription;
  constructor(
    private jobMidelCard: JopsService,
    private skill: SkillsService,
    private http: HttpClient,
    private details: DetialsService
  ) {}

  ngOnInit(): void {
    this.jobsObsrvabol = this.jobMidelCard
      .returnAlljops()
      .subscribe((data: any) => {
        this.cardArray = data.map((jobs: any) => {
          console.log(jobs.payload.doc.id);
          return {
            id: jobs.payload.doc.id,
            ...jobs.payload.doc.data(),
          };
        });
      });

    this.skillObsrvabol = this.skill
      .returnAllSkills()
      .subscribe((data: any) => {
        this.skillarray = data.map((skil: any) => {
          return {
            id: skil.payload.doc.id,
            ...skil.payload.doc.data(),
          };
        });
      });
  }
  ngOnDestroy() {
    this.jobsObsrvabol.unsubscribe();
    console.log('done');
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = 'File:   ' + file.name;
      // this.fileName = event.target.files;
      // this.fileName = file.type;
      // this.fileName = 'Size : ' + file.size;

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post(environment.baseUrl, formData);

      upload$.subscribe();
      this.files = this.fileName;
    }
  }

  SaveFilseInDataBase() {}
}
