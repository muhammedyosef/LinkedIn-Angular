import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './../../_services/settings.service';
import { Settings } from './../../model/setting.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  pdfArray: Settings[] = [];
  pdfObsrvabol: any = Subscriber;
  flag: boolean = false;
  fileName: any;
  size: any;
  files?: boolean = false;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName += 'File:   ' + file.name;
      // this.fileName = event.target.files;
      // this.fileName = file.type;
      // this.fileName = 'Size : ' + file.size;

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post(environment.baseUrl, formData);

      upload$.subscribe();
      this.fileName += event.target.files;
      this.fileName += file.type;
      this.size += 'Size : ' + file.size / 10000;
    }
    this.files = true;
  }

  SaveFilseInDataBase() {}

  constructor(private http: HttpClient, private settingServ: SettingsService) {}
  ngOnInit(): void {
    this.pdfObsrvabol = this.settingServ
      .returnAllPdf()
      .subscribe((data: any) => {
        this.pdfArray = data.map((Pdf: any) => {
          return {
            id: Pdf.payload.doc.data(),
            ...Pdf.payload.doc.data(),
          };
        });
        console.log(data);
      });
  }
}
