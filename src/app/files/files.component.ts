import { Component, OnInit } from '@angular/core';
import { FilesService } from './../_services/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit {
  constructor(private servies: FilesService) {}

  ngOnInit(): void {
    this.servies.getImageDetailList();
  }
}
