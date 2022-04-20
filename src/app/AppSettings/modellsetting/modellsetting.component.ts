import { Component, OnInit, Input } from '@angular/core';
import { Settings } from './../../model/setting.model';

@Component({
  selector: 'app-modellsetting',
  templateUrl: './modellsetting.component.html',
  styleUrls: ['./modellsetting.component.scss'],
})
export class ModellsettingComponent implements OnInit {
  @Input() pdfArraaay!: Settings;
  constructor() {}

  ngOnInit(): void {}
}
