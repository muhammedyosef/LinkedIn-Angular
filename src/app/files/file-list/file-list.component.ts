import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/_services/files.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  imageList!: any[];
  rowIndexArray!: any[];
  constructor(private service: FilesService) {}

  ngOnInit(): void {
    this.service.imageDetailList.snapshotChanges().subscribe((list: any) => {
      this.imageList = list.map((item: any) => {
        console.log(item);
        return item.payload.val();
      });
      this.rowIndexArray = Array.from(
        Array(Math.ceil((this.imageList.length + 1) / 3)).keys()
      );
    });
  }
}
